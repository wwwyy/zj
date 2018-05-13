<template>
  <div id="postPlanning">
    <Row type="flex" justify="space-around">
        <Col span="11" class="contentBox" style="background: #f5f7f9;" >
          <Tree :data="data3" :load-data="loadData" show-checkbox></Tree>
        </Col>
        <Col span="11" class="contentBox" style="background: #f5f7f9;padding: 30px 20px 0;" >
            <div class="infoTable">
               <Row type="flex">
                  <Col span="4"><p class="infoName">申请人工号</p></Col>
                  <Col span="20"><p class="info">01311</p></Col>
              </Row> 
            </div>
            <div style="text-align:left;margin:20px 0;">
              <Button type="primary" icon="ios-plus">新增岗位</Button>
            </div>
            <Table border :columns="columns7" :data="data6"></Table>
        </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data () {
            return {
                data3: [
                    {
                        title: 'parent',
                        loading: false,
                        children: []
                    }
                ],
                columns7: [
                    {
                        title: '岗位名称',
                        key: 'name',
                        align: 'center',
                        width: 100
                    },
                    {
                        title: '编制',
                        key: 'age',
                        align: 'center'
                    },
                    {
                        title: '是否部门长',
                        key: 'address',
                        align: 'center',
                        width: 100
                    },
                    {
                        title: '职级',
                        key: 'level',
                        align: 'center'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        align: 'center',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    style: {
                                        color: '#2b85e4'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '修改'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    style: {
                                        color: '#ed3f14'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        name: '采购经理',
                        age: 18,
                        address: '是',
                        level: 'JB6'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: '是',
                        level: 'JB6'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: '是',
                        level: 'JB6'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: '是',
                        level: 'JB6'
                    }
                ]
            }
        },
        methods: {
            loadData (item, callback) {
                setTimeout(() => {
                    const data = [
                        {
                            title: 'children',
                            loading: false,
                            children: []
                        },
                        {
                            title: 'children',
                            loading: false,
                            children: []
                        }
                    ];
                    callback(data);
                }, 1000);
            },
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
}
</script>
<style>
  .infoTable {
    border: 1px solid #ccc;
    line-height: 40px;
    height: 42px;;
  }
  .infoTable .infoName {
    background: #eee;
  }
  .infoTable .info {
    background: #fff;
  }
</style>
