<template>

  <div id="personMagt">
    <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="empInfoMagt" theme="light" width="auto" :open-names="['1']" @on-select="go">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                               员工管理
                            </template>
                            <MenuItem name="empInfoMagt">员工信息管理</MenuItem>
                            <MenuItem name="empChanges">人事变动</MenuItem>
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
  name: 'personMagt',
  data () {
    return {
      
    }
  },
  methods: {
      go(name){
          this.$router.push(name)
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
