<template>
  <div class="overflow-hidden">
      <v-app-bar
        width="100%"
        color="white"
        dark
        prominent
        src="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="rgb(221, 6, 132, .7), rgb(126, 13, 136, .7), rgb(112, 2, 155, .7)"
          ></v-img>
        </template>
  
        <div>
        <label class="avatar_name">Laura Rodriguez King</label><br>
        <v-list-item-avatar size="100" class="avatar" >
          <v-img src="https://cdn-icons-png.flaticon.com/512/194/194938.png"></v-img>
        </v-list-item-avatar>
        </div>

        <v-spacer></v-spacer>

        <label v-if="profile">
        <v-btn icon color="white">
          <router-link to="/profile">
          <v-icon>mdi-account</v-icon>
          </router-link>
        </v-btn> 
        </label>

        <label v-if="feed">
        <v-btn icon color="white">
          <router-link to="/feed">
          <v-icon>mdi-home</v-icon>
          </router-link>
        </v-btn>   
        </label>  

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
  
        <v-menu
          bottom
          left
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              color="white"
              v-bind="attrs"
              v-on="on"
            >
              <router-link to="/login"><v-icon router-link to="/login">mdi-dots-vertical</v-icon></router-link>
            </v-btn>
          </template>
  
          <v-list>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
  
        <template v-slot:extension>
          <v-tabs align-with-title style="margin-top:2rem">
            <v-tab><label class="follow">Followers</label></v-tab>
            <v-tab><label class="follow">Following</label></v-tab>
            <v-btn icon><v-icon>mdi-plus</v-icon></v-btn>
          </v-tabs>
        </template>
        
      </v-app-bar>

  </div>
</template>

<script>

  export default {
      props:{
        profile: Boolean,
        feed: Boolean
        }
  }

</script>

<style lang="scss">
.overflow-hidden{
  background-color: white;
  background: white;
  color: white;
}
.avatar_name{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-left: 2em;
}
.follow{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: .8em;
}
</style>