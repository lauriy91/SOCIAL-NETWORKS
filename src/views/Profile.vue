<template>
<div>
    <table>
        <tr>
        <td class="navbar">
            <nav-bar/>
        </td>
        <td class="gallery">
            <gallery-2/>
        </td>
        </tr>
    </table>
</div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Gallery2 from '../components/Gallery2.vue'

  export default {
    components: {
        NavBar,
        Gallery2
    },

  }
</script>

<style>
.gallery{
    width: max-content;
}
</style>