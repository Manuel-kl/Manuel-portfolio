<template>
  <div class="footer">
    <div class="greetings">
      <h3>Langat Emmanuel <span>|</span> Have a good {{ dayOfWeek }}!</h3>
    </div>
    <div class="greetings-sm">
      <h3>Langat K. Emmanuel</h3>
      <h4>Have a good {{ dayOfWeek }}!</h4>
    </div>

    <div class="contact-links">
      <a href="https://github.com/Manuel-kl" target="_blank"
        ><font-awesome-icon icon="fa-brands fa-github" class="fa-icon sm-no"
      /></a>
      <a href="https://linkedin.com/in/elangat" target="_blank"
        ><font-awesome-icon icon="fa-brands fa-linkedin" class="fa-icon sm-no"
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
        ><font-awesome-icon icon="fa-brands fa-instagram" class="fa-icon sm-no"
      /></a>
    </div>
  </div>
</template>
<script>
export default {
  watch: {},
  components: {},
  props: {},
  data() {
    const day_of_the_week = { weekday: "long" };
    return {
      dayOfWeek: new Date().toLocaleDateString("en-US", day_of_the_week),
      // currentYear: new Date().getFullYear(),
    };
  },
  created() {},
  methods: {},
  mounted() {},
};
</script>
<style lang='css' scoped>
.footer {
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 1.25rem;
  align-items: center;
  border-top: 1px solid var(--border-color);
}
.footer .greetings {
  color: var(--font-color-base);
}
.footer .greetings-sm {
  color: var(--font-color-base);
  display: none;
}
.footer .greetings h3,
h4,
.footer .greetings-sm h3 {
  font-size: 1.1rem;
  font-family: var(--font-family-base);
  font-weight: 600;
}
.footer .greetings span {
  color: var(--font-color-muted);
  font-size: 1.6rem;
  font-weight: 100;
}

.footer a {
  text-decoration: none;
  color: var(--font-color-base);
  margin-right: 0.4rem;
}
.footer .fa-icon {
  font-size: 1.3rem;
  padding: 15px;
}
.footer .fa-icon:hover {
  background-color: var(--button-background-color);
  padding: 15px;
  transition: all 0.7s ease-in-out;
  border-radius: 50%;
}
@media screen and (max-width: 755px) {
  .footer .greetings-sm {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 0.5rem 0;
    padding-top: 0.7rem;
    font-size: 1.2rem;
  }
  .footer .greetings {
    display: none;
  }
  .footer .greetings-sm h3 {
    font-size: 1.2rem;
    word-spacing: 0.3rem;
  }
  .footer .greetings-sm h4 {
    color: var(--font-color-muted);
    font-weight: 100;
    font-size: 1rem;
  }
  .footer {
    padding: 0.4rem;
  }
  .sm-no {
    display: none;
  }
}
</style>