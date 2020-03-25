<template>
  <div>
    <div
      id="chart_example4"
      style="width:1500px;height:1221px;"
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
    initData() {
      let myChart = this.$echarts.init(
        document.getElementById('chart_example4')
      )
      var chinaGeoCoordMap = {
        哈尔滨: [127.9688, 46.368],
        合肥: [117.29, 32.0581],
        包头: [110.3467, 41.4899],
        长春: [125.8154, 44.2584],
        北京市: [116.4551, 40.2539],
        广州: [113.12244, 23.009505],
        南宁: [108.479, 23.1152],

        贵阳: [106.6992, 26.7682],
        泉州: [118, 24.5],
        兰州: [103.8, 36],
        晋中: [112.75, 37.68],
        临沂: [118.35, 35.2],
        淄博: [118.05, 36.82],
        无锡: [120.3, 31.57],
        临汾: [111.52, 36.08],
        榆林: [109.73, 38.28],
        通辽: [122.27, 43.62],
        安宁: [102.72, 25.05],
        沈阳: [123.1238, 42.1216],
        石家庄: [114.4995, 38.1006],
        天津: [117.4219, 39.4189],
        山西: [112.3352, 37.9413],
        西安: [109.1162, 34.2004],
        甘肃: [103.5901, 36.3043],
        银川: [106.3586, 38.1775],
        西宁: [101.4038, 36.8207],
        青海: [96.4038, 35.82072],
        乌鲁木齐: [87.9236, 43.5883],
        新疆: [83.9236, 40.5883],
        西藏: [91.11, 29.97],
        成都: [103.9526, 30.7617],
        重庆: [108.384366, 30.439702],
        山东: [117.1582, 36.8701],
        郑州: [113.4668, 34.6234],
        江苏: [118.8062, 31.9208],
        武汉: [114.3896, 30.6628],
        杭州: [119.5313, 29.8773],
        福建: [119.4543, 25.9222],
        南昌: [116.0046, 28.6633],
        长沙: [113.0823, 28.2568],
        贵阳: [106.6992, 26.7682],
        云南: [102.9199, 25.4663],
        海南: [110.3893, 19.8516],
        上海: [121.4648, 31.2891]
      }
      var chinaDatas = [
        [
          {
            name: '哈尔滨',
            value: 0
          }
        ],
        [
          {
            name: '北京市',
            value: 1
          }
        ],
        [
          {
            name: '合肥',
            value: 0
          }
        ],
        [
          {
            name: '包头',
            value: 0
          }
        ],
        [
          {
            name: '广州',
            value: 0
          }
        ],
        [
          {
            name: '南宁',
            value: 0
          }
        ],
        [
          {
            name: '贵阳',
            value: 0
          }
        ],
        [
          {
            name: '石家庄',
            value: 0
          }
        ],
        [
          {
            name: '长沙',
            value: 0
          }
        ],
        [
          {
            name: '南昌',
            value: 0
          }
        ],
        [
          {
            name: '银川',
            value: 0
          }
        ],
        [
          {
            name: '西宁',
            value: 0
          }
        ],
        [
          {
            name: '西安',
            value: 0
          }
        ],
        [
          {
            name: '沈阳',
            value: 0
          }
        ],
        [
          {
            name: '天津',
            value: 0
          }
        ],
        [
          {
            name: '乌鲁木齐',
            value: 0
          }
        ],
        [
          {
            name: '武汉',
            value: 0
          }
        ],
        [
          {
            name: '郑州',
            value: 0
          }
        ],
        [
          {
            name: '重庆',
            value: 0
          }
        ],
        [
          {
            name: '泉州',
            value: 0
          }
        ],
        [
          {
            name: '兰州',
            value: 0
          }
        ],
        [
          {
            name: '晋中',
            value: 0
          }
        ],
        [
          {
            name: '临沂',
            value: 0
          }
        ],
        [
          {
            name: '淄博',
            value: 0
          }
        ],
        [
          {
            name: '无锡',
            value: 0
          }
        ],
        [
          {
            name: '临汾',
            value: 0
          }
        ],
        [
          {
            name: '榆林',
            value: 0
          }
        ],
        [
          {
            name: '通辽',
            value: 0
          }
        ],
        [
          {
            name: '安宁',
            value: 0
          }
        ],

        [
          {
            name: '成都',
            value: 0
          }
        ]
      ]

      var convertData = function(data) {
        var res = []
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i]
          var fromCoord = [125.8154, 44.2584]
          var toCoord = chinaGeoCoordMap[dataItem[0].name]

          if (
            fromCoord &&
            toCoord &&
            dataItem[0].name != '北京市' &&
            dataItem[0].name != '新疆' &&
            dataItem[0].name != '西藏' &&
            dataItem[0].name != '青海' &&
            dataItem[0].name != '新疆'
          ) {
            res.push([
              {
                coord: fromCoord,
                value: dataItem[0].value
              },
              {
                coord: toCoord
              }
            ])
          }
        }
        return res
      }
      var series = []
      let arr = ['长春', chinaDatas]
      console.log(arr)
      ;[arr].forEach(function(item, i) {
        // console.log(item)
        series.push(
          {
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              period: 4, //箭头指向速度，值越小速度越快
              trailLength: 0.12, //特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: 'arrow', //箭头图标
              symbolSize: 7 //图标大小
            },
            lineStyle: {
              normal: {
                width: 1, //尾迹线条宽度
                opacity: 1, //尾迹线条透明度
                curveness: 0 //尾迹线条曲直度
              }
            },
            data: convertData(item[1])
          },
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              //涟漪特效
              period: 4, //动画时间，值越小速度越快
              brushType: 'stroke', //波纹绘制方式 stroke, fill
              scale: 4 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
              normal: {
                show: true,
                color: '#fff',
                position: 'right', //显示位置
                offset: [5, 0], //偏移设置
                formatter: function(params) {
                  //圆环显示文字
                  return params.data.name
                },
                fontSize: 13
              },
              emphasis: {
                show: true
              }
            },
            symbol: 'circle',
            symbolSize: function(val) {
              return 5 + val[2] * 5 //圆环大小
            },
            itemStyle: {
              normal: {
                show: false,
                color: '#f00'
              }
            },
            data: item[1].map(function(dataItem) {
              return {
                name: dataItem[0].name,
                value: chinaGeoCoordMap[dataItem[0].name].concat([
                  dataItem[0].value
                ])
              }
            })
          },
          //被攻击点
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              period: 4,
              brushType: 'stroke',
              scale: 4
            },
            label: {
              normal: {
                show: true,
                fontSize: 20,
                position: 'right',
                //offset:[5, 0],
                color: '#0f0',
                formatter: '{b}',
                textStyle: {
                  color: '#0f0'
                }
              },
              emphasis: {
                show: true,
                color: '#f60'
              }
            },
            symbol: 'pin',
            symbolSize: 30,
            data: [
              {
                name: item[0],
                value: chinaGeoCoordMap[item[0]].concat([10])
              }
            ]
          }
        )
      })
      console.log(series)

      let option = {
        title: {
          text: '备品物流平台',
          subtext: '数据由备品物流部提供',
          x: 'center',
          y: 100,
          textStyle: {
            color: '#fff',
            fontSize: 25
          }
        },

        tooltip: {
          trigger: 'item',
          backgroundColor: 'rgba(166, 200, 76, 0.82)',
          borderColor: '#FFFFCC',
          showDelay: 0,
          hideDelay: 0,
          enterable: true,
          transitionDuration: 0,
          extraCssText: 'z-index:100',
          formatter: function(params, ticket, callback) {
            //根据业务自己拓展要显示的内容
            var res = ''
            var name = params.name
            var value = params.value[params.seriesIndex + 1]
            res =
              "<span style='color:#fff;'>" + name + '</span><br/>数据：' + value
            return res
          }
        },
        backgroundColor: '#013954',
        visualMap: {
          //图例值控制
          min: 0,
          max: 1,
          calculable: true,
          show: true,
          color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
          textStyle: {
            color: '#fff'
          }
        },
        geo: {
          map: 'china',
          zoom: 1.2,
          label: {
            emphasis: {
              show: false
            }
          },
          roam: true, //是否允许缩放
          itemStyle: {
            normal: {
              borderColor: 'rgba(147, 235, 248, 1)',
              borderWidth: 1,
              areaColor: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                  }
                ],
                globalCoord: false // 缺省为 false
              },
              shadowColor: 'rgba(128, 217, 248, 1)',
              // shadowColor: 'rgba(255, 255, 255, 1)',
              shadowOffsetX: -2,
              shadowOffsetY: 2,
              shadowBlur: 10
            },
            emphasis: {
              areaColor: '#389BB7',
              borderWidth: 0
            }
          }
        },
        series: series
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
