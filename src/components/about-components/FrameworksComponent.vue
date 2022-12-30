<template>
  <div class="framework-container">
    <div class="framework-head">
      <h6>Frameworks and Tools</h6>
    </div>
    <div class="container">
      <div class="dev">
        <img src="../../assets/web.png" alt="" />
      </div>
      <div class="framework">
        <div class="item">
          <font-awesome-icon icon="fa-solid fa-link" class="link" />
          <img src="../../assets/laravel_png.png" alt="laravel logo" />
          <p>Laravel</p>
        </div>
        <div class="item">
          <font-awesome-icon icon="fa-solid fa-link" class="link" />
          <img src="../../assets/logo.png" alt="vue logo" />
          <p>VueJs</p>
        </div>
        <div class="item">
          <font-awesome-icon icon="fa-solid fa-link" class="link" />
          <img src="../../assets/github.png" alt="github logo" />
          <p>GitHub</p>
        </div>
        <div class="item">
          <font-awesome-icon icon="fa-solid fa-link" class="link" />
          <img src="../../assets/git.png" alt="git logo" />
          <p>Git</p>
        </div>
        <div class="item">
          <font-awesome-icon icon="fa-solid fa-link" class="link" />
          <img src="../../assets/bootstrap.png" alt="bootstrap logo" />
          <p>Bootstrap</p>
        </div>
        <div class="item">
          <font-awesome-icon icon="fa-solid fa-link" class="link" />
          <img src="../../assets/mysql.png" alt="mysql logo" />
          <p>MySQL</p>
        </div>
      </div>
    </div>
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
<style lang='css' scoped>
.framework-container {
  border-top: 2px solid var(--card-background-color);
}

.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 30px 0;
}

.dev {
  display: flex;
  justify-content: center;
}
.dev img {
  width: 70%;
  min-width: 200px;
}

.framework {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 50vw;
}

.framework-head {
  display: flex;
  justify-content: center;
  width: 100%;
}

.framework-head h6 {
  color: var(--font-color-muted);
  font-size: 2.3rem;
  font-family: var(--font-family-base);
  padding: 45px 0 0;
  line-height: 30px;
  max-width: fit-content;
  border-bottom: 1px dashed var(--font-color-muted);
}

.framework .item {
  display: flex;
  flex-basis: 45%;
  text-align: center;
  padding-bottom: 15px;
  align-items: center;
}

.framework .item p {
  color: var(--navbar-color);
  line-height: 1.5rem;
  font-family: var(--font-family-base);
  font-size: 1.3rem;
  margin: 0 15px;
  border-bottom: 1px dotted var(--background-color);
  padding: 15px 0;
}

.framework img {
  width: 50px;
  max-height: 100px;
}

.framework .link {
  color: var(--background-color);
  padding-right: 10px;
}

.framework .item:hover .link {
  color: var(--font-color-base);
  padding-right: 10px;
}

.framework .item:hover p {
  border-bottom: 1px dotted var(--star);
  padding: 15px 0;
}
@media only screen and (min-width: 756px) and (max-width: 1192px) {
  .framework-container {
    margin: var(--margin-md);
  }
  .dev {
    width: 70%;
  }
}
@media screen and (min-width: 656px) and (max-width: 755px) {
  .framework-container {
    margin: var(--margin-md);
  }
  .container {
    display: flex;
    flex-direction: column-reverse;
  }
  .container .dev {
    width: 100%;
    max-width: 250px;
    min-width: 200px;
    margin: auto;
  }
  .framework {
    width: 100%;
    justify-content: center;
  }
}
@media screen and (min-width: 1192px) {
  .framework-container {
    margin: var(--margin-lg);
  }
}
@media screen and (max-width: 655px) {
  .framework-container {
    margin: 1rem;
  }
  .framework-container .framework-head h6 {
    font-size: 1.7rem;
    text-align: center;
  }
  .container {
    display: flex;
    flex-direction: column-reverse;
  }
  .container .framework {
    width: 100%;
  }
  .container .framework .item {
    flex-basis: 0;
  }
  .dev {
    width: 100%;
    max-width: 250px;
    min-width: 200px;
    margin: auto;
  }
}
</style>