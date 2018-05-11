<template>

  <div class="hello">
    <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="depPlanning" theme="light" width="auto" :open-names="['1']" @on-select="go">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                               部门管理
                            </template>
                            <MenuItem name="depPlanning">部门规划</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                岗位管理
                            </template>
                            <MenuItem name="postPlanning">岗位规划</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                组织结构
                            </template>
                            <MenuItem name="organizationChart">组织结构图</MenuItem>
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
          this.$router.push('/orgPlanning/'+name)
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
