<template>
    <div class="d-flex flex-column align-center">
      <!-- FAQ Heading -->
      <h2 class="headline">FAQ'S</h2>
      
      <!-- FAQ Items -->
      <v-row  class="faq-container" v-for="(faq, index) in faqs" :key="index">
        <v-col cols="12">
          <div class="faq-item" @click="toggleAnswer(index)">
            <div class="question">{{ faq.question }}</div>
            <img v-if="!faq.open" src="../assets/Asset 11@3x.png" style="width: 20px;" alt="Expand">
          <img v-else src="../assets/Asset 13@3x.png" style="width: 20px;" alt="Collapse">
          </div>
          <!-- Horizontal Line -->
        
    
          <div class="answer" :class="{ 'answer-open': faq.open }">{{ faq.answer }}</div>
          <v-divider class="mt-2 " style="color: var(--theme-primary-base)"></v-divider>
        </v-col>
      </v-row>
      <v-btn class="faq-btn mt-8">
        <RouterLink to="/support" >
          <span class="mr-2 text-black">Contact us</span> 
        </RouterLink>
       
        <img src="../assets/up-right.png" style="width: 15px;"/>
      </v-btn>
    </div>
  </template>
  
  <script>
  export default {
    name:'Faq',
    data() {
      return {
        faqs: [
          { question: 'How can I research and analyze investment opportunities?', answer: 'Define your investment objectives, whether they are short-term goals like saving for a vacation or long-term goals like retirement planning. Your goals will influence your investment strategy and time horizon.', open: false },
          { question: 'What factors should I consider before making an investment decision?', answer: 'Define your investment objectives, whether they are short term goals like saving for a vacation or long-term goals like retirement planning. Your goals will influence your investment strategy and time horizon.', open: false },
          { question: 'What fees and charges are associated with using your investment platform?', answer: 'Define your investment objectives, whether they are short-term goals like saving for a vacation or long-term goals like retirement planning. Your goals will influence your investment strategy and time horizon.', open: false },
          { question: 'Do you offer any educational resources or tools for investors? ', answer: 'Define your investment objectives, whether they are short-term goals like saving for a vacation or long-term goals like retirement planning. Your goals will influence your investment strategy and time horizon.', open: false }
        ]
      };
    },
    methods: {
      toggleAnswer(index) {
        this.faqs[index].open = !this.faqs[index].open;
      }
    }
  };
  </script>
  
  <style scoped>
  .headline{
    margin-top: 5rem;
    font-size: 3.5rem;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 800px;
  }

 .faq-container{
    padding: 20px 50px;
 }
  .faq-item {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  
  .question {
    flex: 1;
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  .answer {
    overflow: hidden;
    transition: max-height 0.3s ease-in-out; /* Use max-height for smooth transition */
    max-height: 0px;
    margin-top: 30px;
    color: #ffa000;
    font-weight: 500;
  }
  
  .answer-open {
    max-height: 1000px; 
  }
  .faq-btn{
    border-radius: 20px !important;
    background-color: #ffc800;
    height: 50px  !important;
    padding: 0 20px;
  }
  @media (max-width: 600px) {
    .faq-container{
    padding: 20px;
 }
 .question{
    font-size: 1.2rem;
    
 }
  }
  </style>
  