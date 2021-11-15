<template>
  <section>
    <table>
      <tr>
        <td><banner :profile="true"/></td>
      </tr>
      <tr>
        <td>
        <feed-2 class="feed-2"/>
        <feed-2  class="feed-2"/>
        <feed-2  class="feed-2"/>
        <feed-2  class="feed-2"/>
        <feed-2  class="feed-2"/>
        </td>
      </tr>
    </table>
  </section>
</template>

<script>
import Feed2 from './PostHistories.vue'
import Banner from './Banner.vue'

  export default {
    components: {
        Feed2,
        Banner
    }
  }
</script>

<style>
.feed-2{
  background: white;
  background-color: white;
  margin-top: 6%;
  margin-left: 30%;
}
</style>