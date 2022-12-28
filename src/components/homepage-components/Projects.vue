<template>
  <div class="projects-lists">
    <div class="projects">
      <div class="star">
        <time>2022</time>
      </div>
      <div class="pro-title">
        <a href="#" onclick="event.preventDefault()">
          <h3>Todo and Note Taking Web App</h3>
        </a>
        <p>A Web App to streamline your todo list and note taking.</p>
      </div>
      <div class="links">
        <a href="#" onclick="event.preventDefault()"
          ><button>Article</button></a
        >
        <a href="#" onclick="event.preventDefault()"
          ><button>
            Demo
            <font-awesome-icon
              icon="fa-solid fa-arrow-up-right-from-square"
              class="fa-link"
            /></button
        ></a>
        <a href="#" onclick="event.preventDefault()"
          ><button>
            Source
            <font-awesome-icon
              icon="fa-solid fa-arrow-up-right-from-square"
              class="fa-link"
            /></button
        ></a>
      </div>
    </div>
    <div class="projects">
      <div class="star">
        <time>2022</time>
      </div>
      <div class="pro-title">
        <a href="#" onclick="event.preventDefault()">
          <h3>Todo and Note Taking Web App</h3>
        </a>
        <p>A Web App to streamline your todo list and note taking.</p>
      </div>
      <div class="links">
        <a href="#" onclick="event.preventDefault()"
          ><button>Article</button></a
        >
        <a href="#" onclick="event.preventDefault()"
          ><button>
            Demo
            <font-awesome-icon
              icon="fa-solid fa-arrow-up-right-from-square"
              class="fa-link"
            /></button
        ></a>
        <a href="#" onclick="event.preventDefault()"
          ><button>
            Source
            <font-awesome-icon
              icon="fa-solid fa-arrow-up-right-from-square"
              class="fa-link"
            /></button
        ></a>
      </div>
    </div>
    <div class="projects">
      <div class="star">
        <time>2022</time>
      </div>
      <div class="pro-title">
        <a href="#" onclick="event.preventDefault()">
          <h3>Todo and Note Taking Web App</h3>
        </a>
        <p>A Web App to streamline your todo list and note taking.</p>
      </div>
      <div class="links">
        <a href="#" onclick="event.preventDefault()"
          ><button>Article</button></a
        >
        <a href="#" onclick="event.preventDefault()"
          ><button>
            Demo
            <font-awesome-icon
              icon="fa-solid fa-arrow-up-right-from-square"
              class="fa-link"
            /></button
        ></a>
        <a href="#" onclick="event.preventDefault()"
          ><button>
            Source
            <font-awesome-icon
              icon="fa-solid fa-arrow-up-right-from-square"
              class="fa-link"
            /></button
        ></a>
      </div>
    </div>
    <div class="projects">
      <div class="star">
        <time>2022</time>
      </div>
      <div class="pro-title">
        <a href="#" onclick="event.preventDefault()">
          <h3>Todo and Note Taking Web App</h3>
        </a>
        <p>A Web App to streamline your todo list and note taking.</p>
      </div>
      <div class="links">
        <a href="#" onclick="event.preventDefault()"
          ><button>Article</button></a
        >
        <a href="#" onclick="event.preventDefault()"
          ><button>
            Demo
            <font-awesome-icon
              icon="fa-solid fa-arrow-up-right-from-square"
              class="fa-link"
            /></button
        ></a>
        <a href="#" onclick="event.preventDefault()"
          ><button>
            Source
            <font-awesome-icon
              icon="fa-solid fa-arrow-up-right-from-square"
              class="fa-link"
            /></button
        ></a>
      </div>
    </div>
    <div class="projects">
      <div class="star">
        <time>2022</time>
      </div>
      <div class="pro-title">
        <a href="#" onclick="event.preventDefault()">
          <h3>Todo and Note Taking Web App</h3>
        </a>
        <p>A Web App to streamline your todo list and note taking.</p>
      </div>
      <div class="links">
        <a href="#" onclick="event.preventDefault()"
          ><button>Article</button></a
        >
        <a href="#" onclick="event.preventDefault()"
          ><button>
            Demo
            <font-awesome-icon
              icon="fa-solid fa-arrow-up-right-from-square"
              class="fa-link"
            /></button
        ></a>
        <a href="#" onclick="event.preventDefault()"
          ><button>
            Source
            <font-awesome-icon
              icon="fa-solid fa-arrow-up-right-from-square"
              class="fa-link"
            /></button
        ></a>
      </div>
    </div>
    <div class="projects">
      <div class="star">
        <time>2022</time>
      </div>
      <div class="pro-title">
        <a href="#" onclick="event.preventDefault()">
          <h3>Todo and Note Taking Web App</h3>
        </a>
        <p>A Web App to streamline your todo list and note taking.</p>
      </div>
      <div class="links">
        <a href="#" onclick="event.preventDefault()"
          ><button>Article</button></a
        >
        <a href="#" onclick="event.preventDefault()"
          ><button>
            Demo
            <font-awesome-icon
              icon="fa-solid fa-arrow-up-right-from-square"
              class="fa-link"
            /></button
        ></a>
        <a href="#" onclick="event.preventDefault()"
          ><button>
            Source
            <font-awesome-icon
              icon="fa-solid fa-arrow-up-right-from-square"
              class="fa-link"
            /></button
        ></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  s: {},
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
@media screen and (min-width: 878px) and (max-width: 1192px) {
  .projects-lists {
    margin: var(--margin-md);
  }
}
@media screen and (min-width: 1192px) {
  .projects-lists {
    margin: var(--margin-lg);
  }
}
.projects-lists {
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1rem;
  padding-bottom: 60px;
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

.projects h3 {
  color: var(--font-color-heading);
  font-size: 1.1rem;
}

.projects .pro-title h3:hover {
  text-decoration: underline;
  /* border-bottom: 1px solid var(--font-color-heading); */
}

.projects .pro-title a {
  text-decoration: none;
  font-size: 1.1rem;
  font-family: var(--font-family-base);
}

.projects .pro-title p {
  padding: 10px 0;
  color: var(--font-color-muted);
  font-family: var(--font-family-base);
  line-height: 1.5;
  font-size: 0.9rem;
}

.projects .links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
}

.projects .links a {
  text-decoration: none;
}

.projects .links a .fa-link {
  padding-left: 5px;
}

.projects .links a button {
  color: var(--font-color-base);
  background-color: var(--button-background-color);
  line-height: 1;
  border: 1px solid var(--border-color);
  padding: 0.5rem 0.6rem;
  border-radius: 24px;
  font-size: 0.8rem;
  font-family: var(--font-family-base);
  cursor: pointer;
}

.projects .links a button:hover {
  border: 1px solid var(--font-color-muted);
}
</style>