<template>
  <div class="about">
    <div>
      <div class="about-title">
        <h2>About</h2>
      </div>
      <div>
        <profile-component />
      </div>
    </div>
    <div class="skills">
      <skills-component />
      <frameworks-component />
    </div>
    <footer-component />
  </div>
</template>
<script>
import FrameworksComponent from "./about-components/FrameworksComponent.vue";
import ProfileComponent from "./about-components/ProfileComponent.vue";
import SkillsComponent from "./about-components/SkillsComponent.vue";
import FooterComponent from "./FooterComponent.vue";
export default {
  components: {
    ProfileComponent,
    SkillsComponent,
    FrameworksComponent,
    FooterComponent,
  },
  props: {},
  mounted() {
    // Add an event listener to track scrolling
    window.addEventListener("scroll", function () {
      // Track a scroll event in Matomo
      window._paq.push(["trackEvent", "Window", "Scroll"]);
    });
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
  mounted() {},
};
</script>
<style lang='css' scoped>
.about {
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  padding-top: 70px;
}
.about .about-title {
  /* margin: 0 0 30px; */
  margin-bottom: 30px;
  color: var(--font-color-heading);
  font-family: var(--font-family-base);
  border-bottom: 1px solid var(--font-color-heading);
}
.about .about-title h2 {
  font-size: 2.3rem;
  font-family: var(--font-family-base);
  color: var(--font-color-heading);
  padding: 20px 0;
}
@media only screen and (min-width: 756px) and (max-width: 1192px) {
  .about .about-title {
    margin: var(--margin-md);
  }
}
@media screen and (min-width: 656px) and (max-width: 755px) {
  .about .about-title {
    margin: var(--margin-md);
  }
}
@media screen and (min-width: 1192px) {
  .about .about-title {
    margin: var(--margin-lg);
  }
}
@media screen and (max-width: 655px) {
  .about .about-title {
    margin: 1rem;
  }
  .about .about-title h2 {
    font-size: 2rem;
  }
}
</style>