<template>
  <div ref='test12' style="height:500px;">

  </div>
</template>

<script>
import world from 'echarts/map/js/world.js'
export default {
  components: {

  },
  data() {
    return {}
  },
  mounted() {
    this.initData()
  },
  methods: {
    // 绘制图表
     // 绘制图表1
    initData() {
      //初始化canvas节点
      let myChart = this.$echarts.init(this.$refs.test12)
let option ={
        backgroundColor: 'rgba(0,0,0,0)',//canvas的背景颜色
        // environment: './bg.png',//背景星空图
        geo3D: { //地图的具体参数
            map: 'world', //地图范围
            shading: 'lambert', //光照带来的明暗
            light: { // 光照相关的设置。在 shading 为 'color' 的时候无效。
                main: { //场景主光源的设置
                    intensity: 5,//主光源的强度
                    shadow: true,//主光源是否投射阴影
                    shadowQuality: 'high',//阴影的质量
                    alpha: 30, //主光源绕 x 轴偏离的角度
                    beta:190 //主光源绕 y 轴偏离的角度
                },
                ambient: { //全局的环境光设置。
                    intensity: 0//环境光的强度
                }
            },
            viewControl: {//用于鼠标的旋转，缩放等视角控制
                distance: 50,//默认视角距离主体的距离
                panMouseButton: 'left',//平移操作使用的鼠标按键
                rotateMouseButton: 'right',//旋转操作使用的鼠标按键
                alpha:50 // 让canvas在x轴有一定的倾斜角度
            },
            postEffect: {//为画面添加高光，景深，环境光遮蔽（SSAO），调色等效果
                enable: true, //是否开启
                SSAO: {//环境光遮蔽
                    radius: 1,//环境光遮蔽的采样半径。半径越大效果越自然
                    intensity: 1,//环境光遮蔽的强度
                    enable: true
                }
            },
            temporalSuperSampling: {//分帧超采样。在开启 postEffect 后，WebGL 默认的 MSAA 会无法使用,分帧超采样用来解决锯齿的问题
                enable: true
            },
            itemStyle: {//三维图形的视觉属性
                color:'#2355ac',
                borderWidth:1,
                borderColor:'#000'
            },
            regionHeight: 2//区域的高度
        }
    }

      myChart.setOption(option)
    },

  },
  watch: {},
  created() {}
}
</script>
