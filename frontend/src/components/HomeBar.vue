<template>
<div id="app">
  <v-app id="inspire">
      <v-app-bar
        :collapse="!collapseOnScroll"
        :collapse-on-scroll="collapseOnScroll"
        absolute
        color="deep-purple accent-4"
        dark
        scroll-target="#scrolling-techniques-6"
        >
 
        <v-list-item-avatar size="50" class="avatar" >
          <v-img src="https://cdn-icons-png.flaticon.com/512/194/194938.png"></v-img>
        </v-list-item-avatar>
  
        <v-toolbar-title>Lauriy Rodriguez</v-toolbar-title>
  
        <v-spacer></v-spacer>
        
        <v-btn icon>
        <v-icon>mdi-heart</v-icon>
        </v-btn>
        
        <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
        </v-btn>
        
        <v-menu
        left
        bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
  
        <v-checkbox
          v-model="collapseOnScroll"
          color="white"
          hide-details
        ></v-checkbox>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-6"
        class="overflow-y-auto"
        max-height="none"
      >      
        <v-container style="height: 80px;"></v-container>

      </v-sheet>
  </v-app>
</div>
</template>

<script>
  export default {
    data: () => ({
      collapseOnScroll: true,
    }),
  }
</script>

<style>
#inspire{
  height: 0;
}
</style>