<template>
  <div>
    <navbar-component />
    <home-component />
  </div>
</template>
<script>
import HomeComponent from "@/components/HomeComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
export default {
  components: { HomeComponent, NavbarComponent },
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
.navigation nav a:active {
  color: var(--navbar-color-hover);
  border-bottom: 2px solid var(--navbar-hover-4);
}
</style>