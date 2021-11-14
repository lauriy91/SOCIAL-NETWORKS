<template>
<section>
<home-bar/>
<feed class="feed"/>
<feed class="feed"/>
<feed class="feed"/>
<feed class="feed"/>
<feed class="feed"/>
</section>
</template>

<script>
import Feed from '../components/Feed.vue'
import HomeBar from '../components/HomeBar.vue'

  export default {
    components: {
        HomeBar,
        Feed
    }
  }
</script>

<style>
.feed{
  margin-top: 6%;
  margin-left: 30%;
}
</style>