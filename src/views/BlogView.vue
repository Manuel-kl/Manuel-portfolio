<template>
    <div>
        <navbar-component/>
        <blog-component/>
    </div>
</template>
<script>
import BlogComponent from '@/components/BlogComponent.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';
export default {
    components: {NavbarComponent, BlogComponent},
    props: {},
    data() {
        return {};
    },
    created() {},
    methods: {},
    mounted() {},
};
</script>
<style scoped>
</style>
<style lang='scss' scoped>
</style>