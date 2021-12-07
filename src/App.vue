<template>
  <div id="app">
    <Header />

    <div class="main"> 
        <Sidebar />
      <div class="router-view">
            <router-view/>
      </div>
    </div>
    
  </div>

    
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue' 
export default {
  components: {
    Header,
    Sidebar
  }
  
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
  }
  html {
    height: 100%;
  }

  body {
    margin: 0;
    height: 100%;
  }



  .router-view {
    text-align: center;
    width: 87%;
    background: #e6e6e6;
    display: inline-block;
    vertical-align: top;
    height: 100%;
    overflow: auto;
  }
  .main {
    display: flex;
    height: 100%;
  }
</style>
