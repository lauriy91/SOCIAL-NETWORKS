<template class="navbar">
  <v-card >
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://cdn-icons-png.flaticon.com/512/194/194938.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>Laura Rodriguez</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </v-card>
</template>

<script>
  export default {
  components: {},
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home' },
          { title: 'Notifications', icon: 'mdi-heart' },
          { title: 'Friends', icon: 'mdi-account-group-outline' },
          { title: 'Logout', icon: 'mdi-account' },
        ],
        mini: true,
      }
    },
  }
</script>

<style>
.navbar{
    color: black;
    background-color: black;
}
</style>