<template >
  <div id="app">
    <transition name="slide-fade">
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  methods: {},
  watch: {},
  data() {
    return {
      loading: false,
    };
  },
  props: {},
  created() {},
  setup() {},
};
</script>

<style>
:root {
  --background-color: #181818;
  --font-family-nav: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial,
    sans-serif;
  --navbar: #eee;
  --navbar-color: #bbb;
  --navbar-color-hover: white;
  --navbar-height-large: 80px;
  --navbar-height-small: 60px;
  --navbar-hover-1: #5eddac;
  --navbar-hover-2: #5a43f1;
  --navbar-hover-3: #f6cd5d;
  --navbar-hover-4: #59abf7;
  --font-color-heading: white;
  --font-color-base: #e6e6e6;
  --font-color-muted: #999;
  --border-color: #2c2c2c;
  --font-family-base: "Inter", -apple-system, BlinkMacSystemFont,
    "Helvetica Neue", Arial, sans-serif;
  --font-family-monospace: Menlo, "IBM Plex Mono", Menlo, monospace;
  --font-family-homepage: InterVariable, ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Noto Color Emoji;
  --star: #f6cd5d;
  --card-background-color: #1f1f1f;
  --button-background-color: #252525;
  --margin-md: 0 50px;
  --margin-lg: 0 100px;
}
* {
  padding: 0;
  margin: 0;
}

#app {
  height: 100vh;
  background-color: var(--background-color);
}
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 1;
}
</style>
