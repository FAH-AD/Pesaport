<template>
  <div class="profile-form">
    <!-- First Row -->
    <div class="form-row align-center">
      <div class="form-group d-flex ga-2 align-center">
        <img
          src="../assets/profile-pic.png"
          alt="Profile Image"
          class="profile-image"
        />

        <v-btn variant="outlined" class="profile-btn" @click="changeImage"
          >Change Picture</v-btn
        >
      </div>
      <div class="form-group">
        <v-text-field
          variant="solo-filled"
          v-model="username"
          label="Username"
        ></v-text-field>
      </div>
    </div>

    <!-- Second Row -->
    <div class="form-row">
      <div class="form-group">
        <v-text-field
          variant="solo-filled"
          v-model="firstName"
          label="First Name"
        ></v-text-field>
      </div>
      <div class="form-group">
        <v-text-field
          variant="solo-filled"
          v-model="lastName"
          label="Last Name"
        ></v-text-field>
      </div>
    </div>

    <!-- Third Row -->
    <div class="form-row">
      <div class="form-group">
        <v-text-field
          variant="solo-filled"
          v-model="phoneNumber"
          label="Phone Number"
        ></v-text-field>
      </div>
      <div class="form-group">
        <v-text-field
          variant="solo-filled"
          v-model="address"
          label="Address"
        ></v-text-field>
      </div>
    </div>

    <!-- Fourth Row -->
    <div class="form-row">
      <div class="form-group">
        <v-text-field
          variant="solo-filled"
          v-model="email"
          label="Email Address"
        ></v-text-field>
      </div>
      <div class="form-group d-flex flex-column-reverse flex-lg-row ga-2">
        <v-btn variant="outlined" class="profile-btn" @click="changeImage"
          >Confirm Email</v-btn>
        <v-radio-group inline>
          <v-radio
            color="primary"
            class="radio-gender"
            label="Male"
            value="one"
          ></v-radio>
          <v-radio
            color="primary"
            class="radio-gender"
            label="Female"
            value="two"
          ></v-radio>
        </v-radio-group>
      </div>
    </div>

    <!-- Fifth Row -->
    <div class="form-row">
      <div class="form-group">
        <v-textarea
          variant="solo-filled"
          v-model="mission"
          label="Mission and Vision"
          multi-line
          rows="5"
        ></v-textarea>
      </div>
    </div>

    <!-- Buttons -->
    <div class="buttons ga-4 d-flex justify-end">
      <v-btn variant="outlined" class="profile-btn" @click="cancel">Cancel</v-btn>
      <v-btn variant="outlined" class="save-btn"   @click="save">Save</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileImage: "../assets/profile-pic.png",
      username: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      email: "",
      gender: "male",
      mission: "",
    };
  },
  methods: {
    changeImage(event) {
      // Handle image change
      const file = event.target.files[0];
      if (file) {
        // Handle image upload or preview
        // For simplicity, we just set profileImage to a placeholder path
        this.profileImage = "/path/to/updated-image.jpg";
      }
    },
    cancel() {
      // Handle cancel action
    },
    save() {
      // Handle save action
      const formData = {
        profileImage: this.profileImage,
        username: this.username,
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
        address: this.address,
        email: this.email,
        gender: this.gender,
        mission: this.mission,
      };
      // Send formData to server or perform desired actions
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles here */
.profile-form {
  background-color: rgb(var(--v-theme-sidebarbg));
  border-radius: 20px;
  border: 1px solid #ffc800;
  padding: 30px;
  margin: 20px;
}

.form-row {
  display: flex;
  margin-bottom: 20px;
}

.form-group {
  flex: 1;
  margin-right: 10px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.profile-image {
  max-width: 150px;
  max-height: 150px;
}
.profile-btn {
  border-color: #ffc800;
  width: 120px !important;
  font-size: 10px;
  font-weight: 700;
}
.profile-btn:hover {
  background-color: #ffc800;
 color: white;
}
.buttons {
  text-align: right;
}
.radio-gender {
  font-size: 12px;
}
.save-btn{
    background-color: #ffc800;
}
@media (max-width: 600px) {
    .form-row {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.form-group {
  flex: 0;
  width: 100%;
  margin-right: 0px;
}

}
</style>
