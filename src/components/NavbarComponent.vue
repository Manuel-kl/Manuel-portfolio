<template>
  <div class="navigation">
    <div class="nav-wrapper">
      <router-link to="/">
        <img src="../assets/manuel.jpg" alt="Langat's profile pic" />
        <span>Manuel</span>
      </router-link>
    </div>
    <nav>
      <router-link to="/about" active-class="active">About</router-link>
      <router-link to="/blog" active-class="active">Blog</router-link>
      <router-link to="/projects" active-class="active">Projects</router-link>
      <router-link to="/contact" active-class="active">Contact</router-link>
    </nav>
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
<style scoped>
</style>
<style lang="css" scoped>
.navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: -webkit-fill-available;
  align-items: center;
  background-color: var(--background-color);
  /* margin: 10px 0; */
  height: var(--navbar-height-large);
  font-family: var(--font-family-nav);
  font-size: 1.2rem;
  position: fixed;
  border-bottom: 1px solid var(--border-color);
}

.navigation .nav-wrapper a {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 0 5px;
}

.navigation .nav-wrapper span {
  padding-left: 15px;
}

.navigation .nav-wrapper img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
}

.navigation nav a {
  color: var(--navbar-color);
  text-decoration: none;
  margin: 0 15px;
}
.navigation nav .active {
  color: var(--font-color-base);
  border-bottom: 2px groove var(--star);
  background-color: var(--card-background-color);
  padding: 5px 15px;
  border-radius: 7px;
}
.navigation nav a:nth-child(1):hover {
  color: var(--navbar-color-hover);
  border-bottom: 2px solid var(--navbar-hover-1);
}
.navigation nav a:nth-child(2):hover {
  color: var(--navbar-color-hover);
  border-bottom: 2px solid var(--navbar-hover-2);
}
.navigation nav a:nth-child(3):hover {
  color: var(--navbar-color-hover);
  border-bottom: 2px solid var(--navbar-hover-3);
}
.navigation nav a:nth-child(4):hover {
  color: var(--navbar-color-hover);
  border-bottom: 2px solid var(--navbar-hover-4);
}
@media only screen and (min-width: 756px) and (max-width: 1192px) {
  .navigation {
    margin: var(--margin-md);
  }
}
@media screen and (min-width: 656px) and (max-width: 755px) {
  .navigation {
    margin: var(--margin-md);
  }
}
@media screen and (min-width: 1192px) {
  .navigation {
    margin: var(--margin-lg);
  }
}
@media screen and (max-width: 655px) {
  .navigation {
    padding: 0 5px;
  }
  .navigation nav a {
    font-size: 4vw;
    margin: 0 5px;
  }
  .navigation .nav-wrapper span {
    font-size: 1.2rem;
  }
}
</style>
