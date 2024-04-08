<template>

<v-dialog v-model="dialog" max-width="350">
    <v-card class="d-flex  flex-column align-center" color="sidebarbg" >
      
      <v-card-text class="modal-text">
        Please make sure to complete <br/> all 4 steps to finish your KYC
      </v-card-text>
      <v-card-actions>
        <v-btn class="modal-btn" variant="outlined" color="primary"  @click="dialog = false">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-card color="sidebarbg" class="ma-4 pa-4">
    <v-tabs v-model="tab" color="secondary" background-color="sidebarbg">
      <v-tab
        class="tab-class d-flex align-center"
        v-for="(tabItem, index) in tabs"
        :key="index"
        :value="tabItem.value"
      >
        <img
          :src="tabItem.icon"
          class="mr-2"
          style="width: 20px; height: 20px"
        />
        <span class="d-none d-lg-block"> {{ tabItem.label }}</span>
      </v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item
          v-for="(tabItem, index) in tabs"
          :key="index"
          :value="tabItem.value"
        >
          <div v-if="!showViewPage[tabItem.value]">
            <h2 class="ma-4 mb-10">{{ tabItem.label }}</h2>
            <!-- Personal Information -->
            <div
              class="d-flex flex-column ga-10"
              v-if="tabItem.value === 'personalInfo'"
            >
              <v-row
                class="ga-5 flex-lg-row flex-column px-4 justify-space-between"
              >
                <v-text-field
                  variant="outlined"
                  density="compact"
                  v-model="formData[tabItem.value].title"
                  :items="['Mr', 'Mrs', 'Miss']"
                  label="Title"
                  :error-messages="getErrorMessage('personalInfo', 'title')"
                  :error="isFieldEmpty('personalInfo', 'title')"
                  required
                ></v-text-field>
                <v-text-field
                  variant="outlined"
                  density="compact"
                  v-model="formData[tabItem.value].firstName"
                  label="First Name"
                  :error-messages="getErrorMessage('personalInfo', 'firstName')"
                  :error="isFieldEmpty('personalInfo', 'firstName')"
                  required
                ></v-text-field>
              </v-row>
              <v-row class="ga-5 flex-lg-row flex-column px-4">
                <v-text-field
                  variant="outlined"
                  density="compact"
                  v-model="formData[tabItem.value].secondName"
                  label="Second Name"
                  :error-messages="
                    getErrorMessage('personalInfo', 'secondName')
                  "
                  :error="isFieldEmpty('personalInfo', 'secondName')"
                  required
                ></v-text-field>
                <v-text-field
                  variant="outlined"
                  density="compact"
                  v-model="formData[tabItem.value].surname"
                  label="Surname"
                  :error-messages="getErrorMessage('personalInfo', 'surname')"
                  :error="isFieldEmpty('personalInfo', 'surname')"
                  required
                ></v-text-field>
              </v-row>
              <v-row class="ga-5 flex-lg-row flex-column px-4">
                <v-text-field
                  variant="outlined"
                  density="compact"
                  v-model="formData[tabItem.value].dob"
                  label="Date of Birth"
                  :error-messages="getErrorMessage('personalInfo', 'dob')"
                  :error="isFieldEmpty('personalInfo', 'dob')"
                  required
                ></v-text-field>

                <v-select
                  variant="outlined"
                  density="compact"
                  v-model="formData[tabItem.value].gender"
                  :items="['Male', 'Female', 'Other']"
                  label="Gender"
                  :error-messages="getErrorMessage('personalInfo', 'gender')"
                  :error="isFieldEmpty('personalInfo', 'gender')"
                  required
                ></v-select>
              </v-row>
              <input class="my-1" type="file" @change="changeImage" />

              <div>
                <v-btn class="mt-8 btn" color="primary" @click="submitForm(tabItem.value)"
                  >Submit</v-btn>
              </div>
            </div>
            <!-- Contact Details -->
            <div
              class="d-flex flex-column ga-10"
              v-else-if="tabItem.value === 'contactDetails'"
            >
              <v-row class="ga-5 flex-lg-row flex-column px-4">
                <v-text-field
                  variant="outlined"
                  density="compact"
                  v-model="formData[tabItem.value].mobileNumber"
                  label="Mobile Number"
                  :error-messages="
                    getErrorMessage('contactDetails', 'mobileNumber')
                  "
                  :error="isFieldEmpty('contactDetails', 'mobileNumber')"
                  required
                ></v-text-field>
                <v-text-field
                  variant="outlined"
                  density="compact"
                  v-model="formData[tabItem.value].email"
                  label="Email"
                  :error-messages="getErrorMessage('contactDetails', 'email')"
                  :error="isFieldEmpty('contactDetails', 'email')"
                  required
                ></v-text-field>
              </v-row>

              <v-text-field
                variant="outlined"
                density="compact"
                v-model="formData[tabItem.value].address"
                label="Address"
                :error-messages="getErrorMessage('contactDetails', 'address')"
                :error="isFieldEmpty('contactDetails', 'address')"
                required
              ></v-text-field>
              <v-row class="ga-5 flex-lg-row flex-column px-4">
                <v-text-field
                  variant="outlined"
                  density="compact"
                  v-model="formData[tabItem.value].city"
                  label="City"
                  :error-messages="getErrorMessage('contactDetails', 'city')"
                  :error="isFieldEmpty('contactDetails', 'city')"
                  required
                ></v-text-field>
                <v-text-field
                  variant="outlined"
                  density="compact"
                  v-model="formData[tabItem.value].country"
                  label="Country"
                  :error-messages="getErrorMessage('contactDetails', 'country')"
                  :error="isFieldEmpty('contactDetails', 'country')"
                  required
                ></v-text-field>
              </v-row>

              <div>
                <v-btn class="mt-8 btn" color="primary" @click="submitForm(tabItem.value)"
                  >Submit</v-btn>
              </div>
            </div>
            <!-- Account Holder -->
            <div
              class="d-flex flex-column ga-10"
              v-else-if="tabItem.value === 'accountHolder'"
            >
              <v-row class="ga-5 flex-lg-row flex-column px-4">
                <v-text-field
                  variant="outlined"
                  density="compact"
                  v-model="formData[tabItem.value].accountHolder"
                  label="Account Holder"
                  :error-messages="
                    getErrorMessage('accountHolder', 'accountHolder')
                  "
                  :error="isFieldEmpty('accountHolder', 'accountHolder')"
                  required
                ></v-text-field>
                <v-text-field
                  variant="outlined"
                  density="compact"
                  v-model="formData[tabItem.value].branchName"
                  label="Branch Name"
                  :error-messages="
                    getErrorMessage('accountHolder', 'branchName')
                  "
                  :error="isFieldEmpty('accountHolder', 'branchName')"
                  required
                ></v-text-field>
              </v-row>

              <v-row class="ga-5 flex-lg-row flex-column px-4">
                <v-select
                  v-model="formData[tabItem.value].bank"
                  :items="['Bank A', 'Bank B', 'Bank C']"
                  label="Select Bank"
                  :error-messages="getErrorMessage('accountHolder', 'bank')"
                  :error="isFieldEmpty('accountHolder', 'bank')"
                  required
                ></v-select>
                <v-text-field
                  variant="outlined"
                  density="compact"
                  v-model="formData[tabItem.value].accountNumber"
                  label="Account Number"
                  :error-messages="
                    getErrorMessage('accountHolder', 'accountNumber')
                  "
                  :error="isFieldEmpty('accountHolder', 'accountNumber')"
                  required
                ></v-text-field>
              </v-row>

              <div>
                <v-btn class="mt-8 btn" color="primary" @click="submitForm(tabItem.value)"
                  >Submit</v-btn>
              </div>
            </div>
            <!-- Compliance Document -->
            <div
              class="d-flex flex-column ga-10"
              v-else-if="tabItem.value === 'complianceDocument'"
            >
              <v-row class="ga-5 flex-lg-row flex-column px-4">
                <v-select
                  v-model="formData[tabItem.value].idType"
                  :items="['ID Type 1', 'ID Type 2', 'ID Type 3']"
                  label="Select ID Type"
                  :error-messages="
                    getErrorMessage('complianceDocument', 'idType')
                  "
                  :error="isFieldEmpty('complianceDocument', 'idType')"
                  required
                ></v-select>
                <v-text-field
                  variant="outlined"
                  density="compact"
                  v-model="formData[tabItem.value].idReferenceNumber"
                  label="ID Reference Number"
                  :error-messages="
                    getErrorMessage('complianceDocument', 'idReferenceNumber')
                  "
                  :error="
                    isFieldEmpty('complianceDocument', 'idReferenceNumber')
                  "
                  required
                ></v-text-field>
              </v-row>

              <v-row class="ga-5 px-4">
                <v-checkbox
                  v-model="formData[tabItem.value].agreeTerms"
                  label="I agree to the terms and conditions"
                  :error-messages="
                    getErrorMessage('complianceDocument', 'agreeTerms')
                  "
                  :error="isFieldEmpty('complianceDocument', 'agreeTerms')"
                  required
                ></v-checkbox>
                <input type="file" @change="changeImage" />
              </v-row>
              <div>
                <v-btn class="mt-8 btn" color="primary" @click="submitForm(tabItem.value)"
                  >Submit</v-btn
                >
              </div>
            </div>

            <!-- Settings -->
            <div v-else-if="tabItem.value === 'extraDetails'">
              <div class="d-flex justify-space-between align-center">
                <div class="d-flex setting flex-column">
                  <h4>Save my Activity Logs</h4>
                  <p>
                    You can save your all activity logs including unusual
                    activity detected.
                  </p>
                </div>
                <v-switch
                  color="secondary"
                  inset
                  density="compact"
                  v-model="formData[tabItem.value].switch"
                ></v-switch>
              </div>
              <v-divider :thickness="2" />

              <div class="d-flex justify-space-between mt-8 align-center">
                <div class="d-flex ga-3 setting flex-column">
                  <div class="d-flex ga-2">
                    <h4>2 Factor Auth</h4>
                    <v-btn
                      density="compact"
                      class="btn-2"
                      elevation="0"
                      color="primary"
                      >Enabled</v-btn
                    >
                  </div>
                  <p>
                    Secure your account with 2FA security. When it is activated
                    you will need to enter not only your password, but also a
                    special code using app. You can receive this code by in
                    mobile app.
                  </p>
                </div>
                <v-btn class="btn" elevation="0" color="primary">Disable</v-btn>
              </div>
            </div>
          </div>
          <template v-else>
            <v-row class="justify-space-between align-center ma-3">
              <h2 class="my-6 tab-heading">{{ tabItem.label }}</h2>
              <div class="edit-img" v-if="tabItem.value !== 'extraDetails'">
                <img
                  @click="showViewPage[tabItem.value] = false"
                  src="../assets/pen-to-square-regular.svg"
                  style="width: 20px; height: 20px"
                />
              </div>
            </v-row>

            <img
              v-if="formData[tabItem.value].image"
              :src="formData[tabItem.value].image"
              alt="Uploaded Image"
              style="max-width: 100px; max-height: 100px"
            />

            <v-row
              v-if="tabItem.value === 'personalInfo'"
              class="data-row flex-lg-row flex-column d-flex ma-3"
            >
              <p><span>Title:</span> {{ formData[tabItem.value].title }}</p>

              <p>
                <span>First Name:</span> {{ formData[tabItem.value].firstName }}
              </p>
            </v-row>
            <v-row
              v-if="tabItem.value === 'personalInfo'"
              class="data-row d-flex flex-lg-row flex-column ma-3"
            >
              <p>
                <span>Second Name:</span>
                {{ formData[tabItem.value].secondName }}
              </p>

              <p><span>SurName:</span> {{ formData[tabItem.value].surname }}</p>
            </v-row>
            <v-row
              v-if="tabItem.value === 'personalInfo'"
              class="data-row flex-lg-row flex-column ma-3"
            >
              <p>
                <span>Date of Birth:</span> {{ formData[tabItem.value].dob }}
              </p>

              <p><span>Gender:</span> {{ formData[tabItem.value].gender }}</p>
            </v-row>

            <v-row
              v-if="tabItem.value === 'contactDetails'"
              class="data-row flex-lg-row flex-column ma-3"
            >
              <p>
                <span>Mobile Number:</span>
                {{ formData[tabItem.value].mobileNumber }}
              </p>

              <p><span>Email:</span> {{ formData[tabItem.value].email }}</p>
            </v-row>

            <p class="ma-3 address" v-if="tabItem.value === 'contactDetails'">
              Address: {{ formData[tabItem.value].address }}
            </p>
            <v-row
              v-if="tabItem.value === 'contactDetails'"
              class="data-row flex-lg-row flex-column ma-3"
            >
              <p><span>City:</span> {{ formData[tabItem.value].city }}</p>

              <p><span>Country:</span> {{ formData[tabItem.value].country }}</p>
            </v-row>
            <v-row
              v-if="tabItem.value === 'accountHolder'"
              class="data-row flex-lg-row flex-column ma-3"
            >
              <p>
                <span>Account Holder:</span>
                {{ formData[tabItem.value].accountHolder }}
              </p>
              <p>
                <span>Branch Name:</span>
                {{ formData[tabItem.value].branchName }}
              </p>
            </v-row>
            <v-row
              v-if="tabItem.value === 'accountHolder'"
              class="data-row flex-lg-row flex-column ma-3"
            >
              <p><span>Bank:</span> {{ formData[tabItem.value].bank }}</p>
              <p>
                <span>Account Number:</span
                >{{ formData[tabItem.value].accountNumber }}
              </p>
            </v-row>

            <v-row class="data-row flex-lg-row flex-column ma-3">
              <p
                class="d-flex justify-space-between ga-16"
                v-if="tabItem.value === 'complianceDocument'"
              >
                <span>ID Type:</span>
                <span>{{ formData[tabItem.value].idType }}</span>
              </p>
              <p
                class="d-flex justify-space-between ga-16"
                v-if="tabItem.value === 'complianceDocument'"
              >
                <span>ID Reference Number:</span>
                <span>{{ formData[tabItem.value].idReferenceNumber }}</span>
              </p>
            </v-row>

            <div class="ma-3" v-if="tabItem.value === 'extraDetails'">
              <div class="d-flex flex-column flex-lg-row ga-2 justify-space-between align-start align-lg-center">
                <div class="d-flex setting flex-column">
                  <h4>Save my Activity Logs</h4>
                  <p>
                    You can save your all activity logs including unusual
                    activity detected.
                  </p>
                </div>
                <v-switch
                  color="secondary"
                  inset
                  density="compact"
                  v-model="formData[tabItem.value].switch"
                ></v-switch>
              </div>
              <v-divider :thickness="2" />

              <div class="d-flex flex-column flex-lg-row ga-2 justify-space-between mt-8 align-start align-lg-center">
                <div class="d-flex ga-3 setting flex-column">
                  <div class="d-flex ga-2">
                    <h4>2 Factor Auth</h4>
                    <v-btn
                      density="compact"
                      class="btn-2"
                      elevation="0"
                      color="primary"
                      >Enabled</v-btn
                    >
                  </div>
                  <p>
                    Secure your account with 2FA security. When it is activated
                    you will need to enter not only your password, but also a
                    special code using app. You can receive this code by in
                    mobile app.
                  </p>
                </div>
                <v-btn class="btn" elevation="0" color="primary">Disable</v-btn>
              </div>
            </div>
          </template>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>
<script setup>
import icon1 from "../assets/user-regular.svg";
import icon2 from "../assets/envelope-regular.svg";
import icon3 from "../assets/house-solid.svg";
import icon4 from "../assets/file-regular.svg";
import icon5 from "../assets/lock-solid.svg";
</script>
<script>
export default {
  data() {
    return {
      tabs: [
        { label: "Personal Info.", value: "personalInfo", icon: icon1 },
        { label: "Address", value: "contactDetails", icon: icon2 },
        { label: "Bank", value: "accountHolder", icon: icon3 },
        { label: "Document", value: "complianceDocument", icon: icon4 },
        { label: "Security", value: "extraDetails", icon: icon5 },
      ],
      tab: "personalInfo",
      dialog: true,
      showViewPage: {
        personalInfo: true,
        contactDetails: true,
        accountHolder: true,
        complianceDocument: true,
        extraDetails: true,
      },
      formData: {
        personalInfo: {
          title: "",
          firstName: "",
          secondName: "",
          surname: "",
          dob: "",
          gender: "",
          image: null,
        },
        contactDetails: {
          mobileNumber: "",
          email: "",
          address: "",
          city: "",
          country: "",
        },
        accountHolder: {
          accountHolder: "",
          branchName: "",
          bank: "",
          accountNumber: "",
        },
        complianceDocument: {
          idType: "",
          idReferenceNumber: "",
          agreeTerms: false,
        },
        extraDetails: {
          text: "",
          switch: false,
        },
      },
    };
  },
  methods: {
    changeImage(event) {
      const tabValue = this.tab;
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.formData[tabValue].image = reader.result;
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    },
    submitForm(tabValue) {
      // Check if all required fields are filled
      if (this.validateForm(tabValue)) {
        // Update view page data
        this.showViewPage[tabValue] = true;
      } else {
        // Show error message
        alert("Please fill in all required fields");
      }
    },
    validateForm(tabValue) {
      const data = this.formData[tabValue];
      switch (tabValue) {
        case "personalInfo":
          return (
            data.title &&
            data.firstName &&
            data.secondName &&
            data.surname &&
            data.dob &&
            data.gender
          );
        case "contactDetails":
          return (
            data.mobileNumber &&
            data.email &&
            data.address &&
            data.city &&
            data.country
          );
        case "accountHolder":
          return (
            data.accountHolder &&
            data.branchName &&
            data.bank &&
            data.accountNumber
          );
        case "complianceDocument":
          return data.idType && data.idReferenceNumber && data.agreeTerms;
        case "extraDetails":
          return data.text && data.switch;
        default:
          return true;
      }
    },
    isFieldEmpty(tabValue, field) {
      return (
        this.formData[tabValue][field] === "" &&
        this.showViewPage[tabValue] === false
      );
    },
    getErrorMessage(tabValue, field) {
      if (this.isFieldEmpty(tabValue, field)) {
        return "Field is required";
      }
      return "";
    },
  },
};
</script>

<style scoped>
.tab-class {
  font-size: 12px;
  gap: 5px;
}
.edit-img {
  background-color: #ffc800;
  border-radius: 10px;
  height: 30px;
  padding: 10px;
  padding-top: 5px;
}
p > span {
  font-weight: bold;
}
.edit-img:hover {
  cursor: pointer;
}
.btn-2 {
  font-size: 11px !important;
  width: 30px !important;
  color: white !important;
}
.data-row {
  gap: 10rem;
}
.modal-text{
  font-weight: bold !important;
  font-size: 1rem !important;
  text-align: center !important;
}
.modal-btn{
  background-color: #ffc800 !important;
  color: white !important;
  
}
.modal{
  max-width: 200px !important;
}
.address {
  font-weight: bold;
}
.setting > p {
  font-size: 11px;
}
.data-row > p:nth-of-type(1) {
  width: 50%;
}
.btn {
  color: white !important;
  background-color:#ffc800 !important;
}
@media (max-width: 600px) {
  .data-row {
    gap: 0.5rem;
  }
  .tab-heading {
    font-size: 1rem !important;
  }
  .tab-class {
    font-size: 10px;
    min-width: 40px !important;
    gap: 5px;
  }
}
</style>
