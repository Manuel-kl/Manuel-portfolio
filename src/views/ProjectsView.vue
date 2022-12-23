<template>
    <div>
        <navbar-component/>
        <projects-component/>
    </div>
</template>
<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import ProjectsComponent from '@/components/ProjectsComponent.vue';
export default {
    components: {NavbarComponent,ProjectsComponent},
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