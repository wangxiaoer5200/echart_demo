import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import test2 from '@/components/test2.vue'
import test3 from '@/components/test3.vue'
import test4 from '@/components/test4.vue'
import test5 from '@/components/test5.vue'
import test6 from '@/components/test6.vue'
import test7 from '@/components/test7.vue'
import test8 from '@/components/test8.vue'
import test9 from '@/components/test9.vue'
import test10 from '@/components/test10.vue'
import test11 from '@/components/test11.vue'
import test12 from '@/components/test12.vue'
import test13 from '@/components/test13.vue'
import test14 from '@/components/test14.vue'
import test15 from '@/components/test15.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
      {
      path: '/test2',
      name: 'test2',
      component: test2
    },
    {
      path: '/test3',
      name: 'test3',
      component: test3
    },
    {
      path: '/test4',
      name: 'test4',
      component: test4
    },
    {
      path: '/test5',
      name: 'test5',
      component: test5
    },
    {
      path: '/test6',
      name: 'test6',
      component: test6
    },
    {
      path: '/test7',
      name: 'test7',
      component: test7
    },
     {
      path: '/test8',
      name: 'test8',
      component: test8
    },
     {
      path: '/test9',
      name: 'test9',
      component: test9
    },
     {
      path: '/test10',
      name: 'test10',
      component: test10
    },
    {
      path: '/test11',
      name: 'test11',
      component: test11
    },
     {
      path: '/test12',
      name: 'test12',
      component: test12
    },
    {
      path: '/test13',
      name: 'test13',
      component: test13
    },
    {
      path: '/test14',
      name: 'test14',
      component: test14
    },
     {
      path: '/test15',
      name: 'test15',
      component: test15
    }
  ]
})
