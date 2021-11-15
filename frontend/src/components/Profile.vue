<template>

<div>

<nav>
    <banner :feed="true"/>
</nav>

<section class="gallery">
    <gallery/>
</section>

</div>

</template>

<script>
import Gallery from '../components/Gallery.vue'
import Banner from '../components/Banner.vue'

    export default {
        components:{
            Banner,
            Gallery
    }
}
</script>

<style lang="scss">
.marca{
    text-align: center;
    font-size: 4rem;
}
.gallery{
    margin-top: 2em;
}
</style>