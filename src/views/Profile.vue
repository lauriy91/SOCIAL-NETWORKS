<template>
<div>
    <table>
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

  export default {
    components: {
        NavBar,
        Gallery
    },

  }
</script>

<style>
.gallery{
    width: max-content;
}
</style>