<template>
  <div class="languages-tools">
    <div class="skills-heading">
      <h4>My Skills</h4>
    </div>
    <div class="languages">
      <div>
        <p>
          <font-awesome-icon icon="fa-solid fa-link" /><img
            src="../../assets/php_png.png"
            alt="php logo"
          />
          PHP
        </p>
      </div>
      <div>
        <p>
          <font-awesome-icon icon="fa-solid fa-link" /><img
            src="../../assets/JavaScript_png.png"
            alt="JavaScript logo"
          />
          JavaScript
        </p>
      </div>
      <div>
        <p>
          <font-awesome-icon icon="fa-solid fa-link" /><font-awesome-icon
            icon="fa-brands fa-html5"
          />HTML5
        </p>
      </div>
      <div>
        <p>
          <font-awesome-icon icon="fa-solid fa-link" /><img
            src="../../assets/css_png.png"
            alt="css logo"
          />
          CSS
        </p>
      </div>
      <div>
        <p>
          <font-awesome-icon icon="fa-solid fa-link" />
          <img src="../../assets/python_png.png" alt="python logo" /> Python
        </p>
      </div>
      <div>
        <p>
          <font-awesome-icon icon="fa-solid fa-link" /><img
            src="../../assets/sql_png.png"
            alt="sql logo"
          />
          SQL
        </p>
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
.languages-tools {
  display: flex;
  flex-direction: column;
  margin: 0 100px;
}

.skills-heading h4 {
  font-size: 2.3rem;
  font-family: var(--font-family-base);
  color: var(--font-color-heading);
  padding: 30px 0 20px 0;
}
.languages {
  display: flex;
  flex-direction: column;
}
.languages img {
  width: 100px;
}
</style>