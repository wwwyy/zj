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

//cateringMagt 餐饮统计
import cateringMagt from '@/components/cateringMagt'
import mealStatistics from '@/views/cateringMagt/mealStatistics'

//trainingMagt 员工培训
import trainingMagt from '@/components/trainingMagt'
import trainingStatistics from '@/views/trainingMagt/trainingStatistics'
import trainingRecords from '@/views/trainingMagt/trainingRecords'

// myWork  我的工作
import myWork from '@/components/myWork'
import applied from '@/views/myWork/applied'
import appliedLeaveDetail from '@/views/myWork/appliedLeaveDetail'
import approvalPending from '@/views/myWork/approvalPending'
import approvalDetails from '@/views/myWork/approvalDetails'
import approved from '@/views/myWork/approved'
import myScheduling from '@/views/myWork/myScheduling'

// orgPlanning 组织规划
import orgPlanning from '@/components/orgPlanning'
import depPlanning from '@/views/orgPlanning/depPlanning'
import postPlanning from '@/views/orgPlanning/postPlanning'
import organizationChart from '@/views/orgPlanning/organizationChart'

// 排班日历插件
import fullCalendar from 'vue-fullcalendar'

// login 登陆页面
import login from '@/components/login'

Vue.component('full-calendar', fullCalendar)

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      component: myWork,
      redirect: '/myWork/applied',
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/myWork',
      name: 'myWork',
      component: myWork,
      redirect: '/myWork/applied',
      children: [
        {
          path:'applied',
          name: 'applied',
          component: applied
        },
        {
          path:'appliedLeaveDetail',
          name: 'appliedLeaveDetail',
          component: appliedLeaveDetail
        },
        {
          path:'approvalPending',
          name: 'approvalPending',
          component: approvalPending
        },
        {
          path:'approvalDetails',
          name: 'approvalDetails',
          component: approvalDetails
        },
        {
          path:'approved',
          name: 'approved',
          component: approved
        },
        {
          path:'myScheduling',
          name: 'myScheduling',
          component: myScheduling
        }
      ]
    },
    {
      path: '/orgPlanning',
      name: 'orgPlanning',
      component: orgPlanning,
      redirect: '/orgPlanning/depPlanning',
      children: [
        {
          path:'depPlanning',
          name: 'depPlanning',
          component: depPlanning
        },
        {
          path:'postPlanning',
          name: 'postPlanning',
          component: postPlanning
        },
        {
          path:'organizationChart',
          name: 'organizationChart',
          component: organizationChart
        }
      ]
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
    },
    {
      path: '/trainingMagt',
      name: 'trainingMagt',
      component: trainingMagt,
      redirect: '/trainingMagt/trainingStatistics',
      children: [
        {
          path:'trainingStatistics',
          name: 'trainingStatistics',
          component: trainingStatistics,
          meta: {
            title: '员工培训'
          }
        },
        {
          path:'trainingRecords',
          name: 'trainingRecords',
          component: trainingRecords,
          meta: {
            title: '查看员工培训记录'
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