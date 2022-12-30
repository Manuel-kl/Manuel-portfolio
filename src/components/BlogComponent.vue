<template>
  <div class="bl">
    <div class="bl-heading">
      <h2>Blogs</h2>
    </div>
    <div class="blog-lists">
      <div class="blog-list">
        <div>
          <img src="../assets/logo.png" alt="Vue Js logo" />
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
          <img src="../assets/logo.png" alt="Vue Js logo" />
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
          <img src="../assets/logo.png" alt="Vue Js logo" />
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
          <img src="../assets/logo.png" alt="Vue Js logo" />
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
          <img src="../assets/logo.png" alt="Vue Js logo" />
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
          <img src="../assets/logo.png" alt="Vue Js logo" />
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
          <img src="../assets/logo.png" alt="Vue Js logo" />
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
          <img src="../assets/logo.png" alt="Vue Js logo" />
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
          <img src="../assets/logo.png" alt="Vue Js logo" />
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
          <img src="../assets/logo.png" alt="Vue Js logo" />
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
          <img src="../assets/logo.png" alt="Vue Js logo" />
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
          <img src="../assets/logo.png" alt="Vue Js logo" />
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
          <img src="../assets/logo.png" alt="Vue Js logo" />
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
          <img src="../assets/logo.png" alt="Vue Js logo" />
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
          <img src="../assets/logo.png" alt="Vue Js logo" />
        </div>
        <div>
          <p>December 24, 2022</p>
          <a href="#" onclick="event.preventDefault()">
            <h2>Understanding Vue</h2>
          </a>
        </div>
      </div>
    </div>
    <div>
      <footer-component />
    </div>
  </div>
</template>
<script>
import FooterComponent from "./FooterComponent.vue";
export default {
  components: { FooterComponent },
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
.bl {
  background-color: var(--background-color);
  padding-top: 70px;
}

.bl-heading {
  margin-bottom: 30px;
}
.bl-heading h2 {
  font-size: 2.3rem;
  font-family: var(--font-family-base);
  color: var(--font-color-heading);
  border-bottom: 1px solid var(--font-color-heading);
  padding: 20px 0;
  -bottom: 32px;
}

.blog-lists {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1rem;
  padding-bottom: 60px;
}

.blog-list:hover {
  border: 1px solid var(--button-background-color);
  box-shadow: 1px 1px 4px 1px var(--star);
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
  .bl-heading h2,
  .blog-lists {
    margin: var(--margin-md);
  }
}
@media screen and (min-width: 656px) and (max-width: 755px) {
  .bl-heading h2,
  .blog-lists {
    margin: var(--margin-md);
  }
}
@media screen and (min-width: 1192px) {
  .bl-heading h2,
  .blog-lists {
    margin: var(--margin-lg);
  }
}
@media screen and (max-width: 655px) {
  .bl-heading h2,
  .blog-lists {
    margin: 1rem;
  }
}
</style>