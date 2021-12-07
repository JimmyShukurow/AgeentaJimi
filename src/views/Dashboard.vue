<template>
  <div class="home">
    <h1> This is Dashboard Page </h1>
    <div class="stats">
      <div class="total-properties"> 

      </div>
      <div class="total-properties"> 

      </div>
     
      <div class="total-properties"> 

      </div>
      <div class="total-properties"> 

      </div>

    </div>
   
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Dashboard',
  components: {
    
  }
}
</script>

<style scoped>
  .total-properties {
    padding: 70px;
    background: rgb(50, 130, 205);
    width: 25%;
    border-radius: 5px;
    margin: 20px;
  }
  .stats {
    display: flex;
  }
</style>
