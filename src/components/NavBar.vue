<template>
    <div class="navigation">
        <div class="nav-wrapper">
            <router-link to="/">
                <img src="../assets/manuel.jpg" alt="Langat's profile pic">
                <span>Langat Emmanuel</span>
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
<style lang='css' scoped>
.navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--background-color);
    padding: 20px 100px 20px 100px;
    height: var(--navbar-height-large);
    font-family: var(--font-family-nav);
}

.navigation .nav-wrapper a {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
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
    padding: 0 15px;
}
</style>