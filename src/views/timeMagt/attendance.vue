<template>
    <div id="attendance">
    
        <Form :model="formItem" :label-width="80" inline style="text-align:left;">
    
            <FormItem label="工号">
    
                <Input v-model="formItem.employeeNo" placeholder="请输入工号" style="width:170px"></Input>
    
            </FormItem>
    
            <FormItem label="姓名">
    
                <Input v-model="formItem.name" placeholder="请输入姓名" style="width:170px"></Input>
    
            </FormItem>
    
            <FormItem label="打卡时间">
    
                <Row>
    
                    <Col span="11">
    
                    <DatePicker type="datetime" placeholder="请选择日期及时间" v-model="formItem.timeBegin"></DatePicker>
    
                    </Col>
    
                    <Col span="2" style="text-align: center">-</Col>
    
                    <Col span="11">
    
                    <DatePicker type="datetime" placeholder="请选择日期及时间" v-model="formItem.timeEnd"></DatePicker>
    
                    </Col>
    
                </Row>
    
            </FormItem>
    
            <br>
    
            <FormItem label="部门">
    
                <Select v-model="formItem.departmentId" style="width:170px">
    
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
    
            <FormItem label="职级">
    
                <Select v-model="formItem.grade" style="width:170px">
    
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
    
            <FormItem>
    
                <Button type="primary" @click="search">查　　询</Button>
    
                <Button type="ghost" style="margin-left: 8px" @click="handleReset">清　　空</Button>
    
            </FormItem>
    
        </Form>
    
        <Table :columns="historyColumns" :data="historyData" style="width:100%;"></Table>
    
        <Page :total="dataCount" :page-size="pageSize" show-total @on-change="changepage" style="paddingTop:24px;"></Page>
    
    </div>
</template>

<script>
    import axios from 'axios';
    
    import qs from 'qs';
    
    export default {
    
        data() {
    
            return {
    
                historyData: [],
    
                dataCount: 0,
    
                pageSize: 10,
    
                formItem: {
    
                    departmentId: '',
    
                    employeeNo: '',
    
                    grade: '',
    
                    name: '',
    
                    timeBegin:' ',
    
                    timeEnd: '',
    
                },
    
                historyColumns: [{
    
                        title: '工号',
    
                        key: 'id'
    
                    },
    
                    {
    
                        title: '姓名',
    
                        key: 'name'
    
                    },
    
                    {
    
                        title: '英文名',
    
                        key: 'englishName'
    
                    },
    
                    {
    
                        title: '部门',
    
                        key: 'departmentName'
    
                    },
    
                    {
    
                        title: '岗位',
    
                        key: 'positionName'
    
                    },
    
                    {
    
                        title: '职级',
    
                        key: 'grade'
    
                    },
    
                    {
    
                        title: '打卡时间',
    
                        key: 'time'
    
                    }
    
                ],
    
            }
    
        },
    
        methods: {
    
    
    
            changepage(index) {
    
                console.log(index)
    
                const that = this;
    
                axios.post('/api/hotelhr/time/attendace/record/search.json', {
    
                    "pager": {
    
                        "currentPage": index,
    
                        "pageSize": 10
    
                    }
    
                }).then(function(response) {
    
                    console.log(response)
    
                    const tableData = response.data.result.records
    
                    that.historyData = tableData;
    
                    that.dataCount = tableData.length;
    
                })
    
            },
    
            search() {
    
                const that = this;
    
                axios.post('/api/hotelhr/time/attendace/record/search.json', {
    
                    "pager": {
    
                        "currentPage": 1,
    
                        "pageSize": 10
    
                    },
    
                    "params": {
    
                        "departmentId": that.formItem.id,
    
                        "employeeNo": that.formItem.employeeNo,
    
                        "grade": that.formItem.grade,
    
                        "name": that.formItem.name
    
                    },
    
                    "timeBegin": that.formItem.name.timeBegin,
    
                    "timeEnd": that.formItem.name.timeEnd
    
                }).then(function(response) {
    
                    console.log(response)
    
                    const tableData = response.data.result.records
    
                    that.historyData = tableData;
    
                    that.dataCount = tableData.length;
    
                })
    
            },
            handleReset(name) {
                this.formItem.departmentId = '';
                this.formItem.employeeNo = '';
                this.formItem.grade = '';
                this.formItem.name = '';
                this.formItem.timeBegin = '';
                this.formItem.timeEnd = '';
                this.currentPage = 1;
            }
    
        },
    
        created() {
            console.log(1)
            const that = this;
    
            axios.post('/api/hotelhr/time/attendace/record/search.json', {
    
                "pager": {
    
                    "currentPage": 1,
    
                    "pageSize": 10
    
                }
    
            }).then(function(response) {
    
                console.log(response)
    
                const tableData = response.data.result.records
    
                that.historyData = tableData;
    
                that.dataCount = tableData.length;
    
            })
    
        }
    
    }
</script>

<style>
    #attendance .ivu-table-overflowX {
    
        overflow-x: hidden;
    
    }
</style>
