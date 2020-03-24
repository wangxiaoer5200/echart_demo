<template>
  <div>
    <div id="earth"></div>
  </div>
</template>

<script>
import $ from 'jquery'
import world from '@/img/world.jpg'
import starfield from '@/img/starfield.jpg'
// import pisa from '@/img/pisa.hdr'
export default {
  data() {
    return {}
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      let dom = document.getElementById('earth')
      let myChart = this.$echarts.init(dom)
      let option = {
        backgroundColor: '#000',
        globe: {
          baseTexture: world,
          heightTexture: world,
          displacementScale: 0.04,
          environment: starfield,
          shading: 'realistic',
          realisticMaterial: {
            roughness: 0.9
          },
          postEffect: {
            enable: true
          },
          light: {
            main: {
              intensity: 5,
              shadow: true
            },
            ambientCubemap: {
              texture: '@/img/pisa.hdr',
              diffuseIntensity: 0.2
            }
          }
        }
      }
      myChart.setOption(option, true)
    }
  },
  watch: {},
  created() {}
}
</script>

<style scoped>
</style>
