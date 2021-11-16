<template>
  <v-card
    class="mx-auto"
    color= "#808080"
    dark
    max-width="60%"
  >
    <v-img :src="imagenURL"></v-img>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{user_name}}</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
        <v-btn icon @click="like" v-model="btnLike" :color="colorHeart">
          <v-icon class="mr-1">
            mdi-heart
          </v-icon>
        </v-btn>
          <span class="subheading mr-2">{{likes}}</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">
            mdi-comment
          </v-icon>
          <span class="subheading">{{comments}}</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios'
  export default {
    data () {
      return {
        btnLike: null,
        colorHeart: "white",
      }
    },
    methods:{
      like(){
        if (this.colorHeart==="white"){
          axios.post("http://localhost:3000/image/like/"+this._id)
          .then ( res =>{
            this.likes=res.data.likes
            this.colorHeart="red"
          })
        }
        else{
          axios.post("http://localhost:3000/image/unlike/"+this._id)
          .then ( res =>{
            this.likes=res.data.likes
            this.colorHeart="white"
          })
        }
      }
    },

    watch:{
      likes:function(value){
        this.likes=value
      }
    },

    props:{
      imagenURL: String,
      user_name: String,
      likes: Number,
      comments: Number,
      user_id: String,
      _id: String
    }
  }
</script>