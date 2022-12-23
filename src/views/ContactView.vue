<template>
    <div>
      <navbar-component/>
      <contact-component/>
    </div>
  </template>
  <script>
  import ContactComponent from '@/components/ContactComponent.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';
  export default {
    components: {ContactComponent, NavbarComponent},
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