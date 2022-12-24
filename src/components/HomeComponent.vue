<template>
    <div id="home-page">
        <section class="description">
            <div class="intro">
                <h1>Hey, I am Manuel!</h1>
                <div>
                    <br>
                    <p>I am a web developer with a focus on creating efficient and user-friendly web applications.</p>
                    <br>
                    <br>
                    <p>My portfolio showcases some of my best work and gives you a sense of my skills,
                        experience, and approach to web development. Thank you for stopping by
                        and I hope you have a chance to learn more about me and my work</p>
                </div>
                <br>
                <br>
                <small>
                    <em>Last updated: December 24th, 2022</em>
                </small>
            </div>
            <div>
                <img src="../assets/web-development.png" alt="An image of a computer">
            </div>

        </section>
        <section class="blogs">
            <div class="blog">
                <div>
                    <img src="../assets/logo.png" alt="Vue Js logo">
                </div>
                <div>
                    <p>December 24, 2022</p>
                    <a href="#" onclick="event.preventDefault()"> <h2> Understanding Vue</h2></a>
                </div>
            </div>
            <div class="blog">
                <div>
                    <img src="../assets/logo.png" alt="Vue Js logo">
                </div>
                <div>
                    <p>December 24, 2022</p>
                    <a href="#" onclick="event.preventDefault()"> <h2> Understanding Vue</h2></a>
                </div>
            </div>
            <div class="blog">
                <div>
                    <img src="../assets/logo.png" alt="Vue Js logo">
                </div>
                <div>
                    <p>December 24, 2022</p>
                    <a href="#" onclick="event.preventDefault()"> <h2> Understanding Vue</h2></a>
                </div>
            </div>
            <div class="blog">
                <div>
                    <img src="../assets/logo.png" alt="Vue Js logo">
                </div>
                <div>
                    <p>December 24, 2022</p>
                    <a href="#" onclick="event.preventDefault()"> <h2> Understanding Vue</h2></a>
                </div>
            </div>
            <div class="blog">
                <div>
                    <img src="../assets/logo.png" alt="Vue Js logo">
                </div>
                <div>
                    <p>December 24, 2022</p>
                    <a href="#" onclick="event.preventDefault()"> <h2> Understanding Vue</h2></a>
                </div>
            </div>
            <div class="blog">
                <div>
                    <img src="../assets/logo.png" alt="Vue Js logo">
                </div>
                <div>
                    <p>December 24, 2022</p>
                    <a href="#" onclick="event.preventDefault()"> <h2> Understanding Vue</h2></a>
                </div>
            </div>
            <div class="blog">
                <div>
                    <img src="../assets/logo.png" alt="Vue Js logo">
                </div>
                <div>
                    <p>December 24, 2022</p>
                    <a href="#" onclick="event.preventDefault()"> <h2> Understanding Vue</h2></a>
                </div>
            </div>
            <div class="blog">
                <div>
                    <img src="../assets/logo.png" alt="Vue Js logo">
                </div>
                <div>
                    <p>December 24, 2022</p>
                    <a href="#" onclick="event.preventDefault()"> <h2> Understanding Vue</h2></a>
                </div>
            </div>
            <div class="blog">
                <div>
                    <img src="../assets/logo.png" alt="Vue Js logo">
                </div>
                <div>
                    <p>December 24, 2022</p>
                    <a href="#" onclick="event.preventDefault()"> <h2> Understanding Vue</h2></a>
                </div>
            </div>
        </section>
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
<style lang='css' scoped>
#home-page{
    background-color: var(--background-color);

}
.description{
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-column-gap: 50px;
    flex-direction: row;
    justify-content: space-between;
    margin:0 100px ;
}
.description .intro{
    max-width: 560px;


}
.description h1{
    font-size: 3rem;
    color: var(--font-color-heading);
}
.description p{
    font-size: 1.2rem;
    color:var(--font-color-base);
}
.description em{
    font-style:italic ;
    color: var(--font-color-muted);
}
.blogs{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 100px;
    gap: 1rem;
    padding-top: 50px;
}
.blog img{
    width: 35px;
    padding: 0 10px;
}
.blog{
    display: flex;
    flex-direction: row;
    align-items: center;
    border:1px solid var(--font-color-muted) ;
    padding: 1rem;
    gap: 1rem;
    border-radius: 5px;
    max-width: 320px;

}
.blog p{
    color: var(--border-color);
    font-size: 0.8rem;
    letter-spacing: -.01rem;
    font-family: var(--font-family-monospace);
}
.blog h2{
    font-size: 1.2rem;
    font-family: var(--font-family-base);
    line-height: 1.3rem;
    padding: 2px 0;
    margin: 0.3rem 0 0.5rem;
    border-bottom: 1px solid var(--background-color);

}
.blog a{
    text-decoration: none;
    color: var(--font-color-heading);
}
.blog h2:hover{
    border-bottom: 1px solid var(--font-color-heading);
    padding-bottom: 2px;
}
</style>