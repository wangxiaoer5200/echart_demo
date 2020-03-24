<template>
  <div>
    <div
      id="chart_example"
      style="width:600px;height:600px;"
    >

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.initData()
  },
  methods: {
    // 高斯分布函数
    makeGaussian(amplitude, x0, y0, sigmaX, sigmaY) {
      return function(amplitude, x0, y0, sigmaX, sigmaY, x, y) {
        var exponent = -(
          Math.pow(x - x0, 2) / (2 * Math.pow(sigmaX, 2)) +
          Math.pow(y - y0, 2) / (2 * Math.pow(sigmaY, 2))
        )
        return amplitude * Math.pow(Math.E, exponent)
      }.bind(null, amplitude, x0, y0, sigmaX, sigmaY)
    },

    initData() {
      let myChart = this.$echarts.init(document.getElementById('chart_example'))
      let guassian = this.makeGaussian(50, 0, 0, 20, 20)
      let data = []
      for (var i = 0; i < 1000; i++) {
        let x = Math.random() * 100 - 50
        let y = Math.random() * 100 - 50
        let z = guassian(x, y)
        data.push([x, y, z])
      }
      let option = {
        grid3D: {},
        xAxis3D: {},
        yAxis3D: {},
        zAxis3D: { max: 100 },
        series: [
          {
            type: 'scatter3D',
            data: data
          }
        ]
      }

      myChart.setOption(option)
      window.addEventListener('resize', function() {
        myChart.resize()
      })
    }
  },
  watch: {},
  created() {}
}
</script>

<style scoped>
</style>
