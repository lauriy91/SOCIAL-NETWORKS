<template>
    <div id="app">
      <v-app-bar
        absolute
        color="#6A76AB"
        dark
        prominent
        src="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgb(221, 6, 132, .7), rgb(126, 13, 136, .7), rgb(112, 2, 155, .7)"
          ></v-img>
        </template>
  
        <div>
        <label class="avatar_name">Laura Rodriguez King</label><br>
        <v-list-item-avatar size="100" class="avatar" >
          <v-img src="https://cdn-icons-png.flaticon.com/512/194/194938.png"></v-img>
        </v-list-item-avatar>
        </div>

        <v-spacer></v-spacer>

        <v-btn icon color="white">
          <v-icon>mdi-home</v-icon>
        </v-btn>

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
              <v-icon>mdi-dots-vertical</v-icon>
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
          <v-tabs align-with-title>
            <v-tab>Followers</v-tab>
            <v-tab>Following</v-tab>
            <v-btn icon><v-icon>mdi-plus</v-icon></v-btn>
          </v-tabs>
        </template>
        

      </v-app-bar>

</div>
</template>

<style lang="scss">
.avatar{
  margin: 2em;
}
.avatar_name{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>