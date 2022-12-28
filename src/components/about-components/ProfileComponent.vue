<template>
  <div class="about-m">
    <div class="profile">
      <div class="profile-img">
        <img src="../../assets/manuel.jpg" alt="Manuel's profile picture" />
      </div>
      <div class="name">
        <h1>Langat Emmanuel</h1>
      </div>
      <div class="bio">
        <p>
          Software Developer & Telecommunication and Information Engineering
          Student
        </p>
      </div>
      <div class="contact-links">
        <a href="https://github.com/Manuel-kl" target="_blank"
          ><font-awesome-icon icon="fa-brands fa-github" class="fa-icon"
        /></a>
        <a href="https://linkedin.com/in/elangat" target="_blank"
          ><font-awesome-icon icon="fa-brands fa-linkedin" class="fa-icon"
        /></a>
        <a href="mailto:mannuehkipkirui@gmail.com" target="_blank"
          ><font-awesome-icon icon="fa-regular fa-envelope" class="fa-icon"
        /></a>
        <a href="https://twitter.com/Manuelkl_" target="_blank"
          ><font-awesome-icon icon="fa-brands fa-twitter" class="fa-icon"
        /></a>
        <a
          href="https://wa.me/+254743520021/?text=Hello%20Emmanuel..."
          target="_blank"
          ><font-awesome-icon icon="fa-brands fa-whatsapp" class="fa-icon"
        /></a>
        <a href="https://www.instagram.com/manuel_k_l_/" target="_blank"
          ><font-awesome-icon icon="fa-brands fa-instagram" class="fa-icon"
        /></a>
      </div>
    </div>
    <div class="description">
      <p>
        Hello World! My name is Langat Emmanuel Kipkirui. I'm a Software
        Developer and a Telecommunication and Information Engineering Student at
        Jkuat.
      </p>
      <p>
        I am also currently enrolled in
        <a href="https://www.alxafrica.com/" target="_blank" class="alx-link"
          >ALX Africa </a
        >Software Engineering programme.
      </p>
      <div class="loading">
        <div>
          <div class="dot">__</div>
          <div class="dot">__</div>
          <div class="dot">__</div>
          <div class="dot">__</div>
          <div class="dot">__</div>
          <div class="dot">__</div>
          <div class="dot">__</div>
          <div class="dot">__</div>
          <div class="dot">__</div>
          <div class="dot-t">__</div>
        </div>
        <div>
          <div class="dot">__</div>
          <div class="dot">__</div>
          <div class="dot">__</div>
          <div class="dot">__</div>
          <div class="dot">__</div>
          <div class="dot">__</div>
          <div class="dot">__</div>
          <div class="dot">__</div>
          <div class="dot">__</div>
          <div class="dot-t">__</div>
        </div>
        <div>
          <div class="dot">__</div>
          <div class="dot">__</div>
          <div class="dot">__</div>
          <div class="dot">__</div>
          <div class="dot">__</div>
          <div class="dot">__</div>
          <div class="dot">__</div>
          <div class="dot">__</div>
          <div class="dot">__</div>
          <div class="dot-t">__</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
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
@media only screen and (min-width: 878px) and (max-width: 1192px) {
  .about-m {
    margin: var(--margin-md);
  }
}
.about-m {
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin: var(--margin-lg);
  padding-bottom: 20px;
}
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile-img img {
  width: 200px;
  border-radius: 50%;
}
.profile .name {
  color: var(--font-color-heading);
  font-family: var(--font-family-homepage);
}
.profile .bio {
  color: var(--font-color-muted);
  font-family: var(--font-family-homepage);
  text-align: center;
  padding: 10px 0;
}
.profile .contact-links {
  align-items: center;
}

.profile .contact-links .fa-icon {
  font-size: 1.3rem;
  color: var(--font-color-heading);
  padding: 15px;
}
.profile .contact-links .fa-icon:hover {
  background-color: var(--button-background-color);
  padding: 15px;
  transition: all 0.7s ease-in-out;
  border-radius: 50%;
}
.description {
  display: flex;
  flex-direction: column;
}
.description p {
  color: var(--navbar-color);
  line-height: 1.5rem;
  font-family: var(--font-family-base);
  font-size: 1.2rem;
  padding: 15px 0;
}
.loading {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.dot {
  width: 10px;
  height: 10px;
  display: flex;
  flex-direction: row;
  color: var(--border-color);
  animation: blink 2s infinite;
}
.dot-t {
  width: 10px;
  height: 10px;
  display: flex;
  flex-direction: row;
  color: var(--font-color-muted);
  animation: blink 2s infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.alx-link {
  text-decoration: none;
  color: var(--star);
  background-color: var(--button-background-color);
  line-height: 1;
  border: 1px solid var(--border-color);
  padding: 0.5rem 0.6rem;
  margin: 0 5px;
  border-radius: 24px;
  font-size: 0.8rem;
  font-family: var(--font-family-base);
  letter-spacing: 0.7px;
  word-spacing: 2px;
  cursor: pointer;
}
.alx-link:hover {
  border: 1px solid var(--font-color-muted);
}
</style>