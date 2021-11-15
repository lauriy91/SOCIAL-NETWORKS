<template>
    <login :newUser="true"/>
</template>

<script>
import Login from '../components/Login.vue'

  export default {
    components: {
        Login
    }
  }
</script>

<style>
#name{
    font-size: 0%;
}
</style>