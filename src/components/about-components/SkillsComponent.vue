<template>
  <div class="container">
    <div class="skills-heading">
      <h4>My Skills</h4>
    </div>
    <div class="languages-container">
      <div class="languages-head"><h6>Languages</h6></div>
      <div class="languages-tools">
        <div class="languages">
          <div class="item">
            <font-awesome-icon icon="fa-solid fa-link" class="link" />
            <img src="../../assets/php_png.png" alt="php logo" />
            <p>PHP</p>
          </div>
          <div class="item">
            <font-awesome-icon icon="fa-solid fa-link" class="link" />
            <img src="../../assets/python_png.png" alt="python logo" />
            <p>Python</p>
          </div>
          <div class="item">
            <font-awesome-icon icon="fa-solid fa-link" class="link" />
            <img src="../../assets/sql_png.png" alt="sql logo" />
            <p>SQL</p>
          </div>

          <div class="item">
            <font-awesome-icon icon="fa-solid fa-link" class="link" />
            <img src="../../assets/html_png.png" alt="HTML logo" />
            <p>HTML5</p>
          </div>
          <div class="item">
            <font-awesome-icon icon="fa-solid fa-link" class="link" />
            <img src="../../assets/css_png.png" alt="css logo" />
            <p>CSS</p>
          </div>
          <div class="item">
            <font-awesome-icon icon="fa-solid fa-link" class="link" />
            <img src="../../assets/JavaScript_png.png" alt="JavaScript logo" />
            <p>JavaScript</p>
          </div>
        </div>
        <div class="dev">
          <img src="../../assets/web-dev.webp" alt="" />
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
.container {
  border-top: 2px solid var(--card-background-color);
}
.languages-tools {
  display: grid;
  padding: 30px 0;
  grid-template-columns: repeat(2, 1fr);
}

.skills-heading h4 {
  font-size: 2.3rem;
  font-family: var(--font-family-base);
  color: var(--font-color-heading);
  padding: 30px 0 5px 0;
  max-width: fit-content;
  border-bottom: 2px dotted var(--star);
}
.languages {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 50vw;
}
.languages-head {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 30px;
}
.languages-head h6 {
  color: var(--font-color-muted);
  font-size: 2.3rem;
  font-family: var(--font-family-base);
  padding: 45px 0 0;
  line-height: 30px;
  max-width: fit-content;
  border-bottom: 1px dashed var(--font-color-muted);
}

.languages .item {
  display: flex;
  flex-basis: 45%;
  text-align: center;
  padding-bottom: 15px;
  align-items: center;
}
.languages .item p {
  color: var(--navbar-color);
  line-height: 1.5rem;
  font-family: var(--font-family-base);
  font-size: 1.3rem;
  margin: 0 15px;
  border-bottom: 1px dotted var(--background-color);
  padding: 15px 0;
}
.languages img {
  width: 50px;
  max-height: 60px;
}
.languages .link {
  color: var(--background-color);
  padding-right: 10px;
}
.languages .item:hover .link {
  color: var(--font-color-base);
  padding-right: 10px;
}
.languages .item:hover p {
  border-bottom: 1px dotted var(--star);
  padding: 15px 0;
}
.dev {
  display: flex;
  justify-content: center;
}
.dev img {
  width: 70%;
}
@media only screen and (min-width: 756px) and (max-width: 1192px) {
  .container {
    margin: var(--margin-md);
  }
  .dev img {
    width: 60%;
    min-width: 250px;
  }
}
@media screen and (min-width: 656px) and (max-width: 755px) {
  .container {
    margin: var(--margin-md);
  }
  .languages-tools {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .languages {
    display: flex;
    width: 77%;
    margin: auto;
  }

  .languages .item {
    align-items: center;
  }
  .languages .item p {
    font-size: 1.2rem;
  }
  .dev img {
    max-width: 350px;
    width: 60%;
  }
}
@media screen and (min-width: 1192px) {
  .container {
    margin: var(--margin-lg);
  }
}
@media screen and (max-width: 655px) {
  .container {
    margin: 1rem;
  }
  .skills-heading h4 {
    font-size: 2rem;
  }
  .languages-head h6 {
    font-size: 1.7rem;
  }

  .languages-tools {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
  }
  .languages {
    gap: 10px;
    width: 100%;
  }
  .languages .item p {
    font-size: 1rem;
  }
  .languages .item {
    /* display: flex;
    gap: 25px; */
    flex-basis: 0;
  }
  .dev {
    width: 100%;
    margin-top: 1rem;
    max-width: 450px;
    min-width: 300px;
  }
}
</style>