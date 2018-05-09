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
import overtimeManagement from '@/views/timeMagt/overtimeManagement'
import overtimeApl from '@/views/timeMagt/overtimeApl'
import overtimeAplForm from '@/views/timeMagt/overtimeAplForm'
import overtimeDetail from '@/views/timeMagt/overtimeDetail'
import classDefine from '@/views/timeMagt/classDefine'
import classConfig from '@/views/timeMagt/classConfig'
import salaryGeneration from '@/views/remunerationMagt/salaryGeneration'
import salaryAdjust from '@/views/remunerationMagt/salaryAdjust'

//cateringMagt
import cateringMagt from '@/components/cateringMagt'
import mealStatistics from '@/views/cateringMagt/mealStatistics'


Vue.use(Router)

const router = new Router({
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
        },
        {
          path: 'overtimeAplForm',
          name: 'overtimeAplForm',
          component: overtimeAplForm
        },
        {
          path: 'overtimeManagement',
          name: 'overtimeManagement',
          component: overtimeManagement
        },
        {
          path: 'overtimeDetail',
          name: 'overtimeDetail',
          component: overtimeDetail,
          meta: {
            title: '加班申请查看'
          }
        },
        {
          path: 'classDefine',
          name: 'classDefine',
          component: classDefine,
          meta: {
            title: '排班定义'
          }
        },
        {
          path: 'classConfig',
          name: 'classConfig',
          component: classConfig,
          meta: {
            title: '排班定义'
          }
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
        {
          path:'salaryAdjust',
          name: 'salaryAdjust',
          component: salaryAdjust
        }
      ]
    },
    {
      path: '/cateringMagt',
      name: 'cateringMagt',
      component: cateringMagt,
      redirect: '/cateringMagt/mealStatistics',
      children: [
        {
          path:'mealStatistics',
          name: 'mealStatistics',
          component: mealStatistics,
          meta: {
            title: '用餐统计'
          }
        }
      ]
    }
  ],
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {//如果设置标题，拦截后设置标题
    document.title = to.meta.title
  }
  next()
})
export default router