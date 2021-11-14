<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >

    <v-toolbar
      color="black"
      dark
    >
        <v-list-item-avatar size="50" class="avatar" >
          <v-img src="https://cdn-icons-png.flaticon.com/512/194/194938.png"></v-img>
        </v-list-item-avatar>

      <v-toolbar-title>Juanito Perdido</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
    }),
  }
</script>