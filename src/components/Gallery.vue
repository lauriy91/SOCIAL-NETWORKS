<template>

<div class="gallery">
  <v-card>

    <v-tabs
      color="deep-purple accent-4"
      right
    >
    
      <v-tab>PHOTOS</v-tab>
      <v-tab>VIDEOS</v-tab>

      <v-tab-item
        v-for="n in 3"
        :key="n"
        
      >
        <v-container fluid>
          <v-row>
            <v-col
              v-for="i in 9"
              :key="i"
              cols="12"
              md="4"
              
            >
              <v-img
                :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                aspect-ratio="1"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>

</div>
</template>

<style lang="scss">
.gallery{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 90%;
  margin-left: 5%;
}
</style>