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
        <form action="post" class="message">
          <div class="inp">
            <label for="name">Your Name</label>
            <input type="text" id="name" />
          </div>
          <div class="inp">
            <label for="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div class="inp">
            <label for="message">Message</label>
            <textarea name="message" id="message" cols="10" rows="7"></textarea>
          </div>
          <div class="button">
            <a href="#"><button>SEND</button></a>
          </div>
        </form>
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
.message {
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: left;
  min-width: 500px;
  background-color: var(--card-background-color);
  border-radius: 33px;
  padding: 100px;
}
.message label {
  font-size: 1.2rem;
  color: var(--font-color-base);
  font-family: var(--font-family-base);
  padding: 20px 0 10px;
}
.message input,
.message textarea {
  width: 20rem;
  min-width: 250px;
  max-width: 350px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-size: 1.2rem;
  font-family: var(--font-family-base);
}
.message input:focus-visible,
.message textarea:focus-visible {
  outline: 3px groove var(--star);
}
.message .inp {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}
.message .button {
  padding: 50px 0;
}
.message button {
  padding: 10px 20px;
  background-color: var(--button-background-color);
  border-radius: 5px;
  font-family: var(--font-family-base);
  border: 1px solid var(--font-color-muted);
  font-weight: 600;
  cursor: pointer;
  font-size: 1.4rem;
  letter-spacing: 0.7px;
  color: var(--star);
}
.message button:hover {
  box-shadow: 1px 1px 2px 2px var(--star);
}
.contact-container .lwt {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  font-size: 1.7rem;
  color: var(--font-color-muted);
  gap: 5px;
  justify-content: center;
  padding-bottom: 55px;
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
  padding-top: 55px;
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
  padding: 7px 25px;
  font-size: 1.3rem;
  font-family: var(--font-family-base);
  align-items: center;
  border: 1px solid var(--background-color);
  display: flex;
  color: var(--font-color-muted);
}
.contact-container .contact-link a:hover {
  border: 1px solid var(--font-color-muted);
  background-color: var(--border-color);
  padding: 7px 25px;
  border-radius: 45px;
}
</style>