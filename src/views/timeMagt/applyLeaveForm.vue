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
            <Col span="4"><p class="info">{{leaveData.no}}</p></Col>
            <Col span="4"><p class="infoName">申请人姓名</p></Col>
            <Col span="4"><p class="info">{{leaveData.name}}</p></Col>
            <Col span="4"><p class="infoName">申请日期</p></Col>
            <Col span="4"><p class="info">{{leaveData.contractEndDate}}</p></Col>
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
            <Col span="4">
                <p class="info">
                    <Select v-model="type" style="width:150px">
                        <Option v-for="item in leaveReasons" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </p>
            </Col>
            <Col span="4"><p class="infoName">请假时间（从）</p></Col>
            <Col span="4"><p class="info"><DatePicker type="date" placeholder="请选择日期" format="yyyy-MM-dd HH:mm:ss" @on-change="dateMod1"  style="width: 150px" v-model="dateBegin"></DatePicker></p></Col>
            <Col span="4"><p class="infoName">请假时间（至）</p></Col>
            <Col span="4"><p class="info"><DatePicker type="date" placeholder="请选择日期" format="yyyy-MM-dd HH:mm:ss" @on-change="dateMod2" v-model="dateEnd" style="width: 150px"></DatePicker></p></Col>
        </Row>
        <Row type="flex" style="border-bottom:1px solid #ccc">
            <Col span="4"><p class="infoName">假期尚余</p></Col>
            <Col span="4"><p class="info">{{leaveData.no}}</p></Col>
            <Col span="4"><p class="infoName">本次请假</p></Col>
            <Col span="4"><p class="info">{{leaveData.no}}</p></Col>
            <Col span="4"><p class="infoName">假期联系电话</p></Col>
            <Col span="4"><p class="info"><Input v-model="mobileNo" placeholder="请输入手机号码" style="width: 150px"></Input></p></Col>
        </Row>
        <Row type="flex" style="border-bottom:1px solid #ccc">
            <Col span="4"><p class="infoName">假期联系地址</p></Col>
            <Col span="20"><p class="info"><Input v-model="address" placeholder="请输入联系地址" style="width: 900px"></Input></p></Col>
        </Row>
         <Row type="flex">
            <Col span="4"><p class="infoName">请假原因</p></Col>
            <Col span="20"><p class="info"><Input v-model="cause" placeholder="请输入请假原因" style="width: 900px"></Input></p></Col>
        </Row>
      </div>
      <Row type="flex" justify="center" class="code-row-bg" style="margin-top:30px;">
        <Col span="6"></Col>
        <Col span="6">
            <Button type="primary" icon="checkmark-round" style="width:120px" @click="submitLeave">提 交 申 请</Button>
        </Col>
        <Col span="6">
            <Button style="width:120px;" @click="toBack">取&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;消</Button>
        </Col>
        <Col span="6"></Col>
    </Row>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
    data () {
            return {
                leaveData:{
                    "attendanceState": "",
                    "contractEndDate": "",
                    "departmentId": "",
                    "departmentName": "",
                    "englishName": "",
                    "grade": "",
                    "inductionDate": "",
                    "information": "",
                    "lastWorkingDate": "",
                    "manageName": "",
                    "manageNo": "",
                    "name": "",
                    "no": "",
                    "positionId": "",
                    "positionName": "",
                    "probationEndDate": "",
                    "salary": "",
                    "sex": "",
                    "state": "",
                    "storeAge": ""
                },
                type:'',
                address:'',
                dateBegin: '',
                dateEnd: '',
                mobileNo: '',
                cause: '1',
                leaveReasonsType: '',
                leaveReasons: [
                    {
                        value: '1',
                        label: '年假'
                    },
                    {
                        value: '2',
                        label: '探亲假'
                    },
                    {
                        value: '3',
                        label: '婚假'
                    },
                    {
                        value: '4',
                        label: '预产假'
                    },
                    {
                        value: '5',
                        label: '病假'
                    },
                    {
                        value: '6',
                        label: '工伤假'
                    },
                    {
                        value: '7',
                        label: '计划生育假'
                    },
                    {
                        value: '8',
                        label: '无薪事假'
                    },
                    {
                        value: '9',
                        label: '欠休假'
                    },
                    {
                        value: '10',
                        label: '其他'
                    }
                ],
            }
        },
        created(){
            const that = this;
            axios.post('/api/hotelhr/time/leave/request/show/add.json')
                .then(function(response){
                    const data = response.data.result;
                    that.leaveData = data;
                })
        },
        methods: {
            submitLeave(){
                const that = this;
                axios.post('/api/hotelhr/time/leave/request/add.json',
                    {
                    address: that.address,
                    cause: that.cause,
                    dateBegin: that.dateBegin,
                    dateEnd: that.dateEnd,
                    mobileNo: that.mobileNo,
                    type: that.type
                }
                )
                .then(function(response){
                    if(response.data.success){
                        that.$Message.success('提交成功');
                        setTimeout(() => {
                            that.$router.back(-1)
                        }, 1500);
                    }
                })
            },
            toBack() {
               this.$router.back(-1)
            },
            dateMod1(date1){
                this.dateBegin = date1;
            },
            dateMod2(date2){
                this.dateEnd = date2;
            },
        }
}
</script>
