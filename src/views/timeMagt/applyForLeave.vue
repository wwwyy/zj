<template>
  <div id="applyForLeave">
    <Form :model="formItem" :label-width="80" inline style="text-align:left;">
        <FormItem label="请假事由">
            <Select v-model="formItem.select1" style="width:155px">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
       <FormItem label="提交时间">
            <Row>
                <Col span="11">
                    <DatePicker type="date" placeholder="请选择日期" v-model="formItem.submitDate1"></DatePicker>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                    <DatePicker type="date" placeholder="请选择日期" v-model="formItem.submitDate2"></DatePicker>
                </Col>
            </Row>
        </FormItem>
        <br>
        <FormItem label="申请状态" >
            <Select v-model="formItem.select2" style="width:155px">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
        <FormItem label="请假时间">
            <Row>
                <Col span="11">
                    <DatePicker type="date" placeholder="请选择日期" v-model="formItem.leaveDate1"></DatePicker>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                    <DatePicker type="date" placeholder="请选择日期" v-model="formItem.leaveDate2"></DatePicker>
                </Col>
            </Row>
        </FormItem>
     
        
        
          <FormItem>
            <Button type="primary">查　　询</Button>
            <Button type="ghost" style="margin-left: 8px">清　　空</Button>
        </FormItem>
    </Form>
    <div style="text-align:left;padding:5px 0;border-top:1px solid #ccc">
        <Button type="ghost" shape="circle">请假申请</Button>
    </div>
     <Table :columns="historyColumns" :data="historyData" style="width:100%;"></Table>
      <Page :total="dataCount" :page-size="pageSize" show-total @on-change="changepage" style="paddingTop:24px;"></Page>
  </div>
</template>

<script>
let testData = {
    'histories' : [
                    {
                        id: '01311',
                        name: '赵彦明',
                        englishName: 'John Brown',
                        department: '销售部',
                        quarter: '销售主管',
                        level: 'JB6',
                        punchTime: '2018-10-03 20:00:00'
                    },
                    {
                        id: '01312',
                        name: '赵彦明',
                        englishName: 'John Brown',
                        department: '销售部',
                        quarter: '销售主管',
                        level: 'JB6',
                        punchTime: '2018-10-03 20:00:00'
                    },
                    {
                        id: '01313',
                        name: '赵彦明',
                        englishName: 'John Brown',
                        department: '销售部',
                        quarter: '销售主管',
                        level: 'JB6',
                        punchTime: '2018-10-03 20:00:00'
                    },
                    {
                        id: '01314',
                        name: '赵彦明',
                        englishName: 'John Brown',
                        department: '销售部',
                        quarter: '销售主管',
                        level: 'JB6',
                        punchTime: '2018-10-03 20:00:00'
                    },
                    {
                        id: '01315',
                        name: '赵彦明',
                        englishName: 'John Brown',
                        department: '销售部',
                        quarter: '销售主管',
                        level: 'JB6',
                        punchTime: '2018-10-03 20:00:00'
                    },
                    {
                        id: '01316',
                        name: '赵彦明',
                        englishName: 'John Brown',
                        department: '销售部',
                        quarter: '销售主管',
                        level: 'JB6',
                        punchTime: '2018-10-03 20:00:00'
                    },
                    {
                        id: '01317',
                        name: '赵彦明',
                        englishName: 'John Brown',
                        department: '销售部',
                        quarter: '销售主管',
                        level: 'JB6',
                        punchTime: '2018-10-03 20:00:00'
                    },
                    {
                        id: '01318',
                        name: '赵彦明',
                        englishName: 'John Brown',
                        department: '销售部',
                        quarter: '销售主管',
                        level: 'JB6',
                        punchTime: '2018-10-03 20:00:00'
                    },
                    {
                        id: '01319',
                        name: '赵彦明',
                        englishName: 'John Brown',
                        department: '销售部',
                        quarter: '销售主管',
                        level: 'JB6',
                        punchTime: '2018-10-03 20:00:00'
                    },
                    {
                        id: '01320',
                        name: '赵彦明',
                        englishName: 'John Brown',
                        department: '销售部',
                        quarter: '销售主管',
                        level: 'JB6',
                        punchTime: '2018-10-03 20:00:00'
                    },
                    {
                        id: '01321',
                        name: '赵彦明',
                        englishName: 'John Brown',
                        department: '销售部',
                        quarter: '销售主管',
                        level: 'JB6',
                        punchTime: '2018-10-03 20:00:00'
                    },
                    {
                        id: '01322',
                        name: '赵彦明',
                        englishName: 'John Brown',
                        department: '销售部',
                        quarter: '销售主管',
                        level: 'JB6',
                        punchTime: '2018-10-03 20:00:00'
                    },
                    {
                        id: '01323',
                        name: '赵彦明',
                        englishName: 'John Brown',
                        department: '销售部',
                        quarter: '销售主管',
                        level: 'JB6',
                        punchTime: '2018-10-03 20:00:00'
                    },
                    {
                        id: '01324',
                        name: '赵彦明',
                        englishName: 'John Brown',
                        department: '销售部',
                        quarter: '销售主管',
                        level: 'JB6',
                        punchTime: '2018-10-03 20:00:00'
                    },
                    {
                        id: '01325',
                        name: '赵彦明',
                        englishName: 'John Brown',
                        department: '销售部',
                        quarter: '销售主管',
                        level: 'JB6',
                        punchTime: '2018-10-03 20:00:00'
                    },
                    {
                        id: '01326',
                        name: '赵彦明',
                        englishName: 'John Brown',
                        department: '销售部',
                        quarter: '销售主管',
                        level: 'JB6',
                        punchTime: '2018-10-03 20:00:00'
                    },
                    {
                        id: '01327',
                        name: '赵彦明',
                        englishName: 'John Brown',
                        department: '销售部',
                        quarter: '销售主管',
                        level: 'JB6',
                        punchTime: '2018-10-03 20:00:00'
                    },
                    {
                        id: '01328',
                        name: '赵彦明',
                        englishName: 'John Brown',
                        department: '销售部',
                        quarter: '销售主管',
                        level: 'JB6',
                        punchTime: '2018-10-03 20:00:00'
                    },
                    {
                        id: '01329',
                        name: '赵彦明',
                        englishName: 'John Brown',
                        department: '销售部',
                        quarter: '销售主管',
                        level: 'JB6',
                        punchTime: '2018-10-03 20:00:00'
                    },
                    {
                        id: '01330',
                        name: '赵彦明',
                        englishName: 'John Brown',
                        department: '销售部',
                        quarter: '销售主管',
                        level: 'JB6',
                        punchTime: '2018-10-03 20:00:00'
                    },
                    {
                        id: '01331',
                        name: '赵彦明',
                        englishName: 'John Brown',
                        department: '销售部',
                        quarter: '销售主管',
                        level: 'JB6',
                        punchTime: '2018-10-03 20:00:00'
                    },
                    {
                        id: '01332',
                        name: '赵彦明',
                        englishName: 'John Brown',
                        department: '销售部',
                        quarter: '销售主管',
                        level: 'JB6',
                        punchTime: '2018-10-03 20:00:00'
                    },
                    {
                        id: '01333',
                        name: '赵彦明',
                        englishName: 'John Brown',
                        department: '销售部',
                        quarter: '销售主管',
                        level: 'JB6',
                        punchTime: '2018-10-03 20:00:00'
                    },
                ]
}
export default {
    data () {
            return {
                ajaxHistoryData:[],
                historyData: [],
                dataCount:0,
                pageSize:10,
                formItem: {
                    input: '',
                    select1: '',
                    select2: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    submitDate1: '',
                    submitDate2: '',
                    leaveDate1: '',
                    leaveDate2: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                },
                historyColumns: [
                    {
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
                        key: 'department'
                    },
                    {
                        title: '岗位',
                        key: 'quarter'
                    },
                    {
                        title: '职级',
                        key: 'level'
                    },
                    {
                        title: '打卡时间',
                        key: 'punchTime'
                    }
                ],
            }
        },
        methods:{
            // 获取历史记录信息
            handleListApproveHistory(){
                
                // 保存取到的所有数据
                this.ajaxHistoryData = testData.histories
                this.dataCount = testData.histories.length;
                // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
                if(testData.histories.length < this.pageSize){
                    this.historyData = this.ajaxHistoryData;
                }else{
                    this.historyData = this.ajaxHistoryData.slice(0,this.pageSize);
                }
                    
               
            },
            changepage(index){
                var _start = ( index - 1 ) * this.pageSize;
                var _end = index * this.pageSize;
                this.historyData = this.ajaxHistoryData.slice(_start,_end);
            }
        },
        created(){
             this.handleListApproveHistory();
        }
}
</script>

<style>
    .ivu-table-overflowX {
        overflow-x: hidden;
    }
</style>
