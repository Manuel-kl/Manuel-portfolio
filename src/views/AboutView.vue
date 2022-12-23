<template>
  <div>
    <navbar-component/>
    <about-component/>
  </div>
</template>
<script>
import AboutComponent from '@/components/AboutComponent.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';
export default {
  components: {AboutComponent, NavbarComponent},
  props: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
  mounted() {},
};
</script>
<style scoped>
</style>
<style lang='scss' scoped>
</style>