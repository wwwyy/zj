import Vue from 'vue'
import Router from 'vue-router'
import timeMagt from '@/components/timeMagt'
import remunerationMagt from '@/components/remunerationMagt'
import attendance from '@/views/timeMagt/attendance'
import applyForLeave from '@/views/timeMagt/applyForLeave'
import classAttendance from '@/views/timeMagt/classAttendance'
import applyLeaveDetail from '@/views/timeMagt/applyLeaveDetail'
import applyLeaveForm from '@/views/timeMagt/applyLeaveForm'
import leaveManagement from '@/views/timeMagt/leaveManagement'
import overtimeApl from '@/views/timeMagt/overtimeApl'
import salaryGeneration from '@/views/remunerationMagt/salaryGeneration'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      component: timeMagt,
      redirect: '/timeMagt/attendance',
    },
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
        },
        {
          path:'applyForLeave',
          name: 'applyForLeave',
          component: applyForLeave
        },
        {
          path: 'applyLeaveDetail',
          name: 'applyLeaveDetail',
          component: applyLeaveDetail
        },
        {
          path: 'applyLeaveForm',
          name: 'applyLeaveForm',
          component: applyLeaveForm
        },
        {
          path: 'leaveManagement',
          name: 'leaveManagement',
          component: leaveManagement
        },
        {
          path: 'overtimeApl',
          name: 'overtimeApl',
          component: overtimeApl
        }
      ]
    },
    {
      path: '/remunerationMagt',
      name: 'remunerationMagt',
      component: remunerationMagt,
      redirect: '/remunerationMagt/salaryGeneration',
      children: [
        {
          path:'salaryGeneration',
          name: 'salaryGeneration',
          component: salaryGeneration
        },
        // {
        //   path:'classAttendance',
        //   name: 'classAttendance',
        //   component: classAttendance
        // }
      ]
    }
  ]
})
