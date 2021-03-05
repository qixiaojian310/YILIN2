<template>
  <div id="app">
    <Header />
    <home-page />
  </div>
</template>

<script>
import all from './assets/js/all'
import Header from './components/Header'
import HomePage from './components/HomePage'

export default {
  name: 'App',
  components: {
    Header,
    HomePage
  },
  mounted: function(){
    all()
  }
}
</script>

<style>
@import './assets/css/main.css';
</style>
