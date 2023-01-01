<template>
  <div class="not-found">
    <div class="navbar">
      <navbar-component />
    </div>
    <div class="not-found-content">
      <div class="robot">
        <img src="../assets/not-found.webp" alt="" />
      </div>
      <div class="description">
        <h3>Page Not Found!</h3>
        <router-link to="/" class="home-link"><h4>Go Home</h4></router-link>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
export default {
  components: { NavbarComponent },
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
.not-found-content {
  background-color: var(--background-color);
  display: flex;
  flex-direction: row;
  padding-top: 100px;
  justify-content: center;
  align-items: center;
}

.not-found-content .robot {
  display: flex;
  justify-content: center;
}
.not-found-content .robot img {
  width: 77%;
}
.not-found-content .description {
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
}
.not-found-content .description .home-link {
  text-decoration: none;
  border: 1px solid var(--background-color);
  color: var(--star);
  background-color: var(--button-background-color);
  padding: 12px 25px;
  font-size: 2.5rem;
  font-family: var(--font-family-base);
  border-radius: 25px;
  line-height: 1;
  border-bottom: 1px groove var(--star);
  letter-spacing: 0.7px;
  word-spacing: 2.5px;
}
.not-found-content .description .home-link h4 {
}
.not-found-content .description .home-link:hover {
  border: 1px solid var(--font-color-muted);
  border-bottom: 1px groove var(--star);
}
.not-found-content .description h3 {
  color: var(--font-color-heading);
  border-bottom: 1px solid var(--border-color);
  font-size: 2.5rem;
  font-weight: 100;
  font-family: var(--font-family-monospace);
}
@media (min-width: 756px) and (max-width: 1192px) {
  .not-found-content .description .home-link,
  .not-found-content .description h3 {
    font-size: 200%;
  }
  .not-found-content .robot {
    max-width: 350px;
    align-items: center;
  }
  .not-found-content {
    height: 70vh;
  }
}
@media screen and (min-width: 656px) and (max-width: 755px) {
  .not-found-content .description .home-link,
  .not-found-content .description h3 {
    font-size: 150%;
  }
  .not-found-content .robot {
    max-width: 350px;
    align-items: center;
  }
  .not-found-content {
    height: 70vh;
  }
}
@media (max-width: 655px) {
  .not-found-content .description .home-link,
  .not-found-content .description h3 {
    font-size: 150%;
  }
  .not-found-content .robot {
    max-width: 350px;
    align-items: center;
  }
  .not-found-content {
    height: 70vh;
    flex-direction: column;
    gap: 5rem;
  }
  .not-found-content .description {
  }
}
</style>