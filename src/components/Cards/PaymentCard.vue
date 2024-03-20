<template>
    <div :class="{ 'custom-component': true, 'selected': isSelected }">
      <h3>{{ heading }}</h3>
      <p>{{ description1 }}</p>
      <p>{{ description2 }}</p>
      <v-btn @click="buttonClicked">{{ buttonText }}</v-btn>
      <div class="radio-btn">
        <v-radio v-model="radioValue" :value="true" @change="radioChanged"></v-radio>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      heading: String,
      description1: String,
      description2: String,
      buttonText: String,
      isSelected: Boolean, // New prop to indicate if this component is selected
    },
    data() {
      return {
        radioValue: false, // Initialize radioValue to false
      };
    },
    methods: {
      buttonClicked() {
        // Emit an event to notify the parent component
        this.$emit('button-clicked');
      },
      radioChanged(value) {
        // Emit an event to update the selected state in the parent component
        this.$emit('radio-changed', value);
      },
    },
  };
  </script>
  
  <style scoped>
  .custom-component {
    border: 1px solid #ccc;
    padding: 20px;
    position: relative;
    transition: border-color 0.3s ease;
  }
  .selected {
    border-color: yellow;
  }
  .radio-btn {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  </style>
  