<template>
 <div id="empInfoMod">
          <h3 class="formTitle clearfix">
          <span class="formTitle_l">
              修改员工详情
          </span>
          <span class="formTitle_r">
               <Button type="primary" @click="toBack">
            <Icon type="chevron-left"></Icon>
            返回
        </Button>
          </span>
      </h3>
      <Row>
        <Col span="18">
           <Row class="code-row-bg" style="margin-top:15px;border:1px solid #ccc;background:#eee">
                <Col span="8">
                    <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;background:#eee">
                            员工工号：
                        </Col>
                        <Col span="15" style="line-height:32px;font-size:12px; text-align:center;background:#fff" >
                            00311
                        </Col>
                    </Row>
                </Col>
                <Col span="8">
                     <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;background:#eee">
                            员工工号：
                        </Col>
                        <Col span="15" style="line-height:32px;font-size:12px; text-align:center;background:#fff" >
                            00311
                        </Col>
                    </Row>
                </Col>
                <Col span="8">
                    <Row>
                          <Col span="9" style="line-height:32px;font-size:12px;text-align:right;background:#eee">
                            员工工号：
                        </Col>
                        <Col span="15" style="line-height:32px;font-size:12px; text-align:center;background:#fff" >
                            00311
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
        <Col span="8">
        </Col>
      </Row>
      <br>
      <br>
      <div class="demo-tabs-style1" style="background: #e3e8ee;padding:16px;">
        <Tabs value="name2" type="card">
        <TabPane label="人事变动" name="name1">
          <Table :columns="historyColumns" :data="historyData" style="width:100%;" border></Table>
      <Page :total="dataCount" :page-size="pageSize" show-total @on-change="changepage" style="paddingTop:24px;"></Page>

        </TabPane>
        <TabPane label="基本信息" name="name2">
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
        </TabPane>
        <TabPane label="详细信息" name="name3">
            <Row type="flex" justify="space-around" class="code-row-bg" style="margin-top:15px;">
                <Col span="7">
                    <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            国籍：
                        </Col>
                        <Col span="15">
                            <Select v-model="model1">
                                <Option value="0">请选择</Option>
                                <Option value="1">中国</Option>
                                <Option value="2">外籍</Option>
                            </Select>
                        </Col>
                    </Row>
                </Col>
                <Col span="7">
                     <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            民族：
                        </Col>
                        <Col span="15">
                              <Select v-model="model1">
                                <Option value="0">请选择</Option>
                                <Option value="1">汉族</Option>
                                <Option value="2">其他少数民族</Option>
                            </Select>
                        </Col>
                    </Row>
                </Col>
                <Col span="7">
                    <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            婚姻：
                        </Col>
                        <Col span="15">
                            <Select v-model="model1">
                                <Option value="0">请选择</Option>
                                <Option value="1">未婚</Option>
                                <Option value="2">已婚</Option>
                            </Select>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row type="flex" justify="space-around" class="code-row-bg" style="margin-top:15px;">
                <Col span="7">
                    <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            学历：
                        </Col>
                        <Col span="15">
                           <Select v-model="model1">
                                <Option value="0">请选择</Option>
                                <Option value="1">博士</Option>
                                <Option value="2">硕士</Option>
                                <Option value="1">本科</Option>
                                <Option value="2">专科及以下</Option>
                            </Select>
                        </Col>
                    </Row>
                </Col>
                <Col span="7">
                     <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            英语等级：
                        </Col>
                        <Col span="15">
                            <Select v-model="model1">
                                <Option value="0">请选择</Option>
                                <Option value="1">专业8级</Option>
                                <Option value="2">6级</Option>
                                <Option value="1">4级</Option>
                            </Select>
                        </Col>
                    </Row>
                </Col>
                <Col span="7">
                    <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            政治面貌：
                        </Col>
                        <Col span="15">
                            <Select v-model="model1">
                                <Option value="0">请选择</Option>
                                <Option value="1">群众</Option>
                                <Option value="2">党员</Option>
                            </Select>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row type="flex" justify="space-around" class="code-row-bg" style="margin-top:15px;">
                <Col span="7">
                    <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            身份证号码：
                        </Col>
                        <Col span="15">
                            <Input v-model="value" placeholder="根据岗位计算出"></Input>
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
                            <Input v-model="value" placeholder="Enter something..."></Input>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row type="flex" justify="space-around" class="code-row-bg" style="margin-top:15px;">
                <Col span="7">
                    <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            生日：
                        </Col>
                        <Col span="15">
                               <Input v-model="value" placeholder="Enter something..."></Input>
                        </Col>
                    </Row>
                </Col>
                <Col span="7">
                     <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            住址：
                        </Col>
                        <Col span="15">
                              <Input v-model="value" placeholder="Enter something..." ></Input>
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
                            初次参加工作时间：
                        </Col>
                        <Col span="15">
                            <DatePicker type="date" placeholder="Select date" style="width:100%"></DatePicker>
                        </Col>
                    </Row>
                </Col>
                <Col span="7">
                     <Row>
                        <Col span="9" style="line-height:32px;font-size:12px;text-align:right;">
                            总工龄：
                        </Col>
                        <Col span="15">
                            <Input v-model="value" placeholder="计算出，向下取整" disabled></Input>
                        </Col>
                    </Row>
                </Col>
                <Col span="7">
                    <Row style="text-align:right;">
                        <Col span="12">
                            <Button type="primary" style="width:50%"> 保   存 </Button>
                        </Col>
                        <Col span="12">
                            <Button style="width:50%"> 清   空  </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            
        </TabPane>
        <TabPane label="福利待遇" name="name4">
          <Row class="code-row-bg" style="margin-top:15px;border:1px solid #ccc;background:#eee;line-height:48px">
                <Col span="6" style="border-right:1px solid #ccc;">
                福利种类
                    
                </Col>
                <Col span="6" style="border-right:1px solid #ccc;background:#fff;">
                缴纳基数
                    
                </Col>
                <Col span="6" style="border-right:1px solid #ccc;background:#fff;">
                个人缴纳比例(%)
                   
                </Col>
                 <Col span="6" style="border-right:1px solid #ccc;background:#fff;">
                  单位缴纳比例(%)
                  
                </Col>
            </Row>
             <Row class="code-row-bg" style="border:1px solid #ccc;border-top:none;background:#eee;line-height:40px">
                <Col span="6" style="border-right:1px solid #ccc;">
                养老保险
                    
                </Col>
                <Col span="6" style="border-right:1px solid #ccc;background:#fff;">
                  <Input v-model="value" placeholder="Enter something..." style="width: 70%"></Input>
                    
                </Col>
                <Col span="6" style="border-right:1px solid #ccc;background:#fff;">
                <Input v-model="value" placeholder="Enter something..." style="width: 70%"></Input>
                   
                </Col>
                 <Col span="6" style="border-right:1px solid #ccc;background:#fff;">
                  <Input v-model="value" placeholder="Enter something..." style="width: 70%"></Input>
                  
                </Col>
            </Row>
            <Row class="code-row-bg" style="border:1px solid #ccc;border-top:none;background:#eee;line-height:40px">
                <Col span="6" style="border-right:1px solid #ccc;">
                医疗保险
                    
                </Col>
                <Col span="6" style="border-right:1px solid #ccc;background:#fff;">
                  <Input v-model="value" placeholder="Enter something..." style="width: 70%"></Input>
                    
                </Col>
                <Col span="6" style="border-right:1px solid #ccc;background:#fff;">
                <Input v-model="value" placeholder="Enter something..." style="width: 70%"></Input>
                   
                </Col>
                 <Col span="6" style="border-right:1px solid #ccc;background:#fff;">
                  <Input v-model="value" placeholder="Enter something..." style="width: 70%"></Input>
                  
                </Col>
            </Row>
            <Row class="code-row-bg" style="border:1px solid #ccc;border-top:none;background:#eee;line-height:40px">
                <Col span="6" style="border-right:1px solid #ccc;">
                失业保险
                    
                </Col>
                <Col span="6" style="border-right:1px solid #ccc;background:#fff;">
                  <Input v-model="value" placeholder="Enter something..." style="width: 70%"></Input>
                    
                </Col>
                <Col span="6" style="border-right:1px solid #ccc;background:#fff;">
                <Input v-model="value" placeholder="Enter something..." style="width: 70%"></Input>
                   
                </Col>
                 <Col span="6" style="border-right:1px solid #ccc;background:#fff;">
                  <Input v-model="value" placeholder="Enter something..." style="width: 70%"></Input>
                  
                </Col>
            </Row>
            <Row class="code-row-bg" style="border:1px solid #ccc;border-top:none;background:#eee;line-height:40px">
                <Col span="6" style="border-right:1px solid #ccc;">
                工伤保险
                    
                </Col>
                <Col span="6" style="border-right:1px solid #ccc;background:#fff;">
                  <Input v-model="value" placeholder="Enter something..." style="width: 70%"></Input>
                    
                </Col>
                <Col span="6" style="border-right:1px solid #ccc;background:#fff;">
                <Input v-model="value" placeholder="Enter something..." style="width: 70%"></Input>
                   
                </Col>
                 <Col span="6" style="border-right:1px solid #ccc;background:#fff;">
                  <Input v-model="value" placeholder="Enter something..." style="width: 70%"></Input>
                  
                </Col>
            </Row>
            <Row class="code-row-bg" style="border:1px solid #ccc;border-top:none;background:#eee;line-height:40px">
                <Col span="6" style="border-right:1px solid #ccc;">
                生育保险
                    
                </Col>
                <Col span="6" style="border-right:1px solid #ccc;background:#fff;">
                  <Input v-model="value" placeholder="Enter something..." style="width: 70%"></Input>
                    
                </Col>
                <Col span="6" style="border-right:1px solid #ccc;background:#fff;">
                <Input v-model="value" placeholder="Enter something..." style="width: 70%"></Input>
                   
                </Col>
                 <Col span="6" style="border-right:1px solid #ccc;background:#fff;">
                  <Input v-model="value" placeholder="Enter something..." style="width: 70%"></Input>
                  
                </Col>
            </Row>
            <Row class="code-row-bg" style="border:1px solid #ccc;border-top:none;background:#eee;line-height:40px">
                <Col span="6" style="border-right:1px solid #ccc;">
                公积金
                    
                </Col>
                <Col span="6" style="border-right:1px solid #ccc;background:#fff;">
                  <Input v-model="value" placeholder="Enter something..." style="width: 70%"></Input>
                    
                </Col>
                <Col span="6" style="border-right:1px solid #ccc;background:#fff;">
                <Input v-model="value" placeholder="Enter something..." style="width: 70%"></Input>
                   
                </Col>
                 <Col span="6" style="border-right:1px solid #ccc;background:#fff;">
                  <Input v-model="value" placeholder="Enter something..." style="width: 70%"></Input>
                  
                </Col>
            </Row>
            <Row type="flex" justify="center" class="code-row-bg" style="margin-top:20px">
                <Col span="4"></Col>
                <Col span="4">
                  <Button type="primary" style="width:50%"> 保   存 </Button>
                </Col>
                <Col span="4">
                  <Button style="width:50%"> 清   空  </Button>
                </Col>
                <Col span="4"></Col>
            </Row>
        </TabPane>
        <TabPane label="奖惩记录" name="name5">

        </TabPane>
        <TabPane label="假期" name="name6">

        </TabPane>
    </Tabs>
      </div>
     
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';

let testData = {
    'histories' : [
                    {
                        businessTypes: '请假申请',
                        id: '01311',
                        name: '赵彦明',
                        englishName: 'John Brown',
                        department: '销售部',
                        quarter: '销售主管',
                        level: '￥58/3次',
                        punchTime: '2018-10-03 20:00:00',
                        state: '审批中'
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
                        title: '变动事项',
                        key: 'businessTypes',
                        align: 'center',
                    },
                    {
                        title: '提交日期',
                        key: 'id',
                        align: 'center',
                    },
                    {
                        title: '生效日期',
                        key: 'name',
                        align: 'center',
                    },
                    {
                        title: '变更详情',
                        key: 'department',
                        align: 'center',
                    }
                    
                ],
            }
        },
        methods:{
            test(){
                axios.post('/api/hotelhr/organize/structure/position/0.json', qs.stringify(
                    {
                    id: "0"
                    }
                ))
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
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
            show (index) {
               console.log(index)
               this.$router.push('/myWork/appliedLeaveDetail')
            },
            toBack() {
              this.$router.back(-1);
            }
        },
        
        created(){
             this.handleListApproveHistory();
        }
}
</script>
<style>
.demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content {
        margin-top: -16px;
    }

    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {
        background: #fff;
        padding: 16px;
    }

    .demo-tabs-style1 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
        border-color: transparent;
    }

    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
        border-color: #fff;
    }
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab{
        border-radius: 0;
        background: #fff;
    }
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active{
        border-top: 1px solid #3399ff;
    }
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: #3399ff;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>
