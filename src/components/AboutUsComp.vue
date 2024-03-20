<template>
  <div class="d-flex about-us-card flex-column align-center " >
    <div class="about-us-heading">
      <h2 >About Us</h2>
    </div>
    <div class="about-us-content">
      <p>
        As Pesaport, we've dedicated ourselves to revolutionizing the
        traditional investment landscape, making financial markets accessible to
        individuals globally
      </p>
      <p>
        In 2020, we achieved a significant milestone, emerging as one of the
        TOP-3 most downloaded financial apps worldwide on Google Play,
        underscoring our commitment to innovation and user satisfaction.
      </p>
      <p>
        Through our groundbreaking Social Trading feature, Pesaport aims to
        establish itself as a premier social trading network. With over 70
        million registered users and a suite of cutting-edge trading and
        investment tools, we're poised to lead the way in empowering investors
        worldwide.
      </p>
    </div>
    <div class="">
      <img src="../assets/about-img.png" alt="About Us Image" class="about-us-image"  style="max-width: 900px;" />
    </div>
  </div>
</template>



<style scoped>
.about-us-card {

  margin-top: 2rem;

  padding: 20px;
}

.about-us-heading {
  text-align: center;
  margin-top: 4rem;
 
}
.about-us-heading>h2 {
  font-size: 2.5rem;
  font-weight: 800;
 
}

.about-us-content>p {
 text-align: center;

 margin-bottom: 30px;
}
.about-us-content{
    width: 70%;
}
.about-us-image {
  text-align: center;
  margin-top:5rem;
}
@media (max-width: 600px) {
    .about-us-content{
    width:auto;
    padding: 0 10px;
}
.about-us-image{
    width: 350px;
}
}

@media (max-width: 350px) {
    .about-us-image{
    width: 270px;
}
}
</style>
