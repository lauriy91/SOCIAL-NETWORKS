<template>

<div>

<nav>
    <banner/>
</nav>

<section>
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
</style>