/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables


import { createVuetify } from "vuetify";
// Custom theme properties
const customDark = {
  dark: true,
  colors: {
    background: "#15202b",
    navbar:'#090c0f',
    surface: "#15202b",
    primary: "#ffa000",//dark yellow
    secondary: "#ffc800",//yellow
    textColor:'#ffffff',
    cardColor:'#192135',
    sidebarbg:'#0e151c',
    fieldColor:'#2e2e2e',
    textBg:'#15202b'
    
  },
};
const customLight = {
  light:true,
  colors: {
    background: "#e6e6e6",
    navbar:"#fafafa",
    surface: "#15202b",
    primary: "#ffa000",//dark yellow
    secondary: "#ffc800",//yellow
    textColor:'#000000',
    cardColor:'#FFFFFF',
    sidebarbg:'#dedede',
    fieldColor:'#a2a5aa',
    textBg:'#cbc9c9'
  },
};



// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default new createVuetify({
  theme: {
    defaultTheme: "customLight",
    themes: {
      customDark,
      customLight

    },
    typography: {
      fontFamily: '"Poppins", sans-serif'
    },
   
   
   
  },
  //
})
