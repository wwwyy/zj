<template>
   <div id="empInfoMagt">
    <Form :model="formItem" :label-width="84" inline style="text-align:left;">
        <FormItem label="工号">
            <Input v-model="formItem.input" placeholder="请输入工号" style="width:90px"></Input>
        </FormItem>
        <FormItem label="姓名">
            <Input v-model="formItem.input" placeholder="请输入姓名" style="width:90px"></Input>
        </FormItem>
        <FormItem label="入职时间">
            <Row style="width:240px">
                <Col span="11">
                    <DatePicker type="date" placeholder="请选择日期" v-model="formItem.date" ></DatePicker>
                </Col>
                <Col span="2" style="text-align: center">至</Col>
                <Col span="11">
                    <TimePicker type="date" placeholder="请选择日期" v-model="formItem.date"></TimePicker>
                </Col>
            </Row>
        </FormItem>
         <FormItem label="学历">
            <Select v-model="formItem.select1" style="width:90px">
                <Option value="beijing">全部</Option>
                <Option value="shanghai">博士</Option>
                <Option value="shenzhen">硕士</Option>
                <Option value="shanghai">本科</Option>
                <Option value="shenzhen">专科及以下</Option>
            </Select>
        </FormItem>
        <FormItem label="店龄">
            <Row> 
                <Col span="11">
                    <InputNumber :max="10" :min="1" v-model="value1" style="50px"></InputNumber>
                </Col>
                <Col span="2" style="text-align: center">至</Col>
                <Col span="11">
                    <InputNumber :max="10" :min="1" v-model="value1"></InputNumber>
                </Col>
            </Row>
        </FormItem>
     <br>
        <FormItem label="部门">
            <Select v-model="formItem.select1" style="width:90px">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
        <FormItem label="职级" >
            <Select v-model="formItem.select2" style="width:90px">
                <Option value="beijing">全部</Option>
                <Option value="shanghai">实习生</Option>
                <Option value="shenzhen">正式员工</Option>
                <Option value="shenzhen">新聘员工</Option>
                <Option value="shenzhen">离职员工</Option>
            </Select>
        </FormItem>
         <FormItem label="合同到期时间">
            <Row style="width:240px">
                <Col span="11">
                    <DatePicker type="date" placeholder="请选择日期" v-model="formItem.date"></DatePicker>
                </Col>
                <Col span="2" style="text-align: center">至</Col>
                <Col span="11">
                    <TimePicker type="date" placeholder="请选择日期" v-model="formItem.date"></TimePicker>
                </Col>
            </Row>
        </FormItem>
         <FormItem label="员工状态">
            <Select v-model="formItem.select1" style="width:90px">
                <Option value="beijing">全部</Option>
                <Option value="shanghai">博士</Option>
                <Option value="shenzhen">硕士</Option>
                <Option value="shanghai">本科</Option>
                <Option value="shenzhen">专科及以下</Option>
            </Select>
        </FormItem>
          <FormItem>
            <Button type="primary">查　　询</Button>
            <Button type="ghost" style="margin-left: 8px">清　　空</Button>
        </FormItem>
    </Form>
    <div style="text-align:left;">
      <Button type="primary" size="large" @click="empAdd">新增员工</Button>
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
                        title: '工资',
                        key: 'aaa'
                    },
                    {
                        title: '员工状态',
                        key: 'aaa'
                    },
                    {
                        title: '学历',
                        key: 'aaa'
                    },
                    {
                        title: '年龄',
                        key: 'aaa'
                    },
                    {
                        title: '电话',
                        key: 'aaa'
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
                                            this.show(params.index)
                                        }
                                    }
                                }, '修改'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '删除')
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
            empAdd(){
              this.$router.push('empInfoAdd')
            }
        },
        created(){
             this.handleListApproveHistory();
        }
}
</script>
<style>
  #personMagt{
    min-width: 1500px;
    overflow: hidden;
  }
  
</style>
