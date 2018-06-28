<template>
  <div id="applyLeaveDetail">
      <h3 class="formTitle clearfix">
          <span class="formTitle_l">
              请假申请查看
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
            <Col span="4"><p class="info">{{leaveData.id}}</p></Col>
            <Col span="4"><p class="infoName">申请人姓名</p></Col>
            <Col span="4"><p class="info">{{leaveData.name}}</p></Col>
            <Col span="4"><p class="infoName">申请日期</p></Col>
            <Col span="4"><p class="info">{{leaveData.gmtCreate}}</p></Col>
        </Row> 
        <Row type="flex" style="border-bottom:1px solid #ccc">
            <Col span="4"><p class="infoName">部门</p></Col>
            <Col span="4"><p class="info">{{leaveData.departmentName}}</p></Col>
            <Col span="4"><p class="infoName">分部</p></Col>
            <Col span="4"><p class="info">{{leaveData.manageName}}</p></Col>
            <Col span="4"><p class="infoName">岗位</p></Col>
            <Col span="4"><p class="info">{{leaveData.positionName}}</p></Col>
        </Row>
         <Row type="flex" style="border-bottom:1px solid #ccc">
            <Col span="4"><p class="infoName">职级</p></Col>
            <Col span="4"><p class="info">{{leaveData.grade}}</p></Col>
            <Col span="4"><p class="infoName">入职时间</p></Col>
            <Col span="4"><p class="info">{{leaveData.inductionDate}}</p></Col>
            <Col span="4"><p class="infoName">转正日期</p></Col>
            <Col span="4"><p class="info">{{leaveData.probationEndDate}}</p></Col>
        </Row>
        <Row type="flex" style="border-bottom:1px solid #ccc">
            <Col span="4"><p class="infoName">请假事由</p></Col>
            <Col span="4"><p class="info">{{leaveData.type}}</p>
            </Col>
            <Col span="4"><p class="infoName">请假时间（从）</p></Col>
            <Col span="4"><p class="info">{{leaveData.dateBegin}}</p></Col>
            <Col span="4"><p class="infoName">请假时间（至）</p></Col>
            <Col span="4"><p class="info">{{leaveData.dateEnd}}</p></Col>
        </Row>
        <Row type="flex" style="border-bottom:1px solid #ccc">
            <Col span="4"><p class="infoName">假期尚余</p></Col>
            <Col span="4"><p class="info">{{leaveData.id}}</p></Col>
            <Col span="4"><p class="infoName">本次请假</p></Col>
            <Col span="4"><p class="info">{{leaveData.duration}}</p></Col>
            <Col span="4"><p class="infoName">假期联系电话</p></Col>
            <Col span="4"><p class="info">{{leaveData.mobileNo}}</p></Col>
        </Row>
        <Row type="flex" style="border-bottom:1px solid #ccc">
            <Col span="4"><p class="infoName">假期联系地址</p></Col>
            <Col span="20"><p class="info" style="text-align:left;text-indent:2em;">{{leaveData.address}}</p></Col>
        </Row>
         <Row type="flex">
            <Col span="4"><p class="infoName">请假原因</p></Col>
            <Col span="20"><p class="info" style="text-align:left;text-indent:2em;">{{leaveData.cause}}</p></Col>
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
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
import Cookies from 'js-cookie';
export default {
  data() {
    return {
      leaveData:{
      "address": "",
		"applicantNo": "",
		"cause": "",
		"createBy": "",
		"dateBegin": "",
		"dateEnd": "",
		"departmentName": "",
		"divisionName": "",
		"duration": "",
		"gmtCreate": "",
		"gmtModified": "",
		"grade": "",
		"id": "",
		"inductionDate": "",
		"lastModifiedBy": "",
		"mobileNo": "",
		"name": "",
		"positionName": "",
		"probationEndDate": "",
		"state": "",
		"steps": [{
			"action": "",
			"assigneeNo": "",
			"executionId": "",
			"id": "",
			"stepSeq": "",
			"taskName": ""
		}],
		"type": ""
	},
    };
  },
  created(){
    const leaveId = Cookies.get('leaveId')
    const that = this;
    axios.post('/api/hotelhr/time/leave/manage/'+leaveId+'/show.json')
      .then(function(response){
        const data = response.data.result;
        that.leaveData = data;
      })
  },
  methods: {
    toBack() {
      this.$router.back(-1);
    }
  }
};
</script>
