<template>
  <section>
    <banner :profile="true"/>
    <feed class="feed"/>
    <feed class="feed"/>
    <feed class="feed"/>
    <feed class="feed"/>
    <feed class="feed"/>
  </section>
</template>

<script>
import Feed from '../components/Feed.vue'
import Banner from './Banner.vue'

  export default {
    components: {
        Feed,
        Banner
    }
  }
</script>

<style>
.feed{
  margin-top: 6%;
  margin-left: 30%;
}
</style>