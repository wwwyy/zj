<template>
    <div id="empInfoAdd">
          <h3 class="formTitle clearfix">
          <span class="formTitle_l">
              新增员工
          </span>
          <span class="formTitle_r">
               <Button type="primary" @click="toBack">
            <Icon type="chevron-left"></Icon>
            返回
        </Button>
          </span>
      </h3>
    <Row>
        <Col span="16">
            <Row type="flex" justify="space-around" class="code-row-bg" style="margin-top:15px;">
                <Col span="7">
                    <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            员工工号：
                        </Col>
                        <Col span="15">
                            <Input v-model="value" placeholder="Enter something..."></Input>
                        </Col>
                    </Row>
                </Col>
                <Col span="7">
                     <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            性别：
                        </Col>
                        <Col span="15">
                              <Select v-model="model1">
                                <Option value="0">请选择</Option>
                                <Option value="1">男</Option>
                                <Option value="2">女</Option>
                            </Select>
                        </Col>
                    </Row>
                </Col>
                <Col span="7">
                    <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            员工状态：
                        </Col>
                        <Col span="15">
                            <Select v-model="model1">
                                <Option value="0">请选择</Option>
                                <Option value="1">正式员工</Option>
                                <Option value="2">实习员工</Option>
                                <Option value="3">新聘员工</Option>
                                <Option value="4">离职员工</Option>
                            </Select>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row type="flex" justify="space-around" class="code-row-bg" style="margin-top:15px;">
                <Col span="7">
                    <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            中文名：
                        </Col>
                        <Col span="15">
                            <Input v-model="value" placeholder="Enter something..."></Input>
                        </Col>
                    </Row>
                </Col>
                <Col span="7">
                     <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            英文名：
                        </Col>
                        <Col span="15">
                            <Input v-model="value" placeholder="Enter something..."></Input>
                        </Col>
                    </Row>
                </Col>
                <Col span="7">
                    <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            部门：
                        </Col>
                        <Col span="15">
                            <Select v-model="model1">
                                <Option value="0">请选择</Option>
                                <Option value="1">正式员工</Option>
                                <Option value="2">实习员工</Option>
                                <Option value="3">新聘员工</Option>
                                <Option value="4">离职员工</Option>
                            </Select>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row type="flex" justify="space-around" class="code-row-bg" style="margin-top:15px;">
                <Col span="7">
                    <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            岗位：
                        </Col>
                        <Col span="15">
                            <Select v-model="model1">
                                <Option value="0">请选择</Option>
                                <Option value="1">正式员工</Option>
                                <Option value="2">实习员工</Option>
                                <Option value="3">新聘员工</Option>
                                <Option value="4">离职员工</Option>
                            </Select>
                        </Col>
                    </Row>
                </Col>
                <Col span="7">
                     <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            职级：
                        </Col>
                        <Col span="15">
                            <Select v-model="model1">
                                <Option value="0">请选择</Option>
                                <Option value="1">JB1</Option>
                                <Option value="2">JB2</Option>
                                <Option value="3">JB3</Option>
                                <Option value="4">JB4</Option>
                                <Option value="5">JB5</Option>
                                <Option value="6">JB6</Option>
                                <Option value="7">JB7</Option>
                                <Option value="8">JB8</Option>
                            </Select>
                        </Col>
                    </Row>
                </Col>
                <Col span="7">
                    <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            直接经理：
                        </Col>
                        <Col span="15">
                            <Input v-model="value" placeholder="根据岗位计算出" disabled></Input>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row type="flex" justify="space-around" class="code-row-bg" style="margin-top:15px;">
                <Col span="7">
                    <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            工资状态：
                        </Col>
                        <Col span="15">
                               <Select v-model="model1">
                                <Option value="0">请选择</Option>
                                <Option value="1">正常发放</Option>
                                <Option value="2">停发</Option>
                       
                            </Select>
                        </Col>
                    </Row>
                </Col>
                <Col span="7">
                     <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            考勤状态：
                        </Col>
                        <Col span="15">
                              <Select v-model="model1">
                                <Option value="0">请选择</Option>
                                <Option value="1">刷卡考勤</Option>
                                <Option value="2">不计算考勤</Option>
                       
                            </Select>
                        </Col>
                    </Row>
                </Col>
                <Col span="7">
                    
                </Col>
            </Row>
            <Row type="flex" justify="space-around" class="code-row-bg" style="margin-top:15px;">
                <Col span="7">
                    <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            入职日期：
                        </Col>
                        <Col span="15">
                            <DatePicker type="date" placeholder="Select date"></DatePicker>
                        </Col>
                    </Row>
                </Col>
                <Col span="7">
                     <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            试用期：
                        </Col>
                        <Col span="15">
                            <Input v-model="value" placeholder="Enter something..."></Input>
                        </Col>
                    </Row>
                </Col>
                <Col span="7">
                    <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            最后工作日期：
                        </Col>
                        <Col span="15">
                            <DatePicker type="date" placeholder="Select date"></DatePicker>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row type="flex" justify="space-around" class="code-row-bg" style="margin-top:15px;">
                <Col span="7">
                    <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            合同结束日期：
                        </Col>
                        <Col span="15">
                            <DatePicker type="date" placeholder="Select date"></DatePicker>
                        </Col>
                    </Row>
                </Col>
                <Col span="7">
                     <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            店龄：
                        </Col>
                        <Col span="15">
                            <Input v-model="value" placeholder="计算出，向下取整" disabled></Input>
                        </Col>
                    </Row>
                </Col>
                <Col span="7">
                    <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            工资：
                        </Col>
                        <Col span="15">
                            <Input v-model="value" placeholder="Enter something..."></Input>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row type="flex" justify="space-around" class="code-row-bg"  style="margin-top:15px;">
                 <Col span="7">
                    <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            备注信息：
                        </Col>
                        <Col span="15" style="line-height:32px;font-size:12px;text-align:right;">
                            <Input v-model="value5" type="textarea" :rows="4" placeholder="请输入..."></Input>
                        </Col>
                    </Row>
                </Col>
                <Col span="7" style="text-align:right">
                    <Button type="primary" style="width:50%"> 保   存 </Button>
                </Col>
                <Col span="7" style="text-align:right">
                    <Button style="width:50%"> 清   空  </Button>
                </Col>
            </Row>
        </Col>
        <Col span="8">
            <Upload
                style="margin-top:15px;"
                multiple
                type="drag"
                action="//jsonplaceholder.typicode.com/posts/">
                <div style="padding: 20px 0;;height:272px">
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <p>点击或拖拽上传员工照片</p>
                </div>
            </Upload>
        </Col>
    </Row>
    </div>
</template>
<script>
export default {
   data () {
       return {
           value:''
       }
   },
    methods:{
        toBack() {
            this.$router.back(-1);
        }
    }
}
</script>
