<template>
<div>
    <table>
        <tr>
        <td class="navbar">
            <nav-bar/>
        </td>
        <td>
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

</style>