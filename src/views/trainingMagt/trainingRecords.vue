<template>
  <div id="trainingRecords">
      <h3 class="formTitle clearfix">
          <span class="formTitle_l">
              查看员工培训记录
          </span>
          <span class="formTitle_r">
               <Button type="primary" @click="toBack">
            <Icon type="chevron-left"></Icon>
            返回
        </Button>
          </span>
      </h3>
      <div class="formLists">
          <Row type="flex">
            <Col span="4"><p class="infoName">工号</p></Col>
            <Col span="4"><p class="info">01311</p></Col>
            <Col span="4"><p class="infoName">中文名</p></Col>
            <Col span="4"><p class="info">赵彦明</p></Col>
            <Col span="4"><p class="infoName">英文名</p></Col>
            <Col span="4"><p class="info">Alex Ma</p></Col>
        </Row> 
      </div>
      <div class="btn" style="text-align:left;margin:20px 0">
          <Button type="primary"  @click="addTraining = true">新增培训记录</Button>
      </div>
      <modal
        v-model="addTraining"
        title="增加培训记录"
        :loading="loading"
        @on-ok="asyncOK"
        ok-text="保  存">
        <div>
            <Form :model="formItem" :label-width="80">
                <FormItem label="员工姓名">
                    <Input v-model="formItem.name" placeholder="Enter something..."></Input>
                </FormItem>
                <FormItem label="培训名称">
                    <Input v-model="formItem.trainingName" placeholder="Enter something..."></Input>
                </FormItem>
                <FormItem label="培训时间">
                    <Input v-model="formItem.trainingTime" placeholder="Enter something..."></Input>
                </FormItem>
                <FormItem label="培训详情">
                    <Input v-model="formItem.trainingDetails" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                </FormItem>
            </Form>
        </div>
    </modal>
      <Table :columns="historyColumns" :data="historyData" style="width:100%;" border></Table>
      <Page :total="dataCount" :page-size="pageSize" show-total @on-change="changepage" style="paddingTop:24px;"></Page>
     
  </div>
</template>

<script>
let testData = {
    'histories' : [
                    
                ]
}
export default {
  data() {
    return {
    ajaxHistoryData:[],
    historyData: [],
    dataCount:0,
    pageSize:10,
    addTraining: false,
    loading: true,
    formItem: {
        name: '',
        trainingName: '',
        trainingTime: '',
        trainingDetails: '',
    },
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
      ],
      historyColumns: [
                    {
                        title: '培训名称',
                        key: 'trainingName',
                        width: 200,
                        align: 'center'
                    },
                    {
                        title: '培训时间',
                        key: 'trainingTime',
                        width: 200,
                        align: 'center'
                    },
                    {
                        title: '培训详情',
                        key: 'trainingDetails',
                        align: 'center'
                    },
                ],
    };
  },
  methods: {
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
            asyncOK () {
                setTimeout(() => {
                    this.addTraining = false;
                }, 2000);
            },
            toBack() {
                this.$router.back(-1);
            }
  },
  created(){
             this.handleListApproveHistory();
        }
};
</script>

