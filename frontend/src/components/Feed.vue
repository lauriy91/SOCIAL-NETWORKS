<template>
  <section>

    <div class="banner">
    <banner :profile="true"/>
    </div>

    <div class="postHistories">
    <postHistories class="PostHistories"/><br><br>
    <postHistories  class="PostHistories"/><br><br>
    <postHistories  class="PostHistories"/><br><br>
    <postHistories  class="PostHistories"/><br><br>
    <postHistories  class="PostHistories"/>
    </div>

  </section>
</template>

<script>
import PostHistories from './PostHistories.vue'
import Banner from './Banner.vue'

  export default {
    components: {
        PostHistories,
        Banner
    }
  }
</script>

<style>
.postHistories{
  margin: 2rem 0 2rem 0;
}
</style>