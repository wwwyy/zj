<template>

  <div class="hello">
    <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="attendance" theme="light" width="auto" :open-names="['1']" @on-select="go">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                               考勤管理
                            </template>
                            <MenuItem name="attendance">考勤查询</MenuItem>
                            <MenuItem name="classAttendance">排班考勤</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                请假管理
                            </template>
                            <MenuItem name="applyForLeave">请假申请</MenuItem>
                            <MenuItem name="leaveManagement">请假申请管理</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                加班管理
                            </template>
                            <MenuItem name="overtimeApl">加班申请</MenuItem>
                            <MenuItem name="overtimeManagement">加班申请管理</MenuItem>
                        </Submenu>
                        <Submenu name="4">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                               排班管理
                            </template>
                            <MenuItem name="classDefine">排班定义</MenuItem>
                            <MenuItem name="classConfig">排班配置</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Content :style="{padding: '24px', marginTop:'24px',minHeight: '580px', background: '#fff'}">
                       <router-view/>
                    </Content>
                </Layout>
            </Layout>
  </div>
</template>

<script>
export default {
  name: 'timeMagt',
  data () {
    return {
      
    }
  },
  methods: {
      go(name){
          this.$router.push('/timeMagt/'+name)
          console.log(name)
      }
      
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
