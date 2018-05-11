<template>
  <div id="approvalDetails">
      <h3 class="formTitle clearfix">
          <span class="formTitle_l">
              请假申请审批
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
            <Col span="4"><p class="info">年假</p>
            </Col>
            <Col span="4"><p class="infoName">请假时间（从）</p></Col>
            <Col span="4"><p class="info">2018/01/10</p></Col>
            <Col span="4"><p class="infoName">请假时间（至）</p></Col>
            <Col span="4"><p class="info">2018/01/14</p></Col>
        </Row>
        <Row type="flex" style="border-bottom:1px solid #ccc">
            <Col span="4"><p class="infoName">假期尚余</p></Col>
            <Col span="4"><p class="info">10天</p></Col>
            <Col span="4"><p class="infoName">本次请假</p></Col>
            <Col span="4"><p class="info">0天</p></Col>
            <Col span="4"><p class="infoName">假期联系电话</p></Col>
            <Col span="4"><p class="info">13884965555</p></Col>
        </Row>
        <Row type="flex" style="border-bottom:1px solid #ccc">
            <Col span="4"><p class="infoName">假期尚余</p></Col>
            <Col span="20"><p class="info" style="text-align:left;text-indent:2em;">上海市徐汇区苏州路131号</p></Col>
        </Row>
         <Row type="flex">
            <Col span="4"><p class="infoName">假期尚余</p></Col>
            <Col span="20"><p class="info" style="text-align:left;text-indent:2em;">旅游</p></Col>
        </Row>
      </div>
      <div class="steps">
        <Steps :current="1" direction="horizontal">
          <Step title="已完成" content="这里是该步骤的描述信息" status="wait"></Step>
          <Step title="进行中" content="这里是该步骤的描述信息" status="process"></Step>
          <Step title="待进行" content="这里是该步骤的描述信息" status="finish"></Step>
          <Step title="待进行" content="这里是该步骤的描述信息" status="error"></Step>
      </Steps>
      </div>
      <div class="approvalBtns" style="margin-top:30px;">
         <Button type="primary" icon="checkmark-round" style="width:80px;margin-right:60px;">
           通 过
          </Button>
          <Button style="width:80px;margin-left:60px;">
           驳 回
          </Button>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumb: "",
      vacationAddress: "",
      leaveReasonText: "",
      leaveReasonsType: "",
      leaveReasons: [
        {
          value: "年假",
          label: "年假"
        },
        {
          value: "探亲假",
          label: "探亲假"
        },
        {
          value: "婚假",
          label: "婚假"
        },
        {
          value: "预产假",
          label: "预产假"
        },
        {
          value: "病假",
          label: "病假"
        },
        {
          value: "工伤假",
          label: "工伤假"
        },
        {
          value: "计划生育假",
          label: "计划生育假"
        },
        {
          value: "无薪事假",
          label: "无薪事假"
        },
        {
          value: "欠休假",
          label: "欠休假"
        },
        {
          value: "其他",
          label: "其他"
        }
      ]
    };
  },
  methods: {
    toBack() {
      this.$router.back(-1);
    }
  }
};
</script>
