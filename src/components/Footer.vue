<template>
    <div class="mt-16">

  
  <v-footer color="dark" class="footer ">
    <div class="line"></div>
    <div class="footer-content d-flex flex-column flex-lg-row ga-4">
      <div class="d-flex flex-column ga-2 align-lg-start align-center">
        <img
        class="mr-lg-7"
        src="../assets/Asset 2@3x.png"
        alt="Logo"
        style="height: 40px; cursor: pointer"
      />
        <div class="footer-desc text-center text-lg-left">
          Pesaport maximize your financial potential with our expert fund
          management services. We navigate markets strategically, delivering
          consistent growth and securing your financial future. Trust us to
          optimize your investments and achieve your goals. Invest with
          confidence, invest with us
        </div>
      </div>
      <div class="footer-column align-left text-lg-left text-center" v-for="(item, index) in items" :key="index">
        <h3 class="headline">{{ item.heading }}</h3>
        <ul class="text-lg-left text-center footer-text">
          <li class="f-text" v-for="(text, idx) in item.texts" :key="idx">{{ text }}</li>
        </ul>
      </div>
      <div>

     
 <div class="footer-column align-center align-lg-left">
    <h3 class="headline text-lg-left text-center">Partners</h3>
    <div id="partner-plot" class=" d-flex flex-row ga-2 justify-center justify-lg-start">
      <div v-for="(partner, index) in partners" class="partner-plot" :key="index">
        <img :src="partner.url" :alt="partner.alt" class="partner-image" />
      </div>
    </div>

    <h3 class="headline text-lg-left text-center">Payment Methods</h3>
    <div id="payment-plot" class="payment-plot">
        <div class=" d-flex justify-center justify-lg-start ">
        <div v-for="(method, index) in paymentMethods.slice(0, 3)" :key="index">
          <img :src="method.url" :alt="method.alt" class="payment-image" />
        </div>
      </div>
      <div class="d-flex justify-center justify-lg-start flex-wrap">
        <div v-for="(method, index) in paymentMethods.slice(3)" :key="index">
          <img :src="method.url" :alt="method.alt" class="payment-image" />
        </div>
      </div>
     
    </div>
  </div>
      
      </div>
    </div>

   
  </v-footer>
  <div class="  d-flex flex-column ga-3 ga-lg-0 flex-lg-row copyright align-center justify-space-between ">
    <!-- Left section with two lines aligned vertically -->
    <div class="left-section">
      <div  class="copyrigth-text text-center text-lg-left" >
        © 2020-2024 Pesaport
        <br>
      Pesaport. All rights reserved.
      </div>
      
    </div>
    
    <!-- Right section with six Font Awesome icons aligned horizontally -->
    <div class=" d-flex  ga-2">
      <img v-for="(icon, index) in socialIcons" :src="icon" :icon="icon" class="social-icon"  />
    </div>
  </div>
</div>
</template>



<script>
  import partner1 from '../assets/Asset 55@3x.png';
  import payment1 from '../assets/payment1.png';
  import payment2 from '../assets/payment2.png';
  import payment3 from '../assets/payment3.png';
  import payment4 from '../assets/payment4.png';
  import payment5 from '../assets/payment5.png';
  import payment6 from '../assets/payment6.png';
  import payment7 from '../assets/payment7.png';
  import whatsapp from '../assets/wa.png';
  import facebook from '../assets/facebook.png';
  import instagram from '../assets/insta.png';
  import youtube from '../assets/yt.png';
  import twitter from '../assets/twitter.png';
  import linkedin from '../assets/li.png';


export default {
name:'Footer',
  data() {
    return {
      items: [
        {
          heading: "Home",
          texts: ["Free demo", "Login", "Real Account", "Support"],
        },
        {
          heading: "Invest",
          texts: ["Features", "Investment", "FAQ'S"],
        },
        {
          heading: "Education",
          texts: ["Technical Analysis", "Fundamental", "Investing Strategies", "Tutorial"],
        },
        {
          heading: "Company",
          texts: ["About Company", "Terms", "Payment Policy", "Contact Us"],
        },
      ],
      partners: [
        { url: partner1, alt: 'Partner 1' },
        { url: partner1, alt: 'Partner 1' },
        { url: partner1, alt: 'Partner 1' },
      ],
      paymentMethods: [
        { url: payment1, alt: 'Payment Method 1' },
        { url: payment2, alt: 'Payment Method 1' },
        { url: payment3, alt: 'Payment Method 1' },
        { url: payment4, alt: 'Payment Method 1' },
        { url: payment5, alt: 'Payment Method 1' },
        { url: payment6, alt: 'Payment Method 1' },
        { url: payment7, alt: 'Payment Method 1' },
      ],
      socialIcons: [
        whatsapp,
        facebook,
        instagram,
        twitter,
        youtube,
      linkedin
      ]
     
    };
   
  },
  
  
  }
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #192135;
  padding:0 3rem
}

.line {
  width: 100%;
  border-top: 1px solid #fff;
  margin: 3rem 0rem;
}
.flex-container {
  display: flex;

}

.payment-image {
  width: calc(33.33% - 10px); /* Adjust image width as needed */
  margin: 5px; /* Adjust image margin as needed */
}
.footer-desc{
    font-size: 13px;
    color:#6388ac;
}

.footer-content {
  display: flex;
   gap: 1.3rem;
  justify-content: center;
  padding: 20px;
  color: #fff;
}
.footer-text{
    color:#a1a4a8;
    font-size: 13px;

}



.footer-column {
  margin: 0 20px 20px 20px;
  text-align: center;
}

.headline {
  font-size: 15px;
  margin:10px 0
}

ul {
  list-style-type: none;
  padding-left: 0;
  margin:10px 0
}
li{
    margin:7px 0;
    text-wrap: nowrap;

}
.partner-image
 {
  width: 20px;
}
.payment-image{
    width:45px
}
.copyright{
    width: 100%;
    background-color: #21283b;
    padding: 10px 60px;
}

.copyrigth-text{
    font-size: 14px;
    color: #6388ac;
}
.social-icon{
  width: 15px;
  height: 15px;
}
.social-icon:hover{
cursor: pointer;
}
.f-text:hover{
  cursor: pointer;
  color: white;
}
</style>
