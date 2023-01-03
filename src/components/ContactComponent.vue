<template>
  <div class="contact-page">
    <div class="contact">
      <div class="contact-heading">
        <h2>Get in touch</h2>
      </div>
      <div class="contact-container">
        <div class="lwt">
          <span></span>
          <h4>Let's work together</h4>
          <span></span>
        </div>
        <div class="c-links">
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
        <div class="form">
          <form @submit.prevent="post" class="message">
            <div class="inp">
              <label for="name">Your Name</label>
              <input
                v-model="form.name"
                type="text"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div class="inp">
              <label for="email">Email</label>
              <input
                v-model="form.email"
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div class="inp">
              <label for="message">Message</label>
              <textarea
                v-model="form.message"
                name="message"
                id="message"
                cols="10"
                rows="7"
                placeholder="Type your message"
                required
              ></textarea>
            </div>
            <div class="button">
              <button type="submit" :disabled="loading">
                <template v-if="loading">
                  <i class="fa fa-spinner fa-spin"></i> Sending...
                </template>
                <template v-else> SEND </template>
              </button>
            </div>
          </form>
          <div>
            <p class="response" v-if="message">{{ message }}</p>
            <p class="response-error" v-else-if="error">
              Failed to send, please try again
            </p>
          </div>
        </div>
      </div>
    </div>
    <footer-component />
  </div>
</template>
<script>
import axios from "axios";
import FooterComponent from "./FooterComponent.vue";
export default {
  watch: {},
  components: { FooterComponent },

  props: {},
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      data: null,
      message: "",
      loading: false,
      error: null,
    };
  },
  created() {},
  methods: {
    async post() {
      this.loading = true;
      try {
        const response = await axios.post(
          "http://manuel.discountbookcrawlers.com/api/message",
          this.form
        );
        this.data = response.data;
        this.message = "Message send successfully";
        this.form = {
          name: "",
          email: "",
          message: "",
        };
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false; // set loading state to false
      }
    },
  },
  mounted() {},
};
</script>
<style lang='css' scoped>
.response {
  color: rgb(5, 255, 80);
  font-size: 1.5rem;
  width: fit-content;
  margin: auto;
  padding: 1rem;
  border-radius: 15px;
  text-align: center;
  background-color: var(--border-color);
}
.response-error {
  color: rgb(236, 53, 53);
  font-size: 1.5rem;
  width: fit-content;
  margin: auto;
  padding: 1rem;
  border-radius: 15px;
  text-align: center;
  background-color: var(--border-color);
}
.contact-page {
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  padding-top: 70px;
}
::placeholder {
  font-weight: 100;
  font-style: italic;
  font-size: 1rem;
  color: var(--border-color);
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
  margin: 2.5rem auto;
  width: fit-content;
  align-items: center;
  text-align: left;
  background-color: var(--card-background-color);
  border-radius: 33px;
  padding: 10px 50px;
}
.message label {
  font-size: 1.2rem;
  color: var(--font-color-base);
  font-family: var(--font-family-base);
  padding: 20px 0 10px;
}
.message input,
.message textarea {
  width: 65vw;
  min-width: 250px;
  background-color: var(--font-color-muted);
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
  padding: 20px 0;
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
  color: #cbaa51;
}
.message button:hover {
  box-shadow: 1px 1px 2px 2px var(--border-color);
  background-color: #605332;
  color: var(--font-color-base);
}
.contact-container .lwt {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  font-size: 1.7rem;
  color: var(--font-color-muted);
  gap: 5px;
  justify-content: center;
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
.c-links {
  display: flex;
  border-bottom: 1px groove var(--font-color-muted);
  justify-content: center;
  padding: 55px 0;
}

.contact-container .links {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
}
.contact-container .contact-link {
  padding: 5px 15px;
  margin: 10px;
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
@media only screen and (min-width: 756px) and (max-width: 1192px) {
  .contact {
    margin: var(--margin-md);
  }
  .links {
    margin: auto;
  }
  .message {
    /* margin: 0; */
  }
}
@media screen and (min-width: 656px) and (max-width: 755px) {
  .contact {
    margin: var(--margin-md);
  }
}
@media screen and (min-width: 1192px) {
  .contact {
    margin: var(--margin-lg);
  }
}

@media screen and (max-width: 655px) {
  .contact {
    margin: 1rem;
  }
  .contact-heading h2 {
    font-size: 2rem;
  }
  .lwt h4 {
    font-size: 1.5rem;
  }
  .c-links {
    padding: 1rem 0;
  }
  .contact-container {
    width: 100%;
  }
  .contact-container .links {
    margin: 0 0 0 2rem;
    justify-content: flex-start;
  }
  .links .contact-link {
    margin: 0;
    padding: 0.5rem 0;
  }
  .links .contact-link a {
    font-size: 1rem;
  }
  .message {
    padding: 0 20px;
    /* margin: 2.5rem auto; */
  }
  .message input,
  .message textarea {
    background-color: var(--font-color-muted);
    border-radius: 5px;
    max-width: 330px;
    border: none;
    min-width: 200px;
    width: 65vw;
    overflow-x: hidden;
    font-size: 1rem;
  }
}
</style>