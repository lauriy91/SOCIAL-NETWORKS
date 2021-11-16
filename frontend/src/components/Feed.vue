<template>
  <section>

    <div class="banner">
    <banner :profile="true"/>
    </div>

    <div class="postHistories" v-for="image in post" :key="image.id">
    <postHistories class="PostHistories" :imagenURL="image.image_url" :user_name="image.user_name" :likes="image.likes" :user_id="image.user_id" :_id="image._id"/><br><br>
    </div>

  </section>
</template>

<script>
import PostHistories from './PostHistories.vue'
import Banner from './Banner.vue'
import axios from "axios"

  export default {
    components: {
        PostHistories,
        Banner
    },
    data(){
      return{
        post:[]
      }
    },
    mounted(){
        axios.get("http://localhost:3000/image")
        .then(res=>{
          this.post=res.data
        })
    }
  }
</script>

<style>
.postHistories{
  margin: 2rem 0 2rem 0;
}
</style>