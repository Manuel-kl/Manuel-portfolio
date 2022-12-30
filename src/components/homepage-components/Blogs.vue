<template>
  <div class="blog-lists">
    <div class="blog-list">
      <div>
        <img src="../../assets/logo.png" alt="Vue Js logo" />
      </div>
      <div>
        <p>December 24, 2022</p>
        <a href="#" onclick="event.preventDefault()">
          <h2>Understanding Vue</h2>
        </a>
      </div>
    </div>
    <div class="blog-list">
      <div>
        <img src="../../assets/logo.png" alt="Vue Js logo" />
      </div>
      <div>
        <p>December 24, 2022</p>
        <a href="#" onclick="event.preventDefault()">
          <h2>Understanding Vue</h2>
        </a>
      </div>
    </div>
    <div class="blog-list">
      <div>
        <img src="../../assets/logo.png" alt="Vue Js logo" />
      </div>
      <div>
        <p>December 24, 2022</p>
        <a href="#" onclick="event.preventDefault()">
          <h2>Understanding Vue</h2>
        </a>
      </div>
    </div>
    <div class="blog-list">
      <div>
        <img src="../../assets/logo.png" alt="Vue Js logo" />
      </div>
      <div>
        <p>December 24, 2022</p>
        <a href="#" onclick="event.preventDefault()">
          <h2>Understanding Vue</h2>
        </a>
      </div>
    </div>
    <div class="blog-list">
      <div>
        <img src="../../assets/logo.png" alt="Vue Js logo" />
      </div>
      <div>
        <p>December 24, 2022</p>
        <a href="#" onclick="event.preventDefault()">
          <h2>Understanding Vue</h2>
        </a>
      </div>
    </div>
    <div class="blog-list">
      <div>
        <img src="../../assets/logo.png" alt="Vue Js logo" />
      </div>
      <div>
        <p>December 24, 2022</p>
        <a href="#" onclick="event.preventDefault()">
          <h2>Understanding Vue</h2>
        </a>
      </div>
    </div>
    <div class="blog-list">
      <div>
        <img src="../../assets/logo.png" alt="Vue Js logo" />
      </div>
      <div>
        <p>December 24, 2022</p>
        <a href="#" onclick="event.preventDefault()">
          <h2>Understanding Vue</h2>
        </a>
      </div>
    </div>
    <div class="blog-list">
      <div>
        <img src="../../assets/logo.png" alt="Vue Js logo" />
      </div>
      <div>
        <p>December 24, 2022</p>
        <a href="#" onclick="event.preventDefault()">
          <h2>Understanding Vue</h2>
        </a>
      </div>
    </div>
    <div class="blog-list">
      <div>
        <img src="../../assets/logo.png" alt="Vue Js logo" />
      </div>
      <div>
        <p>December 24, 2022</p>
        <a href="#" onclick="event.preventDefault()">
          <h2>Understanding Vue</h2>
        </a>
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
.blog-lists {
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.3rem;
  padding-bottom: 60px;
}

.blog-list img {
  width: 35px;
  padding: 0 10px;
}

.blog-list {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border: 1px solid var(--font-color-muted);
  padding: 1rem 2rem;
  gap: 1rem;
  border-radius: 5px;
}
.blog-list:hover {
  border: 1px solid var(--button-background-color);
  box-shadow: 1px 1px 4px 1px var(--star);
}
.blog-list p {
  color: var(--font-color-muted);
  font-size: 0.8rem;
  letter-spacing: -0.01rem;
  font-family: var(--font-family-monospace);
}

.blog-list h2 {
  font-size: 1.2rem;
  font-family: var(--font-family-base);
  line-height: 1.3rem;
  padding: 2px 0;
  margin: 0.3rem 0 0.5rem;
  border-bottom: 1px solid var(--background-color);
}

.blog-list a {
  text-decoration: none;
  color: var(--font-color-heading);
}

.blog-list h2:hover {
  border-bottom: 1px solid var(--font-color-heading);
  padding-bottom: 2px;
}
@media only screen and (min-width: 756px) and (max-width: 1192px) {
  .blog-lists {
    margin: var(--margin-md);
    /* min-width: 250px; */
  }
}
@media screen and (min-width: 656px) and (max-width: 755px) {
  .blog-lists {
    margin: var(--margin-md);
    /* min-width: 250px; */
  }
}
@media screen and (min-width: 1192px) {
  .blog-lists {
    margin: var(--margin-lg);
  }
}
@media screen and (max-width: 655px) {
  .blog-lists {
    margin: 0 1rem;
  }
}
</style>