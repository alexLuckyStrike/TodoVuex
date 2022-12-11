<template>
  <div id="app">
    <TheNavbar></TheNavbar>

      <router-view>
        <Main></Main>
        <Form></Form>
      </router-view>

  </div>
</template>

<script>

import TheNavbar from "./components/TheNavbar";
import Form from "./views/Form";
import Main from "./views/Main";


export default {
  name: 'App',
  components: {TheNavbar,Form,Main}
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
