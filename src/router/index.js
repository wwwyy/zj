import Vue from 'vue'
import Router from 'vue-router'
import timeMagt from '@/components/timeMagt'
import attendance from '@/views/timeMagt/attendance'
import classAttendance from '@/views/timeMagt/classAttendance'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/timeMagt',
      name: 'timeMagt',
      component: timeMagt,
      redirect: '/timeMagt/attendance',
      children: [
        {
          path:'attendance',
          name: 'attendance',
          component: attendance
        },
        {
          path:'classAttendance',
          name: 'classAttendance',
          component: classAttendance
        }
      ]
    }
  ]
})
