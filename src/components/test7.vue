<template>
  <!-- 例子7 -->
  <div>
    <div
      class="earthmap"
      id="chart_example7"
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
      // let myChart = this.$echarts.init(
      //   document.getElementById('chart_example7')
      // )
      let geoCoordMap = {
        南宁: [108.479, 23.1152],
        北京: [116.46, 39.92],
        长沙: [113, 28.21],
        武汉: [114.31, 30.52],
        三亚: [109.511909, 18.252847],
        广州: [113.5107, 23.2196],
        重庆: [107.7539, 30.1904],
        芬兰: [24.909912, 60.169095],
        美国: [-100.696295, 33.679979],
        日本: [139.710164, 35.706962],
        韩国: [126.979208, 37.53875],
        瑞士: [7.445147, 46.956241],
        东南亚: [117.53244, 5.300343],
        澳大利亚: [135.193845, -25.304039],
        德国: [13.402393, 52.518569],
        英国: [-0.126608, 51.208425],
        加拿大: [-102.646409, 59.994255]
      }
      let CQData = [[{ name: '重庆' }, { name: '英国', value: 70 }]]
      let GZData = [[{ name: '广州' }, { name: '日本', value: 30 }]]
      let NNData = [
        [{ name: '南宁' }, { name: '加拿大', value: 80 }],
        [{ name: '南宁' }, { name: '美国', value: 100 }],
        [{ name: '南宁' }, { name: '澳大利亚', value: 95 }],
        [{ name: '南宁' }, { name: '瑞士', value: 50 }]
      ]
      let convertData = function(data) {
        let res = []
        for (let i = 0; i < data.length; i++) {
          let dataItem = data[i]
          let fromCoord = geoCoordMap[dataItem[1].name]
          let toCoord = geoCoordMap[dataItem[0].name]
          if (fromCoord && toCoord) {
            res.push([fromCoord, toCoord])
          }
        }
        // console.log(res)
        return res
      }
      let series = [] // 3D飞线
      let dser = [] // 2D散点坐标
      ;[
        ['重庆', CQData],
        ['广州', GZData],
        ['南宁', NNData]
      ].forEach(function(item, i) {
        dser.push(
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 3,
            rippleEffect: {
              brushType: 'stroke'
            },
            label: {
              fontSize: 24,
              show: true,
              position: 'right',
              formatter: '{b}'
            },
            itemStyle: {
              normal: {
                color: '#f5f802'
              }
            },
            data: item[1].map(function(dataItem) {
              return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name],
                symbolSize: dataItem[1].value / 4
              }
            })
          },
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 3,
            rippleEffect: {
              brushType: 'stroke'
            },
            label: {
              normal: {
                show: true,
                position: 'left',
                fontSize: 18,
                formatter: '{b}'
              }
            },
            itemStyle: {
              normal: {
                color: '#ff0000'
              }
            },
            data: [
              {
                name: item[0],
                value: geoCoordMap[item[0]],
                symbolSize: parseInt(Math.random() * 20 + 10),
                label: {
                  normal: {
                    position: 'right'
                  }
                }
              }
            ]
          }
        )
        series.push({
          type: 'lines3D',
          effect: {
            show: true,
            period: 3, //速度
            trailLength: 0.1 //尾部阴影
          },
          lineStyle: {
            //航线的视图效果
            color: '#9ae5fc',
            width: 1,
            opacity: 0.6
          },
          data: convertData(item[1]) // 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])
        })
      })
      let canvas = document.createElement('canvas')

      let myChart = this.$echarts.init(canvas, null, {
        width: 4096,
        height: 2048
      })
      myChart.setOption({
        backgroundColor: 'rgba(3,28,72,0.3)',
        title: {
          show: true
        },
        geo: {
          type: 'map',
          map: 'world',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          boundingCoords: [
            [-180, 90],
            [180, -90]
          ],
          zoom: 0,
          roam: false,
          itemStyle: {
            borderColor: '#000d2d',
            normal: {
              areaColor: '#2455ad',
              borderColor: '#000c2d'
            },
            emphasis: {
              areaColor: '#357cf8'
            }
          },
          label: {
            fontSize: 24
          }
        },
        series: dser
      })
      let option = {
        backgroundColor: 'rgba(0,0,0,0)', //canvas的背景颜色
        globe: {
          baseTexture: myChart,
          top: 'middle',
          left: 'center',
          displacementScale: 0,
          environment: 'none',
          shading: 'color',
          viewControl: {
            distance: 240,
            autoRotate: true
          }
        },
        series: series
      }
      this.$echarts
        .init(document.getElementById('chart_example7'))
        .setOption(option, true)

      // myChart.setOption(option)
      window.addEventListener('resize', function() {
        myChart.resize()
      })
    }
  },
  watch: {},
  created() {}
}
</script>
