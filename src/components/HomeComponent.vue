<template>
  <div id="home-page">
    <section class="description">
      <div class="intro">
        <h1>Hey, I am Manuel!</h1>
        <div>
          <br />
          <p>
            I am a web developer with a focus on creating efficient and
            user-friendly web applications.
          </p>
          <br />
          <br />
          <p>
            My portfolio showcases some of my best work and gives you a sense of
            my skills, experience, and approach to web development. Thank you
            for stopping by and I hope you have a chance to learn more about me
            and my work
          </p>
        </div>
        <br />
        <br />
        <small>
          <em>Last updated: December 24th, 2022</em>
        </small>
      </div>
      <div>
        <img src="../assets/web-development.png" alt="An image of a computer" />
      </div>
    </section>
    <section class="projects-blogs">
      <h2>Blogs</h2>
      <a href="#" onclick="event.preventDefault()">
        <button>View all</button></a
      >
    </section>
    <section>
      <Blogs />
    </section>
    <section class="projects-blogs">
      <h2>Projects</h2>
      <a href="#" onclick="event.preventDefault()">
        <button>View all</button></a
      >
    </section>
    <projects />
    <footer-component />
  </div>
</template>
<script>
import FooterComponent from "./FooterComponent.vue";
import Blogs from "./homepage-components/Blogs.vue";
import Projects from './homepage-components/Projects.vue';
export default {
  components: { FooterComponent, Blogs, Projects },
  props: {
   },
  data() {
    return {};
  },
  created() {},
  methods: {},
  mounted() {},
};
</script>
<style lang='css' scoped>
#home-page {
  background-color: var(--background-color);
  font-family: var(--font-family-homepage);
}

.description {
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-column-gap: 50px;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 100px;
  align-items: center;
}

.description .intro {
  max-width: 560px;
}

.description h1 {
  font-size: 3rem;
  color: var(--font-color-heading);
}

.description p {
  font-size: 1.2rem;
  color: var(--font-color-base);
}

.description em {
  font-style: italic;
  color: var(--font-color-muted);
}

.projects {
  display: flex;
  flex-direction: column;
  background-color: var(--card-background-color);
  padding: 1.2rem;
  border-radius: 5px;
}

.projects .star {
  font-family: var(--font-family-monospace);
  align-items: center;
  padding-bottom: 7px;
}

.projects .star time {
  color: var(--star);
}

.projects-blogs {
  display: flex;
  flex-direction: row;
  margin: 30px 100px 20px 100px;
  justify-content: space-between;
}
.projects-blogs h2 {
  color: var(--font-color-heading);
  font-family: var(--font-family-base);
  border-bottom: 1px solid var(--background-color);
  padding-bottom: 3px;
}
.projects-blogs h2:hover {
  border-bottom: 1px solid var(--font-color-muted);
  padding-bottom: 3px;
}
.projects-blogs button {
  color: var(--font-color-base);
  background-color: var(--button-background-color);
  line-height: 1;
  border: 1px solid var(--border-color);
  padding: 0.6rem 0.8rem;
  border-radius: 24px;
  font-size: 0.9rem;
  font-family: var(--font-family-base);
  cursor: pointer;
}
.projects-blogs button:hover {
  border: 1px solid var(--font-color-muted);
}
</style>