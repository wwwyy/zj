<template>
  <div id="classAttendance">
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
    <Table border :columns="columns1" :data="data1"></Table>
  </div>
</template>

<script>
export default {
  data() {
      return {
          formItem: {
                select: '',
                date: '',/*  */
            },
            columns1: [
                   {
                        title: '工号',
                        key: 'id'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: ' ',
                        key: 'type'
                    },
                    {
                        title: '2018/03/01 111 ',
                        key: 'type'
                    },
                    {
                        title: ' ',
                        key: 'type'
                    },
                    {
                        title: ' ',
                        key: 'type'
                    },
                    {
                        title: ' ',
                        key: 'type'
                    },
                    
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
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

