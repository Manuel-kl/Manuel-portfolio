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
<style lang='scss' scoped>

</style>