<!--
 * @Description: 文件说明
 * @Author: wangbin
 * @Date: 2020-03-25 15:32:13
 * @LastEditTime: 2020-07-31 17:43:04
 * @LastEditors: wangbin
 * @FilePath: \echarts_study\src\components\test9.vue
-->
<template>
  <!-- 例子9  饼图-->
  <div>
    <div>
      <!-- 1 -->
      <div
        class='content'
        id='example1'
      >

      </div>
      <!-- 2 -->
      <div
        class='content'
        id='example2'
      >

      </div>
    </div>
    <div>
      <!-- 3 -->
      <div
        class='content'
        id='example3'
      >

      </div>
      <!-- 4 -->
      <div
        class='content'
        id='example4'
      >

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    // 图1
    this.initData1()
    // 图2
    this.initData2()
    // 图3
    this.initData3()
    // 图4
    this.initData4()
  },
  methods: {
    // 绘制图表1
    initData1() {
      //初始化canvas节点
      let myChart = this.$echarts.init(document.getElementById('example1'))
      let option = {
        title: {
          text: '80%',
          x: 'center',
          y: 'center',
          textStyle: {
            fontWeight: 'normal',
            color: '#0580f2',
            fontSize: '90'
          }
        },
        color: ['rgba(176, 212, 251, 1)'],
        legend: {
          show: true,
          itemGap: 12,
          data: ['01', '02']
        },

        series: [
          {
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['50%', '66%'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [
              {
                value: 80,
                name: '01',
                itemStyle: {
                  normal: {
                    color: {
                      // 完成的圆环的颜色
                      colorStops: [
                        {
                          offset: 0,
                          color: '#00cefc' // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: '#367bec' // 100% 处的颜色
                        }
                      ]
                    },
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              },
              {
                name: '02',
                value: 20
              }
            ]
          }
        ]
      }
      //画图
      myChart.setOption(option)
    },
    // 绘制图表2
    initData2() {
      //初始化canvas节点
      let myChart = this.$echarts.init(document.getElementById('example2'))
      let scaleData = [
        {
          name: '工程建设',
          value: 10
        },
        {
          name: '产权交易',
          value: 20
        },
        {
          name: '土地交易',
          value: 20
        },
        {
          name: '其他交易',
          value: 27
        },
        {
          name: '政府采购',
          value: 23
        }
      ]
      let rich = {
        white: {
          color: '#ddd',
          align: 'center',
          padding: [5, 0]
        }
      }
      let placeHolderStyle = {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0
        }
      }
      let data = []
      for (let i = 0; i < scaleData.length; i++) {
        data.push(
          {
            value: scaleData[i].value,
            name: scaleData[i].name,
            itemStyle: {
              normal: {
                borderWidth: 5,
                shadowBlur: 30,
                borderColor: this.$echarts.graphic.LinearGradient(0, 0, 1, 1, [
                  {
                    offset: 0,
                    color: '#7777eb'
                  },
                  {
                    offset: 1,
                    color: '#70ffac'
                  }
                ]),
                shadowColor: 'rgba(142, 152, 241, 0.6)'
              }
            }
          },
          {
            value: 4,
            name: '',
            itemStyle: placeHolderStyle
          }
        )
      }
      let seriesObj = [
        {
          name: '',
          type: 'pie',
          clockWise: false,
          radius: [195, 200],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: 'outside',
                color: '#ddd',
                formatter: function(params) {
                  let percent = 0
                  let total = 0
                  for (let i = 0; i < scaleData.length; i++) {
                    total += scaleData[i].value
                  }
                  percent = ((params.value / total) * 100).toFixed(0)
                  if (params.name !== '') {
                    return params.name + '\n{white|' + '占比' + percent + '%}'
                  } else {
                    return ''
                  }
                },
                rich: rich
              },
              labelLine: {
                show: false
              }
            }
          },
          data: data
        }
      ]
      let option = {
        backgroundColor: '#04243E',
        tooltip: {
          show: false
        },
        legend: {
          show: false
        },
        toolbox: {
          show: false
        },
        series: seriesObj
      }
      //画图
      myChart.setOption(option)
    },
    // 绘制图表3
    initData3() {
      //初始化canvas节点
      let myChart = this.$echarts.init(document.getElementById('example3'))
      let scale = 1
      let echartData = [
        {
          value: 2154,
          name: '曲阜师范大学'
        },
        {
          value: 3854,
          name: '潍坊学院'
        },
        {
          value: 3515,
          name: '青岛职业技术学院'
        },
        {
          value: 3515,
          name: '淄博师范高等专科'
        },
        {
          value: 3854,
          name: '鲁东大学'
        },
        {
          value: 2154,
          name: '山东师范大学'
        }
      ]
      let rich = {
        yellow: {
          color: '#ffc72b',
          fontSize: 30 * scale,
          padding: [5, 4],
          align: 'center'
        },
        total: {
          color: '#ffc72b',
          fontSize: 40 * scale,
          align: 'center'
        },
        white: {
          color: '#fff',
          align: 'center',
          fontSize: 14 * scale,
          padding: [21, 0]
        },
        blue: {
          color: '#49dff0',
          fontSize: 16 * scale,
          align: 'center'
        },
        hr: {
          borderColor: '#0b5263',
          width: '100%',
          borderWidth: 1,
          height: 0
        }
      }
      let option = {
        backgroundColor: '#031f2d',
        title: {
          text: '总考生数',
          left: 'center',
          top: '53%',
          padding: [24, 0],
          textStyle: {
            color: '#fff',
            fontSize: 18 * scale,
            align: 'center'
          }
        },
        legend: {
          selectedMode: false,
          formatter: function(name) {
            let total = 0 //各科正确率总和
            let averagePercent //综合正确率
            echartData.forEach(function(value, index, array) {
              total += value.value
            })
            return '{total|' + total + '}'
          },
          data: [echartData[0].name],
          // data: ['高等教育学'],
          // itemGap: 50,
          left: 'center',
          top: 'center',
          icon: 'none',
          align: 'center',
          textStyle: {
            color: '#fff',
            fontSize: 16 * scale,
            rich: rich
          }
        },
        series: [
          {
            name: '总考生数量',
            type: 'pie',
            radius: ['42%', '50%'],
            hoverAnimation: false,
            color: [
              '#c487ee',
              '#deb140',
              '#49dff0',
              '#034079',
              '#6f81da',
              '#00ffb4'
            ],
            label: {
              normal: {
                formatter: function(params, ticket, callback) {
                  let total = 0 //考生总数量
                  let percent = 0 //考生占比
                  echartData.forEach(function(value, index, array) {
                    total += value.value
                  })
                  percent = ((params.value / total) * 100).toFixed(1)
                  return (
                    '{white|' +
                    params.name +
                    '}\n{hr|}\n{yellow|' +
                    params.value +
                    '}\n{blue|' +
                    percent +
                    '%}'
                  )
                },
                rich: rich
              }
            },
            labelLine: {
              normal: {
                length: 55 * scale,
                length2: 0,
                lineStyle: {
                  color: '#0b5263'
                }
              }
            },
            data: echartData
          }
        ]
      }
      //画图
      myChart.setOption(option)
    },
    // 绘制图表4
    initData4() {
      //初始化canvas节点
      let myChart = this.$echarts.init(document.getElementById('example4'))
      let option = {
        backgroundColor: '#142468',
        series: [
          {
            type: 'pie',
            zlevel: 1,
            silent: true,
            radius: ['98%', '97%'],
            hoverAnimation: false,
            color: 'rgba(88,142,197,0.5)',
            // animation:false,    //charts3 no
            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [1]
          },
          {
            type: 'pie',
            zlevel: 2,
            silent: true,
            radius: ['90%', '91%'],
            startAngle: 50,
            hoverAnimation: false,
            // animation:false,    //charts3 no
            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: _pie2()
          },
          {
            type: 'pie',
            zlevel: 3,
            silent: true,
            radius: ['88%', '87%'],
            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: _pie2()
          },
          {
            type: 'pie',
            zlevel: 4,
            silent: true,
            radius: ['84%', '83%'],
            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: _pie3()
          },
          {
            type: 'pie',
            zlevel: 5,
            silent: true,
            radius: ['80%', '78%'],
            color: ['#fc8d89', '#46d3f3', 'rgba(203,203,203,.2)'],
            startAngle: 50,
            hoverAnimation: false,
            // animation:false,    //charts3 no
            label: {
              normal: {
                show: false
              }
            },
            data: [50, 20, 40]
          },
          {
            name: '',
            type: 'gauge',
            splitNumber: 30, //刻度数量
            min: 0,
            max: 100,
            radius: '73%', //图表尺寸
            center: ['50%', '50%'],
            startAngle: 90,
            endAngle: -269.9999,
            axisLine: {
              show: false,
              lineStyle: {
                width: 0,
                shadowBlur: 0,
                color: [[1, '#0dc2fe']]
              }
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: 'auto',
                width: 2
              },
              length: 20,
              splitNumber: 5
            },
            splitLine: {
              show: true,
              length: 32,
              lineStyle: {
                color: 'auto'
              }
            },
            axisLabel: {
              show: false
            },
            pointer: {
              //仪表盘指针
              show: 0
            },
            detail: {
              show: 0
            }
          },
          {
            name: '统计',
            type: 'gauge',
            splitNumber: 30, //刻度数量
            min: 0,
            max: 100,
            radius: '68%', //图表尺寸
            center: ['50%', '50%'],
            startAngle: 90,
            endAngle: -269.9999,
            axisLine: {
              show: true,
              lineStyle: {
                width: 0,
                shadowBlur: 0,
                color: [
                  [0, '#0dc2fe'],
                  [1, '#0dc2fe']
                ]
              }
            },
            axisTick: {
              show: true,
              lineStyle: {
                color: '#0dc2fe',
                width: 2
              },
              length: 20,
              splitNumber: 5
            },
            splitLine: {
              show: true,
              length: 20,
              lineStyle: {
                color: '#0dc2fe'
              }
            },
            axisLabel: {
              show: false
            },
            pointer: {
              //仪表盘指针
              show: 0
            },
            detail: {
              borderColor: '#fff',
              shadowColor: '#fff', //默认透明
              shadowBlur: 2,
              offsetCenter: [0, '0%'], // x, y，单位px
              textStyle: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: '#fff',
                fontSize: 30
              },
              formatter: '{value}'
            },
            data: [
              {
                name: '',
                value: 14
              }
            ]
          },
          {
            type: 'pie',
            zlevel: 20,
            silent: true,
            radius: ['60%', '59%'],
            hoverAnimation: false,
            color: '#2dc0c9',
            // animation:false,
            data: [1],
            labelLine: {
              normal: {
                show: false
              }
            }
          },
          {
            name: '中间环形图',
            type: 'pie',
            radius: ['35%', '55%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            itemStyle: {
              normal: {
                color: '#80ADD2',
                borderColor: '#3D4268'
              }
            },
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [25, 25, 25, 25, 25, 25]
          }
        ]
      }

      function _pie1() {
        let dataArr = []
        for (var i = 0; i < 8; i++) {
          dataArr.push({
            name: (i + 1).toString(),
            value: 20,
            itemStyle: {
              normal: {
                color: 'rgba(88,142,197,0.4)',
                borderWidth: 0,
                borderColor: 'rgba(0,0,0,0)'
              }
            }
          })
        }
        return dataArr
      }

      function _pie2() {
        let dataArr = []
        for (var i = 0; i < 8; i++) {
          if (i % 2 === 0) {
            dataArr.push({
              name: (i + 1).toString(),
              value: 25,
              itemStyle: {
                normal: {
                  color: 'rgba(88,142,197,0.5)',
                  borderWidth: 0,
                  borderColor: 'rgba(0,0,0,0)'
                }
              }
            })
          } else {
            dataArr.push({
              name: (i + 1).toString(),
              value: 20,
              itemStyle: {
                normal: {
                  color: 'rgba(0,0,0,0)',
                  borderWidth: 0,
                  borderColor: 'rgba(0,0,0,0)'
                }
              }
            })
          }
        }
        return dataArr
      }

      function _pie3() {
        let dataArr = []
        for (var i = 0; i < 100; i++) {
          if (i % 2 === 0) {
            dataArr.push({
              name: (i + 1).toString(),
              value: 25,
              itemStyle: {
                normal: {
                  color: 'rgb(126,190,255)',
                  borderWidth: 0,
                  borderColor: 'rgba(0,0,0,0)'
                }
              }
            })
          } else {
            dataArr.push({
              name: (i + 1).toString(),
              value: 20,
              itemStyle: {
                normal: {
                  color: 'rgba(0,0,0,0)',
                  borderWidth: 0,
                  borderColor: 'rgba(0,0,0,0)'
                }
              }
            })
          }
        }
        return dataArr
      }

      function _pieData(data) {
        let _data = data
        let dataArr = []
        for (var i = 0; i < 5; i++) {
          if (i === 2) {
            let dt = data[0].unit ? 25 : Number(data[0].value)
            dataArr.push({
              name: (i + 1).toString(),
              value: dt,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [
                    {
                      offset: 0,
                      color: 'rgb(147,187,216)'
                    },
                    {
                      offset: 1,
                      color: '#588ec5'
                    }
                  ]),
                  borderWidth: 0,
                  borderColor: 'rgba(0,0,0,0.4)'
                }
              }
            })
          } else {
            let dta = data[0].unit ? 25 : (1 - Number(data[0].value)) / 4
            dataArr.push({
              name: (i + 1).toString(),
              value: dta,
              itemStyle: {
                normal: {
                  color: 'rgba(0,0,0,0)',
                  borderWidth: 0,
                  borderColor: 'rgba(0,0,0,0)'
                }
              }
            })
          }
        }
        //console.log(dataArr)
        return dataArr
      }
      //画图
      myChart.setOption(option)
    }
  },
  watch: {},
  created() {}
}
</script>
<style scoped>
.content {
  padding: 10px;
  width: 500px;
  height: 500px;
}
</style>
