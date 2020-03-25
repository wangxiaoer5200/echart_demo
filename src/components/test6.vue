<template>
  <!-- 例子6 -->
  <div>
    <div
      class="earthmap"
      id="chart_example6"
      style="width:1500px;height:1221px;"
    >
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import world from 'echarts/map/js/world.js'
import china from 'echarts/map/js/china.js'

export default {
  data() {
    return {}
  },
  mounted() {
    this.initData()
  },
  methods: {
    // 绘制图表
    initData() {
      let myChart = this.$echarts.init(
        document.getElementById('chart_example6')
      )
      let rodamData = function() {
        let name = '随机点' + Math.random().toFixed(5) * 100000
        // 终点经度
        let longitude = 105.18
        // 终点纬度
        let latitude = 37.51
        // 起点经度
        let longitude2 = Math.random() * 360 - 180
        // 起点纬度
        let latitude2 = Math.random() * 180 - 90
        return {
          coords: [
            [longitude2, latitude2],
            [longitude, latitude]
          ],
          value: (Math.random() * 3000).toFixed(2)
        }
      }
      let option = {
        backgroundColor: '#013954',
        title: {
          text: '3D地球攻击线',
          subtext: '随机模拟数据',
          x: 'center',
          y: 100,
          textStyle: {
            color: '#fff',
            fontSize: 25
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          top: 'bottom',
          left: 'right',
          data: ['北京 Top10', '上海 Top10', '广州 Top10'],
          textStyle: {
            color: '#fff'
          },
          selectedMode: 'single'
        },
        globe: {
          baseTexture: myChart,
          environment: this.$echarts.graphic.LinearGradient(
            0,
            1,
            1,
            1,
            [
              {
                offset: 0,
                color: '#000000' // 天空颜色
              },
              {
                offset: 0,
                color: '#000000' // 地面颜色
              },
              {
                offset: 0,
                color: '#000000' // 地面颜色
              }
            ],
            true
          ),
          // shading: 'lambert',
          light: {
            // 光照阴影
            main: {
              color: '#fff', // 光照颜色
              intensity: 1.2, // 光照强度
              // shadowQuality: 'high', //阴影亮度
              shadow: false, // 是否显示阴影
              alpha: 40,
              beta: -30
            },
            ambient: {
              intensity: 0.5
            }
          },
          viewControl: {
            alpha: 30,
            beta: 160,
            // targetCoord: [116.46, 39.92],
            autoRotate: true,
            autoRotateAfterStill: 10,
            distance: 240
          }
        },
        series: [
          {
            name: 'lines3D',
            type: 'lines3D',
            coordinateSystem: 'globe',
            effect: {
              show: true
            },
            blendMode: 'lighter',
            lineStyle: {
              width: 2
            },
            data: [],
            silent: false
          }
        ]
      }
      // 随机数据
      for (let i = 0; i < 500; i++) {
        option.series[0].data = option.series[0].data.concat(rodamData())
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
