<template>

  <div class="hello">
    <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="attendance" theme="light" width="auto" :open-names="['1']" @on-select="test">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                               月度薪资管理
                            </template>
                            <MenuItem name="salaryGeneration">薪资生成</MenuItem>
                            <MenuItem name="salaryAdjust">生成薪资调整</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                月度绩效管理
                            </template>
                            <MenuItem name="2-1">绩效完成情况</MenuItem>
                            <MenuItem name="2-2">每日之星</MenuItem>
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
      test(name){
          this.$router.push('/remunerationMagt/'+name)
          console.log(name)
      }
      
  }
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
