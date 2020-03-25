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
    }
  ]
})
