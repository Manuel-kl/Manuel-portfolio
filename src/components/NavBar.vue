<template>
    <div class="navigation">
        <div class="nav-wrapper">
            <router-link to="/">
                <img src="../assets/manuel.jpg" alt="Langat's profile pic" />
                <span>Manuel</span>
            </router-link>
        </div>
        <nav>
            <router-link to="/about">About</router-link>
            <router-link to="/blog">Blog</router-link>
            <router-link to="/projects">Projects</router-link>
            <router-link to="/contact">Contact</router-link>
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
    created() { },
    methods: {},
    mounted() { },
};
</script>
<style scoped>

</style>
<style lang="css" scoped>
.navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--background-color);
    padding: 20px 100px 20px 100px;
    height: var(--navbar-height-large);
    font-family: var(--font-family-nav);
    font-size: 1.4rem;

}

.navigation .nav-wrapper a {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    text-decoration: none;
    padding: 5px;
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
    padding-bottom: 5px;
}

.navigation nav  a:nth-child(1):hover {
    color:var(--navbar-color-hover);
    border-bottom: 2px solid var(--navbar-hover-1);

}
.navigation nav  a:nth-child(2):hover {
    color:var(--navbar-color-hover);
    border-bottom: 2px solid var(--navbar-hover-2);

}
.navigation nav  a:nth-child(3):hover {
    color:var(--navbar-color-hover);
    border-bottom: 2px solid var(--navbar-hover-3);

}
.navigation nav  a:nth-child(4):hover {
    color:var(--navbar-color-hover);
    border-bottom: 2px solid var(--navbar-hover-4);

}
</style>
