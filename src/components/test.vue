<template>
  <div>
    <div id="chart_example">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    let this_ = this
    let myChart = this.$echarts.init(document.getElementById('chart_example'))
    let option = {
      color: ['#f44'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: [
        {
          type: 'category',
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '每月花费',
          type: 'bar',
          barWidth: '60%',
          data: [995, 666, 444, 858, 654, 236, 645, 546, 846, 225, 547, 356]
        }
      ]
    }
    myChart.setOption(option)

    window.addEventListener('resize', function() {
      myChart.resize()
    })
  },
  methods: {},
  watch: {},
  created() {}
}
</script>

<style scoped>
h2 {
  text-align: center;
  padding: 30px;
  font-size: 18px;
}
#chart_example {
  width: 50%;
  height: 500px;
  border: 1px solid red;
  margin: 0 auto;
}
</style>
