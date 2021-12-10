<template>
  <div class="home">
    <h1> This is Dashboard Page </h1>
    <div class="stats">
      <div class="total-properties"> 
       <img src="../assets/house15.svg"  class="background-icon">
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
    <div class="first">
        <div class="charts" id="chart1"></div>
    </div>
    
    <div class="second">
        <div class="charts" id="chart2"></div>
    </div>
  </div>
</template>

<script>
import { Chart } from 'frappe-charts/dist/frappe-charts.esm.js'
import 'frappe-charts/dist/frappe-charts.min.css'
export default {
  name: 'Dashboard',
  data() {
    return {
      labels:['SUN', 'MON', 'TUE', 'WEN', 'THU'],
      value:[
        {values: [18, 40, 30, 35, 8]}
      ]
    }
  },
  components: {
    
  },
  mounted() {
    const data1 = {
        labels: ["12am-3am", "3am-6pm", "6am-9am", "9am-12am",
            "12pm-3pm", "3pm-6pm", "6pm-9pm", "9am-12am"
        ],
        datasets: [
            {
                name: "Some Data", chartType: "bar",
                values: [25, 40, 30, 35, 8, 52, 17, -4]
            }
        ]
    }
    const data2 = {
        labels: ["12am-3am", "3am-6pm", "6am-9am", "9am-12am",
            "12pm-3pm", "3pm-6pm", "6pm-9pm", "9am-12am"
        ],
        datasets: [
            {
                name: "Another Set", chartType: "line",
                values: [25, 50, -10, 15, 18, 32, 27, 14]
            }
        ]
    }

    new Chart("#chart1", {  
        title: "My Awesome Chart",
        data: data1,
        height: 250,
        colors: ['#324B4A']
    })
     new Chart("#chart2", {  
        title: "My Awesome Chart2",
        data: data2,
        height: 250,
        colors: ['#324B4A']
    })
  }
  
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
    box-shadow:   9px 9px 18px #828a89, -9px -9px 18px #ffffff;
    position: relative;
    overflow: hidden;
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
    position: relative;
  }
  .charts {
    margin: 20px;
    color: #324B4A;
    font-size: 150px;
    border-radius: 20px;
    background: rgba(158, 171, 170, 0.5);
     box-shadow:   9px 9px 18px #828a89,
             -9px -9px 18px #ffffff;
  }
  .first , .second {
    display: inline-block;
    width: 50%;
  }
  .total-properties img {
    position: absolute;
    width: 200px;
    background: #d5e2e1;
    opacity: 0.1;
    transform: translate(-180px, -60px);
  }

</style>
