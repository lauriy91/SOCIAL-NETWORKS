<template>
<div>

    <table class="table">
        <tr>
            <td class="marca" colspan="2"><marca/></td>
        </tr>

        <tr>
        <td class="navbar">
            <nav-bar/>
        </td>
        <td class="gallery">
            <gallery/>
        </td>
        </tr>
    </table>
</div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Gallery from '../components/Gallery.vue'
import Marca from '../components/Marca.vue'

  export default {
    components: {
        NavBar,
        Gallery,
        Marca
    }

  }
</script>

<style>

.gallery{
    padding-left: 5%;
}
.table{
    
    padding: 10%;
}
.marca{
    text-align: center;
}
</style>