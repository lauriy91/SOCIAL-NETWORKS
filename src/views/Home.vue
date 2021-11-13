<template>
  <div>
    <v-toolbar
      dense
      floating
      width=10%
    >
      <v-text-field
        hide-details
        prepend-icon="mdi-magnify"
        single-line
      ></v-text-field>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

    <nav-bar/>

  </div>

</template>

<script>
import NavBar from '../components/NavBar.vue'

  export default {
    components: {
        NavBar
    }
  }
</script>
