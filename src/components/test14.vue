<!--
 * @description:福建省下钻地图
 * @author: bin.wang
 * @Date: 2020-04-24 16:28:45
 * @LastEditors: wangbin
 * @LastEditTime: 2020-07-31 18:20:17
 * @email: 18695686631@163.com
 -->

<template>
  <div id="fjMap" ref="fjMap" class="fj-map"> </div>
</template>

<script>
import { cityMap, quyMap } from './map.js';
import echarts from 'echarts';
import 'echarts/map/js/province/fujian';
import 'echarts-gl';
import fujian from './map/map/fujian.json';
export default {
  components: {},
  data() {
    return {
      chart: '',
    };
  },
  mounted() {
    this.chart = echarts.init(this.$refs.fjMap);
    this.registerMap();
  },
  methods: {
    async registerMap() {
      echarts.extendsMap = function (id, opt) {
        // 实例
        let chart = this.init(document.getElementById(id));
        // 配置散点
        let geoCoordMap = {
          三明市: [117.642193934, 26.2708352794],
          南平市: [118.181882949, 26.6436264742],
          厦门市: [118.103886046, 24.4892306125],
          宁德市: [119.54208215, 26.6565274192],
          泉州市: [118.600362343, 24.901652384],
          漳州市: [117.676204679, 24.5170647798],
          福州市: [119.330221107, 26.0471254966],
          莆田市: [119.077730964, 25.4484501367],
          龙岩市: [117.017996739, 25.0786854335]
        };
        // 配置散点颜色
        let levelColorMap = {
          '1': 'rgba(241, 109, 115, .8)',
          '2': 'rgba(255, 235, 59, .7)',
          '3': 'rgba(41,237,190, .6)'
        };
        // 层级索引
        let name = [opt.mapName];
        let idx = 0;
        // 标题位置参数
        let pos = {
          leftPlus: 0,
          leftCur: 55,
          left: -2,
          top: 100
        };
        let line = [
          [0, 0],
          [8, 11],
          [0, 22]
        ];
        // style
        let style = {
          font: '18px "Microsoft YaHei", sans-serif',
          textColor: '#eee',
          lineColor: 'rgba(147, 235, 248, .8)'
        };
        let handleEvents = {
          /**
           * i 实例对象
           * o option
           * n 地图名
           **/
          resetOption: function (i, o, n, t) {
            let breadcrumb = this.createBreadcrumb(n, t);

            let j = name.indexOf(n);
            let l = o.graphic.length;
            if (j < 0) {
              o.graphic.push(breadcrumb);
              o.graphic[0].children[0].shape.x2 = 145;
              o.graphic[0].children[1].shape.x2 = 145;
              if (o.graphic.length > 2) {
                for (let x = 0; x < opt.data.length; x++) {
                  if (n === opt.data[x].name + '市') {
                    o.series[0].data = handleEvents.initSeriesData([
                      opt.data[x]
                    ]);
                    break;
                  } else o.series[0].data = [];
                }
              }
              name.push(n);
              idx++;
            } else {
              o.graphic.splice(j + 2, l);
              if (o.graphic.length <= 2) {
                o.graphic[0].children[0].shape.x2 = 60;
                o.graphic[0].children[1].shape.x2 = 60;
                o.series[0].data = handleEvents.initSeriesData(opt.data);
              }
              name.splice(j + 1, l);
              idx = j;
              pos.leftCur -= pos.leftPlus * (l - j - 1);
            }

            o.geo.map = n;
            o.geo.zoom = 0.4;
            i.clear();
            i.setOption(o);
            this.zoomAnimation();
            opt.callback(n, o, i);
          },

          /**
           * name 地图名
           **/
          createBreadcrumb: function (name, t) {
            if (t) {
              return {
                type: 'group',
                id: name,
                left: pos.leftCur + pos.leftPlus,
                top: pos.top + 3,
                children: []
              };
            } else {
              let cityToPinyin = {
                福州市: 'fuzhou',
                厦门市: 'xiamen',
                泉州市: 'quanzhou',
                漳州市: 'zhangzhou',
                莆田市: 'putian',
                龙岩市: 'longyan',
                三明市: 'sanming',
                南平市: 'nanping',
                宁德市: 'ningde'
              };
              let breadcrumb = {
                type: 'group',
                id: name,
                left: pos.leftCur + pos.leftPlus,
                top: pos.top + 3,
                children: [
                  {
                    type: 'polyline',
                    left: -90,
                    top: -5,
                    shape: {
                      points: line
                    },
                    style: {
                      stroke: '#fff',
                      key: name
                      // lineWidth: 2,
                    },
                    onclick: function () {
                      let name = this.style.key;
                      handleEvents.resetOption(chart, option, name);
                    }
                  },
                  {
                    type: 'text',
                    left: -68,
                    top: 'middle',
                    style: {
                      text: name,
                      textAlign: 'center',
                      fill: style.textColor,
                      font: style.font
                    },
                    onclick: function () {
                      let name = this.style.text;
                      handleEvents.resetOption(chart, option, name);
                    }
                  },
                  {
                    type: 'text',
                    left: -68,
                    top: 10,
                    style: {
                      name: name,
                      text: cityToPinyin[name]
                        ? cityToPinyin[name].toUpperCase()
                        : '',
                      textAlign: 'center',
                      fill: style.textColor,
                      font: '12px "Microsoft YaHei", sans-serif'
                    },
                    onclick: function () {
                      // console.log(this.style);
                      let name = this.style.name;
                      handleEvents.resetOption(chart, option, name);
                    }
                  }
                ]
              };

              pos.leftCur += pos.leftPlus;

              return breadcrumb;
            }
          },

          // 设置effectscatter 散点配置
          initSeriesData: function (data) {
            let temp = [];
            for (let i = 0; i < data.length; i++) {
              let geoCoord = geoCoordMap[data[i].name];
              if (geoCoord) {
                temp.push({
                  name: data[i].name,
                  value: geoCoord.concat(data[i].value, data[i].level)
                });
              }
            }
            return temp;
          },

          //  层级
          zoomAnimation: function () {
            let count = null;
            let zoom = function (per) {
              if (!count) count = per;
              count = count + per;
              // console.log(per,count);
              chart.setOption({
                geo: {
                  zoom: count
                }
              });
              if (count < 1) {
                window.requestAnimationFrame(function () {
                  zoom(0.2);
                });
              }
            };
            window.requestAnimationFrame(function () {
              zoom(0.2);
            });
          }
        };
        let option = {
          // backgroundColor: opt.bgColor,
          graphic: [
            {
              type: 'group',
              left: pos.left,
              top: pos.top - 4,
              children: [
                {
                  type: 'line',
                  left: 0,
                  top: -20,
                  shape: {
                    x1: 0,
                    y1: 0,
                    x2: 60,
                    y2: 0
                  },
                  style: {
                    stroke: style.lineColor
                  }
                },
                {
                  type: 'line',
                  left: 0,
                  top: 20,
                  shape: {
                    x1: 0,
                    y1: 0,
                    x2: 60,
                    y2: 0
                  },
                  style: {
                    stroke: style.lineColor
                  }
                }
              ]
            },
            {
              id: name[idx],
              type: 'group',
              left: pos.left + 2,
              top: pos.top,
              children: [
                {
                  type: 'polyline',
                  left: 90,
                  top: -12,
                  shape: {
                    points: line
                  },
                  style: {
                    stroke: 'transparent',
                    key: name[0]
                  },
                  onclick: function () {
                    let name = this.style.key;
                    handleEvents.resetOption(chart, option, name);
                  }
                },
                {
                  type: 'text',
                  left: 0,
                  top: 'middle',
                  style: {
                    text: name[0] === '福建' ? '福建省' : name[0],
                    textAlign: 'center',
                    fill: style.textColor,
                    font: style.font
                  },
                  onclick: function () {
                    handleEvents.resetOption(chart, option, '福建');
                  }
                },
                {
                  type: 'text',
                  left: 6,
                  top: 10,
                  style: {
                    text: 'FUJIAN',
                    textAlign: 'center',
                    fill: style.textColor,
                    font: '12px "Microsoft YaHei", sans-serif'
                  },
                  onclick: function () {
                    handleEvents.resetOption(chart, option, '福建');
                  }
                }
              ]
            }
          ],
          geo: {
            map: opt.mapName,
            // roam: true,
            zoom: 1,
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#fff'
                }
              },
              emphasis: {
                textStyle: {
                  color: '#fff'
                }
              }
            },
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
            },
            regions: []
          },
          series: [
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              // symbol: 'diamond',
              showEffectOn: 'render',
              rippleEffect: {
                period: 10,
                scale: 6,
                brushType: 'fill'
              },
              hoverAnimation: true,
              itemStyle: {
                normal: {
                  color: function (params) {
                    return levelColorMap[params.value[3]];
                  },
                  shadowBlur: 20,
                  shadowColor: '#333'
                }
              },
              data: handleEvents.initSeriesData(opt.data)
            }
          ]
        };
        // console.log(chart);
        chart.setOption(option);
        // 添加事件 点击穿透
        chart.on('click', function (params) {
          let _self = this;
          if (opt.goDown && params.name !== name[idx]) {
            if (cityMap[params.name]) {
              let url = cityMap[params.name];
              echarts.registerMap(params.name, url);
              handleEvents.resetOption(_self, option, params.name);
            }
            if (quyMap[params.name]) {
              let url = quyMap[params.name];
              echarts.registerMap(params.name, url);
              handleEvents.resetOption(_self, option, params.name, true);
            }
          }
        });
         //  增加外部可以调用的方法
        chart.setMap = function (mapName) {
          if (cityMap[mapName]) {
            let _self = this;
            let url = cityMap[mapName];
            echarts.registerMap(mapName, url);
            handleEvents.resetOption(_self, option, mapName);
          }
        };
        return chart;
      };

      const cityData = fujian
      if (cityData) {
        // 绘制地图
        echarts.registerMap('fujian', cityData);
        // 注册地图
      }
      let _that = this;
      echarts.extendsMap('fjMap', {
        mapName: '福建', // 地图名
        goDown: true, // 是否下钻
        // 下钻回调
        callback: function (name, option, instance) {
          _that.$emit('mapClick', name);
        },
        // 数据展示
        data: [
          {
            name: '福州市',
            value: 20,
            level: 3
          },
          {
            name: '三明市',
            value: 16,
            level: 3
          }
        ]
      });
    },
  }
};
</script>
<style scoped>
.fj-map{
  padding: 20px;
  height: 500px;
  background: rgba(1, 39, 78, 0.75);
}
</style>
