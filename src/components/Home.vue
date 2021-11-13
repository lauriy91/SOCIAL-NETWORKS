<template>
  
<v-app>
  <v-navigation-drawer app>
    <!-- navbar -->
    <nav-bar/>
  </v-navigation-drawer>

  <v-app-bar app>
    <!-- header -->
    <Header/>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>

</template>

<script>
import NavBar from '../components/NavBar.vue'
import Header from './Cabecero.vue'

  export default {
    components: {
        NavBar,
        Header
    },

  }
</script>
