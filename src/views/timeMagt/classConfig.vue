<template>
  <div id="classConfig" class="clearfix">
       <Form :model="formItem" :label-width="80" inline style="text-align:left;">
          <FormItem label="部门">
            <Select v-model="formItem.select" style="width:170px">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
        <FormItem label="打卡时间">
            <DatePicker type="date" placeholder="请选择日期" v-model="formItem.date"></DatePicker>
        </FormItem>
        <FormItem>
            <Tag color="blue">2018-02-21 ~ 2018-03-20</Tag>
        </FormItem>
        <FormItem>
            <Button type="primary">查　　询</Button>
            <Button type="ghost" style="margin-left: 8px">清　　空</Button>
        </FormItem>
    </Form>
    <!-- <Table border :columns="columns1" :data="data1"></Table> -->

    <Row>
        <Col span="7">
              <span>部门工作日默认排班: </span>
              <Select v-model="timeinterval1" style="width:160px">
                    <Option v-for="item in timeinterval" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
        </Col>
        <Col span="7">
             <span>部门休息日默认排班: </span>
              <Select v-model="timeinterval2" style="width:160px">
                    <Option v-for="item in timeinterval" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
        </Col>
        <Col span="3">
            <Button type="default">
                保存部门默认排班
            </Button>
        </Col>
        <Col span="7">
             <ButtonGroup>
                <Button type="primary">
                    第一周
                </Button>
                <Button type="primary">
                    <Icon type="chevron-left"></Icon>
                    上一周
                </Button>
                <Button type="primary">
                    下一周
                    <Icon type="chevron-right"></Icon>
                </Button>
                <Button type="primary">
                    最末周
                </Button>
            </ButtonGroup>
        </Col>
    </Row>
    <table class="flat-table">
  <tbody>
    <tr>
      <th>工号</th>
      <th>姓名</th>
      <th> </th>
      <th>2018/03/01 <br>星期一</th>
      <th>2018/03/02 <br>星期二</th>
      <th>2018/03/03 <br>星期三</th>
      <th>2018/03/04 <br>星期四</th>
      <th>2018/03/05 <br>星期五</th>
      <th>2018/03/06 <br>星期六</th>
      <th>2018/03/07 <br>星期日</th>
    </tr>
    <tr>
      <td>01311</td>
      <td>赵彦明</td>
      <td class="scheduling_info">
          <p class="scheduling">排班考勤</p>
          <p class="leave">加班/请假</p>
      </td>
      <td class="scheduling_info">
          <p class="class_info">
              <span style="line-height:30px;">
                  0830 - 请假
              </span> <br>
                 <Select v-model="classType" size="small" style="width:100px">
                    <Option v-for="item in classList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
          </p>
          
          <p class="leave">
              <span>
                  请假
              </span>
          </p>
      </td>
      <td class="scheduling_info">
          <p class="class_info">
              <span style="line-height:30px;">
                  0830 - 请假
              </span> <br>
                 <Select v-model="classType" size="small" style="width:100px">
                    <Option v-for="item in classList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
          </p>
          
          <p class="leave">
              <span>
                  请假
              </span>
          </p>
      </td>
      <td class="scheduling_info">
          <p class="class_info">
              <span style="line-height:30px;">
                  0830 - 请假
              </span> <br>
                 <Select v-model="classType" size="small" style="width:100px">
                    <Option v-for="item in classList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
          </p>
          
          <p class="leave">
              <span>
                  请假
              </span>
          </p>
      </td>
      <td class="scheduling_info">
          <p class="class_info">
              <span style="line-height:30px;">
                  0830 - 请假
              </span> <br>
                 <Select v-model="classType" size="small" style="width:100px">
                    <Option v-for="item in classList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
          </p>
          
          <p class="leave">
              <span>
                  请假
              </span>
          </p>
      </td>
      <td class="scheduling_info">
          <p class="class_info">
              <span style="line-height:30px;">
                  0830 - 请假
              </span> <br>
                 <Select v-model="classType" size="small" style="width:100px">
                    <Option v-for="item in classList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
          </p>
          
          <p class="leave">
              <span>
                  请假
              </span>
          </p>
      </td>
      <td class="scheduling_info">
          <p class="class_info">
              <span style="line-height:30px;">
                  0830 - 请假
              </span> <br>
                 <Select v-model="classType" size="small" style="width:100px">
                    <Option v-for="item in classList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
          </p>
          
          <p class="leave">
              <span>
                  请假
              </span>
          </p>
      </td>
      <td class="scheduling_info">
          <p class="class_info">
              <span style="line-height:30px;">
                  0830 - 请假
              </span> <br>
                 <Select v-model="classType" size="small" style="width:100px">
                    <Option v-for="item in classList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
          </p>
          
          <p class="leave">
              <span>
                  请假
              </span>
          </p>
      </td>
    </tr>
  </tbody>
	</table>
  </div>
</template>

<script>
export default {
  data() {
      return {
          timeinterval1: '',
          timeinterval2: '',
          timeinterval: [
              {
                  value: '0830（08:30 ~ 17:00）',
                  label: '0830（08:30 ~ 17:00）'
              }
          ],
          formItem: {
                select: '',
                date: '',/*  */
            },
             classList: [
                    {
                        value: '正常',
                        label: '正常'
                    },
                    {
                        value: '加班',
                        label: '加班'
                    },
                    {
                        value: '请假',
                        label: '请假'
                    },
                    {
                        value: '迟到',
                        label: '迟到'
                    },
                    {
                        value: '早退',
                        label: '早退'
                    },
                    {
                        value: '旷工',
                        label: '旷工'
                    },
                    {
                        value: '异常',
                        label: '异常'
                    },
                    {
                        value: '未知',
                        label: '未知'
                    }
                ],
                classType: '正常',
                classDatas: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03',
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
      }
  }
}
</script>

