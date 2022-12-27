<template>
  <div class="contact-page">
    <div class="contact">
      <div class="contact-heading">
        <h2>Get in touch</h2>
      </div>
      <div class="contact-container">
        <div class="lwt">
          <h4>Let's work together</h4>
          <span></span>
        </div>
        <div class="links">
          <div class="contact-link">
            <a
              href="https://wa.me/+254743520021/?text=Hello%20Emmanuel..."
              target="_blank"
              ><img src="../assets/whatsapp.png" alt="whatsapp" />Whatsapp</a
            >
          </div>
          <div class="contact-link">
            <a href="https://twitter.com/Manuelkl_" target="_blank"
              ><img src="../assets/twitter.png" alt="twitter" />Twitter</a
            >
          </div>
          <div class="contact-link">
            <a href="https://www.instagram.com/manuel_k_l_/" target="_blank">
              <img src="../assets/instagram.png" alt="instagram" />Instagram
            </a>
          </div>
          <div class="contact-link">
            <a href="mailto:mannuehkipkirui@gmail.com" target="_blank"
              ><img src="../assets/mail.png" alt="mail" />Email</a
            >
          </div>
          <div class="contact-link">
            <a href="https://linkedin.com/in/elangat" target="_blank"
              ><img src="../assets/linkedin.png" alt="linkedin" />LinkedIn</a
            >
          </div>
        </div>
      </div>
    </div>
    <footer-component />
  </div>
</template>
<script>
import FooterComponent from "./FooterComponent.vue";
export default {
  components: { FooterComponent },
  props: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
  mounted() {},
};
</script>
<style lang='css' scoped>
.contact-page {
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
}
.contact {
  margin: 0 100px;
}
.contact-heading h2 {
  font-size: 2.3rem;
  font-family: var(--font-family-base);
  color: var(--font-color-heading);
  border-bottom: 1px solid var(--font-color-heading);
  padding: 20px 0;
}
.contact-container {
  display: flex;
  flex-direction: column;
  padding: 45px 0;
  text-align: center;
}
.contact-container .lwt {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  font-size: 1.7rem;
  color: var(--font-color-muted);
  gap: 5px;
  justify-content: center;
  padding-bottom: 35px;
}
.contact-container .lwt span {
  border-bottom: 1px dashed var(--font-color-muted);
  width: 20px;
  animation: blink 2s infinite;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}
.contact-container h4 {
  font-family: var(--font-family-base);
  max-width: fit-content;
}
.contact-container .links {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  max-width: 1000px;
}
.contact-container .contact-link {
  flex-basis: 20%;
  padding: 7px 25px;
  margin: 20px;
  border: 1px solid var(--background-color);
}
.contact-container .contact-link img {
  max-width: 40px;
  padding-right: 20px;
}
.contact-container .contact-link a {
  max-width: fit-content;
  text-decoration: none;
  font-size: 1.3rem;
  font-family: var(--font-family-base);
  align-items: center;
  display: flex;
  color: var(--font-color-muted);
}
.contact-container .contact-link:hover {
  border: 1px solid var(--font-color-muted);
  background-color: var(--border-color);
  padding: 7px 25px;
  border-radius: 45px;
}
</style>