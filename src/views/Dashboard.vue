<template>
  <div class="home">
    <h1> This is Dashboard Page </h1>
    <div class="stats">
      <div class="total-properties"> 
        <div class="data">
          <div class="number">0</div>  <div>properties</div> 
        </div>
      </div>
      <div class="total-properties"> 
        <div class="data">
          <div class="number">0</div>  <div>properties</div> 
        </div>
      </div>
     
      <div class="total-properties"> 
        <div class="data">
          <div class="number">0</div>  <div>properties</div> 
        </div>
      </div>
      <div class="total-properties"> 
        <div class="data">
          <div class="number">0</div>  <div>properties</div> 
        </div>
      </div>

    </div>
    <div class="charts">
      <v-frappe-chart
        type="bar"
        :labels="['SUN', 'MON', 'TUE', 'WEN', 'THU']"
        :data="[
            { values: [18, 40, 30, 35, 8] }
        ]"
        :height="400"
        :colors="['#324B4A']"
      />
    </div>
    
   
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Dashboard',
  components: {
    
  },
  
}
</script>

<style scoped>
  .total-properties {
    padding: 70px 20px;
    width: 25%;
    font-size: 30px;
    border-radius: 5px;
    margin: 20px;
    height: 36px;
    border-radius: 10px;
    background:#d5e2e1;
    box-shadow:   9px 9px 18px #828a89,
             -9px -9px 18px #ffffff;
  }
  .stats {
    display: flex;
  }
  .home {
    color: #324B4A;
  }
  .number {
    font-size: 40px
  }
  .data {
    float: right;
    top: 50%;
    transform: translateY(-50%);
  }
  .charts {
    margin: 20px;
    color: #324B4A;
    font-size: 150px;
    border-radius: 20px;
    background: rgba(158, 171, 170, 0.5);
     box-shadow:   inset 5px 5px 10px #7f8584,
            inset -5px -5px 10px #f7ffff;
  }

</style>
