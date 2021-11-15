<template>
  <v-card
    class="mx-auto"
    max-width="50%"
  >
    <v-carousel>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <v-card-title>
      <div class="text-h4 mb-2">
        Welcome Home...
      </div>

    </v-card-title>
    <v-row
      class="px-4 grey--text"
      align="center"
    >
      <v-avatar
        size="24"
        class="mr-4"
      >
        <v-img
          src="https://cdn.vuetifyjs.com/images/weather/part-cloud-48px.png"
          contain
        ></v-img>
      </v-avatar>

      <div class="text-h6 font-weight-regular grey--text">
        Monday, 12:30 PM, Mostly Sunny &nbsp;
      </div>
      <span>81° / 62°</span>
      
    </v-row>

    <v-divider class="mt-6 mx-4"></v-divider>

    <v-card-text>
      <!-- <v-chip
        class="mr-2"
        @click="lights"
      > -->
        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-bookmark</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-comment</v-icon>
        </v-btn>
      <!-- </v-chip> -->
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>