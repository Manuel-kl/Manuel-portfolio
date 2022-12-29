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
  .about .about-title {
    margin: var(--margin-md);
  }
}
@media screen and (min-width: 1192px) {
  .about .about-title {
    margin: var(--margin-lg);
  }
}
.about {
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
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
</style>