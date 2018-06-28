<template>
  <div id="leaveManagement">
    <Form :model="formValidate" ref="formValidate" :label-width="80" inline style="text-align:left;min-width:1250px;overflow:hidden;">
        <FormItem label="工号" prop="id">
            <Input v-model="formValidate.id" placeholder="请输入工号" style="width:100px;"></Input>
        </FormItem>
       <FormItem label="部门" prop="departmentId">
            <Select v-model="formValidate.departmentId" style="width:130px">
               <Option value="1">集团总部</Option>
    
                    <Option value="2"> &nbsp;&nbsp; ┝ 信息中心</Option>
    
                    <Option value="3">　&nbsp;&nbsp;&nbsp;&nbsp;　┝ 开发组</Option>
    
                    <Option value="4">　&nbsp;&nbsp;&nbsp;&nbsp;　┝ 测试组</Option>
    
                    <Option value="5">　&nbsp;&nbsp;&nbsp;&nbsp;　┝ 运维组</Option>
    
                    <Option value="6"> &nbsp;&nbsp; ┝ 财务中心</Option>
    
                    <Option value="7"> &nbsp;&nbsp; ┝ 人事中心</Option>
    
                    <Option value="8"> &nbsp;&nbsp; ┝ 客服中心</Option>
    
                    <Option value="9"> &nbsp;&nbsp; ┝ 采购中心</Option>
            </Select>
        </FormItem>
        <FormItem label="请假事由" prop="type">
            <Select v-model="formValidate.type" style="width:130px">
                
    
            </Select>
        </FormItem>
       <FormItem label="提交时间">
            <Row style="width:320px;">
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
        <FormItem label="姓名" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入姓名" style="width:100px"></Input>
        </FormItem>
        
        <FormItem label="职级" prop="grade">
            <Select v-model="formValidate.grade" style="width:130px">
                <Option value="1">JB1</Option>
    
                    <Option value="2">JB2</Option>
    
                    <Option value="3">JB3</Option>
    
                    <Option value="4">JB4</Option>
    
                    <Option value="5">JB5</Option>
    
                    <Option value="6">JB6</Option>
    
                    <Option value="7">JB7</Option>
    
                    <Option value="8">JB8</Option>
            </Select>
        </FormItem>
         <FormItem label="申请状态" prop="state">
            <Select v-model="formValidate.state" style="width:130px">
                <Option value="1">全部</Option>
                <Option value="2">审批通过</Option>
                <Option value="3">审批中</Option>
                <Option value="4">审批驳回</Option>
                <Option value="5">已撤销</Option>
            </Select>
        </FormItem>
        <FormItem label="请假时间">
            <Row style="width:320px;">
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
     
        
        
        <FormItem class="btns">
            <Button type="primary" @click="search">查　　询</Button>
            <Button type="ghost" style="margin-left: 8px" @click="handleReset('formValidate')">清　　空</Button>
        </FormItem>
    </Form>
    <div style="text-align:left;padding:5px 0;border-top:1px solid #ccc">
        <Button type="primary"><Icon type="ios-download-outline"></Icon> 导 出 </Button>
    </div>
     <Table :columns="historyColumns" :data="historyData" style="width:100%;" border ></Table>
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
                    id: '',
                    departmentId:'',
                    name: '',
                    grade:'',
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
            },
            remove (index) {
                this.data6.splice(index, 1);
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
                console.log(response)
                const data = response.data.result;
                data.records.forEach(element => {
                    element.dateTime = element.dateBegin +'----'+ element.dateEnd
                });
                that.historyData = data.records;
                that.currentPage = data.currentPage;
                that.dataCount = data.totalRecords;
                
              })
        },
}
</script>

<style>
    .ivu-table-overflowX {
        overflow-x: hidden;
    }
    .btns .ivu-form-item-content {
        margin-left: 0!important;
    }
</style>
