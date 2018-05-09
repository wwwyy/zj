<template>
  <div id="trainingStatistics">
    <Form :model="formItem" :label-width="84" inline style="text-align:left;">
        <FormItem label="工号">
            <Input v-model="formItem.input" placeholder="请输入工号" style="width:100px"></Input>
        </FormItem>
        <FormItem label="姓名">
            <Input v-model="formItem.input" placeholder="请输入姓名" style="width:100px"></Input>
        </FormItem>
        <FormItem label="入职时间" style="width:330px">
             <Row>
                <Col span="11">
                    <DatePicker type="date" placeholder="请选择日期" v-model="formItem.date"></DatePicker>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                    <TimePicker type="time" placeholder="请选择时间" v-model="formItem.time"></TimePicker>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="学历">
            <Select v-model="formItem.select1" style="width:100px">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
        <FormItem label="入职时间" style="width:150px">
             <Row>
                <Col span="11">
                    <Input v-model="formItem.input" placeholder=""></Input>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                    <Input v-model="formItem.input" placeholder=""></Input>
                </Col>
            </Row>
        </FormItem>
     <br>
        <FormItem label="部门">
            <Select v-model="formItem.select1" style="width:100px">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
        <FormItem label="职级" >
            <Select v-model="formItem.select2" style="width:100px">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
        <FormItem label="合同到期时间" style="width:330px">
             <Row>
                <Col span="11">
                    <DatePicker type="date" placeholder="请选择日期" v-model="formItem.date"></DatePicker>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                    <TimePicker type="time" placeholder="请选择时间" v-model="formItem.time"></TimePicker>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="员工状态">
            <Select v-model="formItem.select1" style="width:100px">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
          <FormItem style="width:140px;margin-left:10px" class="btns">
            <Button type="primary" size="small">查　　询</Button>
            <Button type="ghost" size="small" style="margin-left: 8px">清　　空</Button>
        </FormItem>
    </Form>
    
     <Table :columns="historyColumns" :data="historyData" style="width:100%;" border></Table>
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
                        punchTime: '2018-10-03 20:00:00',
                        state: '正式员工',
                        education: '本科',
                        age: '26',
                        phone: '18661751111'
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
                    date: '',
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
                        key: 'englishName',
                        width: 120
                    },
                    {
                        title: '部门',
                        key: 'department',
                    },
                    {
                        title: '岗位',
                        key: 'quarter',
                    },
                    {
                        title: '职级',
                        key: 'level',
                        width: 80
                    },
                    {
                        title: '员工状态',
                        key: 'state'
                    },
                    {
                        title: '学历',
                        key: 'education'
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        width: 80
                    },
                    {
                        title: '电话',
                        key: 'phone',
                        width: 120
                    },
                    {
                        title: 'Action',
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
                                            this.toTrainingRecords()
                                        }
                                    }
                                }, '培训记录'),
                            ]);
                        }
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
            },
            toTrainingRecords() {
                this.$router.push('/trainingMagt/trainingRecords')
            }
        },
        created(){
             this.handleListApproveHistory();
        }
}
</script>

<style>
    #attendance .ivu-table-overflowX {
        overflow-x: hidden;
    }
    #trainingStatistics .btns .ivu-form-item-content {
        margin-left: 0 !important;
    }
</style>
