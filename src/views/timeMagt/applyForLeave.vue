<template>
  <div id="applyForLeave">
    <Form :model="formValidate" ref="formValidate" :label-width="80" inline style="text-align:left;">
        <FormItem label="请假事由" prop="type">
            <Select v-model="formValidate.type"  style="width:155px">
                <Option value="1">全部</Option>
                <Option value="2">年假</Option>
                <Option value="3">探亲假</Option>
                <Option value="4">结婚假</Option>
                <Option value="5">预产假</Option>
                <Option value="6">计划生育假</Option>
                <Option value="7">病假</Option>
                <Option value="8">工伤假</Option>
                <Option value="9">无薪事假</Option>
                <Option value="10">欠休假</Option>
                <Option value="11">其他</Option>
            </Select>
        </FormItem>
       <FormItem label="提交时间">
            <Row>
                <Col span="11">
                 <FormItem prop="submitBeginDate">
                    <DatePicker type="datetime" placeholder="请选择日期" format="yyyy-MM-dd HH:mm" v-model="formValidate.submitBeginDate"   @on-change="dateMod1"></DatePicker>
                </FormItem>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                 <FormItem prop="submitEndDate">
                    <DatePicker type="datetime" placeholder="请选择日期" format="yyyy-MM-dd HH:mm" v-model="formValidate.submitEndDate" @on-change="dateMod2"></DatePicker>
                </FormItem>
                </Col>
            </Row>
        </FormItem>
        <br>
        <FormItem label="申请状态" prop="state">
            <Select v-model="formValidate.state" style="width:155px">
                <Option value="1">全部</Option>
                <Option value="2">审批通过</Option>
                <Option value="3">审批中</Option>
                <Option value="4">审批驳回</Option>
                <Option value="5">已撤销</Option>
            </Select>
        </FormItem>
        <FormItem label="请假时间">
            <Row>
                <Col span="11">
                <FormItem prop="leaveBeginDate">
                    <DatePicker type="datetime" placeholder="请选择日期" format="yyyy-MM-dd HH:mm" v-model="formValidate.leaveBeginDate" @on-change="dateMod3"></DatePicker>
                    </FormItem>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                <FormItem prop="leaveEndDate">
                    <DatePicker type="datetime" placeholder="请选择日期" format="yyyy-MM-dd HH:mm" v-model="formValidate.leaveEndDate" @on-change="dateMod4"></DatePicker>
                    </FormItem>
                </Col>
            </Row>
        </FormItem>
     
        
        
          <FormItem>
            <Button type="primary" @click="search">查　　询</Button>
            <Button type="ghost" style="margin-left: 8px" @click="handleReset('formValidate')">清　　空</Button>
        </FormItem>
    </Form>
    <div style="text-align:left;padding:5px 0;border-top:1px solid #ccc">
        <Button type="ghost" shape="circle" @click="toApplyForm">请假申请</Button>
    </div>
     <Table :columns="historyColumns" :data="historyData" style="width:100%;"></Table>
      <Page :total="dataCount" :page-size="pageSize" show-total @on-change="changepage" style="paddingTop:24px;"></Page>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
import Cookies from 'js-cookie';
export default {
    data () {
            return {
                ajaxHistoryData:[],
                historyData: [],
                dataCount:0,
                pageSize:10,
                formValidate: {
                    input: '',
                    type: '',
                    state: '',
                    submitBeginDate: '',
                    submitEndDate: '',
                    leaveBeginDate: '',
                    leaveEndDate: '',
                },
                historyColumns: [
                    {
                        title: '工号',
                        key: 'id'
                    },
                    {
                        title: '姓名',
                        key: 'name',
                        minWidth: 100
                    },
                    {
                        title: '请假事由',
                        key: 'type',
                        minWidth: 100
                    },
                    {
                        title: '部门',
                        key: 'departmentName',
                        minWidth: 100
                    },
                    {
                        title: '职级',
                        key: 'grade',
                        minWidth: 100
                    },
                    {
                        title: '申请状态',
                        key: 'state',
                        minWidth: 100
                    },
                    {
                        title: '请假时段',
                        key: 'dateTime',
                        minWidth: 300
                    },
                    {
                        title: '时长',
                        key: 'duration'
                    },
                    {
                        title: '提交时间',
                        key: 'gmtCreate',
                        width: 150
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.check(params.index)
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            // this.show(params.index)
                                        }
                                    }
                                }, '撤销')
                            ]);
                        }
                    }
                ],
            }
        },
        created(){
            const that = this;
            axios.post('/api/hotelhr/time/leave/manage/search.json', {
                "pager": {
                    "currentPage": 1,
                    "pageSize": 10
                }
            }).then(function (response) {
                const data = response.data.result;
                data.records.forEach(element => {
                    element.dateTime = element.dateBegin +'----'+ element.dateEnd
                });
                that.historyData = data.records;
                that.currentPage = data.currentPage;
                that.dataCount = data.totalRecords;
                
              })
        },
        methods:{
            search(){
                const that = this;
                console.log(that.formValidate.submitBeginDate)
                axios.post('/api/hotelhr/time/leave/manage/search.json', {
                "pager": {
                    "currentPage": 1,
                    "pageSize": 10
                },
                "params": {
                  
                    "dateBegin": that.formValidate.leaveBeginDate,
                    "dateEnd": that.formValidate.leaveEndDate,
                   
                    "state": that.formValidate.state,
                    "type": that.formValidate.type
                },
                "submitBeginDate":that.formValidate.submitBeginDate,
                "submitBeginDate":that.formValidate.submitEndDate
            }).then(function (response) {
                const data = response.data.result;
                data.records.forEach(element => {
                    element.dateTime = element.dateBegin +'----'+ element.dateEnd
                });
                that.historyData = data.records;
                that.currentPage = data.currentPage;
                that.dataCount = data.totalRecords;
                
              })
            },
            
            changepage(index){
                // var _start = ( index - 1 ) * this.pageSize;
                // var _end = index * this.pageSize;
                // this.historyData = this.ajaxHistoryData.slice(_start,_end);
            },
            toApplyForm(){
                 this.$router.push('/timeMagt/applyLeaveForm')
            },
            dateMod1(date1){
                this.formValidate.submitBeginDate = date1;
            },
            dateMod2(date2){
                this.formValidate.submitEndDate = date2;
            },
            dateMod3(date3){
                this.formValidate.leaveBeginDate = date3;
            },
            dateMod4(date4){
                this.formValidate.leaveEndDate = date4;
            },
            handleReset (name) {
                console.dir(name)
                this.$refs[name].resetFields();
            },
            check(index){
                Cookies.set('leaveId', index);
                this.$router.push('applyLeaveDetail')
            }
        },
        
}
</script>

<style>
    .ivu-table-overflowX {
        overflow-x: hidden;
    }
</style>
