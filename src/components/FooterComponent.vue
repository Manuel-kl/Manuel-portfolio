<template>
  <div class="footer">
    <div class="greetings">
      <h3>Langat Emmanuel <span>|</span> Have a good {{ dayOfWeek }}!</h3>
    </div>
    <div class="contact-links">
      <a href="#" onclick="event.preventDefault()">Github</a>
      <a href="#" onclick="event.preventDefault()">LinkedIn</a>
      <a href="#" onclick="event.preventDefault()">Twitter</a>
      <a href="#" onclick="event.preventDefault()">WhatsApp</a>
      <a href="#" onclick="event.preventDefault()">Instagram</a>
      <a href="#" onclick="event.preventDefault()">Email</a>
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
  padding: 4rem;
  gap: 1.25rem;
  align-items: center;
  border-top: 1px solid var(--border-color);
}
.footer .greetings {
  color: var(--font-color-base);
}
.footer .greetings h3 {
  font-size: 1.3rem;
  font-family: var(--font-family-base);
  font-weight: 600;
}
.footer .greetings span {
  color: var(--font-color-muted);
  font-size: 2rem;
  font-weight: 100;
}

.footer a {
  text-decoration: none;
  color: var(--font-color-base);
  padding-right: 1.3rem;
  font-family: var(--font-family-base);
  font-size: 1rem;
}
.footer a:hover {
  text-decoration: underline;
  text-decoration-thickness: 2px;
}
</style>