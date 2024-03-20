<template>
  <div class="setting-container">
    <div class="settings d-flex flex-column flex-lg-row ga-6">
      <!-- Left Part -->
      <div class="left-part">
        <h3>Change Password</h3>
        <div class="input-group">
          <label for="current-password">Current Password</label>
          <input type="password" id="current-password" class="border-black" />
        </div>
        <div class="input-group">
          <label for="new-password">New Password</label>
          <input type="password" id="new-password" class="border-black" />
        </div>
        <div class="input-group">
          <label for="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" class="border-black" />
        </div>
      </div>
      <div class="vertical-line d-none d-lg-block"></div>
      <!-- Right Part -->
      <div class="right-part">
        <h3>Notifications</h3>
        <div class="notification-item d-flex ga-6 justify-space-between">
          <div>
            <h4>Email Notification</h4>
            <p>Turn on notification to get updates through email</p>
          </div>

          <v-switch color="success" inset></v-switch>
        </div>
        <hr />
        <div class="notification-item d-flex ga-6 justify-space-between">
          <div>
            <h4>Email Notification</h4>
            <p>Turn on notification to get updates through email</p>
          </div>

          <v-switch color="success" inset></v-switch>
        </div>
        <hr />
        <div class="notification-item d-flex ga-6 justify-space-between">
          <div>
            <h4>Email Notification</h4>
            <p>Turn on notification to get updates through email</p>
          </div>

          <v-switch color="success" inset></v-switch>
        </div>
        <hr />
      </div>

      <!-- Save Button -->
    </div>
    <div class="save-button">
      <v-btn color="secondary" @click="save">Save</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    save() {
      // Handle save action
    },
  },
};
</script>

<style scoped>
.setting-container {
  background-color: #fff;
  padding: 30px 50px;
  border-radius: 15px;
  margin: 20px;
}
.settings {
  display: flex;

  justify-content: space-around;
}

.input-group {
  margin-bottom: 20px;
}
.left-part > h3,
.right-part > h3 {
  margin-bottom: 2rem;
}
.input-group label {
  display: block;
  margin-bottom: 5px;
}

.notification-item {
  margin-top: 2rem;
}

.notification-item h3 {
  margin-bottom: 5px;
}

.save-button {
  margin-top: 20px;
  text-align: right;
}

.border-black {
  border: 1px solid #000;
  border-radius: 5px;
}
.vertical-line {
  border-left: 2px solid #ccc;
  height: auto;
  margin: 20px 10px;
}
</style>
