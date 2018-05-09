<template>

  <div id="myWork">
    <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="applied" theme="light" width="auto" :open-names="['1']" @on-select="go">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                               我的工作
                            </template>
                            <MenuItem name="applied">已申请</MenuItem>
                            <MenuItem name="classAttendance">待审批</MenuItem>
                            <MenuItem name="applied">已审批</MenuItem>
                            <MenuItem name="classAttendance">我的班次</MenuItem>
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
  name: 'myWork',
  data () {
    return {
      
    }
  },
  methods: {
      go(name){
          this.$router.push('/myWork/'+name)
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
