<template>
  <div id="applyLeaveForm">
      <h3 class="formTitle clearfix">
          <span class="formTitle_l">
              请假申请
          </span>
          <span class="formTitle_r">
               <Button type="primary" @click="toBack">
            <Icon type="chevron-left"></Icon>
            返回
        </Button>
          </span>
      </h3>
      <div class="formLists">
          <Row type="flex" style="border-bottom:1px solid #ccc">
            <Col span="4"><p class="infoName">申请人工号</p></Col>
            <Col span="4"><p class="info">01311</p></Col>
            <Col span="4"><p class="infoName">申请人姓名</p></Col>
            <Col span="4"><p class="info">赵彦明</p></Col>
            <Col span="4"><p class="infoName">申请日期</p></Col>
            <Col span="4"><p class="info">2018/03/14</p></Col>
        </Row> 
        <Row type="flex" style="border-bottom:1px solid #ccc">
            <Col span="4"><p class="infoName">部门</p></Col>
            <Col span="4"><p class="info">信息中心</p></Col>
            <Col span="4"><p class="infoName">分部</p></Col>
            <Col span="4"><p class="info">开发组</p></Col>
            <Col span="4"><p class="infoName">岗位</p></Col>
            <Col span="4"><p class="info">开发经理</p></Col>
        </Row>
         <Row type="flex" style="border-bottom:1px solid #ccc">
            <Col span="4"><p class="infoName">职级</p></Col>
            <Col span="4"><p class="info">JB6</p></Col>
            <Col span="4"><p class="infoName">入职时间</p></Col>
            <Col span="4"><p class="info">2010/06/18</p></Col>
            <Col span="4"><p class="infoName">转正日期</p></Col>
            <Col span="4"><p class="info">2010/08/31</p></Col>
        </Row>
        <Row type="flex" style="border-bottom:1px solid #ccc">
            <Col span="4"><p class="infoName">请假事由</p></Col>
            <Col span="4">
                <p class="info">
                    <Select v-model="leaveReasonsType" style="width:150px">
                        <Option v-for="item in leaveReasons" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </p>
            </Col>
            <Col span="4"><p class="infoName">请假时间（从）</p></Col>
            <Col span="4"><p class="info"><DatePicker type="date" placeholder="请选择日期" style="width: 150px"></DatePicker></p></Col>
            <Col span="4"><p class="infoName">请假时间（至）</p></Col>
            <Col span="4"><p class="info"><DatePicker type="date" placeholder="请选择日期" style="width: 150px"></DatePicker></p></Col>
        </Row>
        <Row type="flex" style="border-bottom:1px solid #ccc">
            <Col span="4"><p class="infoName">假期尚余</p></Col>
            <Col span="4"><p class="info">10天</p></Col>
            <Col span="4"><p class="infoName">本次请假</p></Col>
            <Col span="4"><p class="info">0天</p></Col>
            <Col span="4"><p class="infoName">假期联系电话</p></Col>
            <Col span="4"><p class="info"><Input v-model="phoneNumb" placeholder="请输入手机号码" style="width: 150px"></Input></p></Col>
        </Row>
        <Row type="flex" style="border-bottom:1px solid #ccc">
            <Col span="4"><p class="infoName">假期尚余</p></Col>
            <Col span="20"><p class="info"><Input v-model="vacationAddress" placeholder="请输入联系地址" style="width: 900px"></Input></p></Col>
        </Row>
         <Row type="flex">
            <Col span="4"><p class="infoName">假期尚余</p></Col>
            <Col span="20"><p class="info"><Input v-model="leaveReasonText" placeholder="请输入请假原因" style="width: 900px"></Input></p></Col>
        </Row>
      </div>
      <Row type="flex" justify="center" class="code-row-bg" style="margin-top:30px;">
        <Col span="6"></Col>
        <Col span="6">
            <Button type="primary" icon="checkmark-round" style="width:120px">提 交 申 请</Button>
        </Col>
        <Col span="6">
            <Button style="width:120px;">取&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;消</Button>
        </Col>
        <Col span="6"></Col>
    </Row>
  </div>
</template>

<script>
export default {
    data () {
            return {
                phoneNumb: '',
                vacationAddress: '',
                leaveReasonText: '',
                leaveReasonsType: '',
                leaveReasons: [
                    {
                        value: '年假',
                        label: '年假'
                    },
                    {
                        value: '探亲假',
                        label: '探亲假'
                    },
                    {
                        value: '婚假',
                        label: '婚假'
                    },
                    {
                        value: '预产假',
                        label: '预产假'
                    },
                    {
                        value: '病假',
                        label: '病假'
                    },
                    {
                        value: '工伤假',
                        label: '工伤假'
                    },
                    {
                        value: '计划生育假',
                        label: '计划生育假'
                    },
                    {
                        value: '无薪事假',
                        label: '无薪事假'
                    },
                    {
                        value: '欠休假',
                        label: '欠休假'
                    },
                    {
                        value: '其他',
                        label: '其他'
                    }
                ],
            }
        },
        methods: {
            toBack() {
               this.$router.back(-1)
            }
        }
}
</script>
