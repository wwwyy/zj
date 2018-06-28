<template>
    <div id="postPlanning">
    
        <Row type="flex" justify="space-around">
    
            <Col span="11" class="contentBox" style="background: #f5f7f9;">
    
            <Tree :data="data1" :load-data="loadData" @on-select-change="nodeInfo" style="padding-top:10px;text-align:left;padding-left:60px"></Tree>
    
            </Col>
    
            <Col span="11" class="contentBox" style="background: #f5f7f9;padding: 30px 20px 0;">
    
            <div class="infoTable">
    
                <Row type="flex">
    
                    <Col span="4">
    
                    <p class="infoName">申请人工号</p>
    
                    </Col>
    
                    <Col span="20">
    
                    <p class="info">01311</p>
    
                    </Col>
    
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
    import axios from 'axios';
    
    import qs from 'qs';
    
    export default {
    
        data() {
    
            return {
    
                data1: [{
    
                    title: 'parent',
    
                    loading: false,
    
                    children: []
    
                }],
    
                columns7: [{
    
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
    
                data6: [{
    
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
    
        beforeCreate() {
    
            const that = this;
    
            axios.post('/api/hotelhr/organize/department.json', qs.stringify({
    
                    id: ''
    
                }))
    
                .then(function(response) {
    
                    let Result = response.data.result;
    
                    let treeData = [];
    
                    Result.forEach(function(item) {
    
                        if (item.subCount !== 0) {
    
                            treeData.push({
    
                                id: item.id,
    
                                title: item.name,
    
                                information: item.information,
    
                                isDivision: item.isDivision,
    
                                parentId: item.parentId,
    
                                expand: false,
    
                                loading: false,
    
                                children: []
    
                            })
    
                        } else {
    
                            treeData.push({
    
                                id: item.id,
    
                                title: item.name,
    
                                information: item.information,
    
                                isDivision: item.isDivision,
    
                                parentId: item.parentId,
    
                            })
    
                        }
    
    
    
                    });
    
                    that.data1 = treeData;
    
    
                })
    
                .catch(function(error) {
    
                    console.log(error);
    
                });
    
        },
    
        methods: {
    
            nodeInfo(item) {
    
                this.depData = item;
    
    
                const that = this;
    
                axios.post('/api/hotelhr/organize/position/department/' + item[0].id + '.json')
    
                    .then(function(response) {
    
                        console.log(response)
    
                    })
    
                    .catch(function(error) {
    
                        console.log(error);
    
                    });
    
            },
    
            loadData(item, callback) {
                console.log(item)
                const that = this;
    
                axios.post('/api/hotelhr/organize/department.json', qs.stringify({
    
                        id: item.id
    
                    }))
    
                    .then(function(response) {
    
                        let Result = response.data.result;
    
                        let treeData = [];
    
                        Result.forEach(function(item) {
    
                            if (item.subCount !== 0) {
    
                                treeData.push({
    
                                    id: item.id,
    
                                    title: item.name,
    
                                    information: item.information,
    
                                    isDivision: item.isDivision,
    
                                    parentId: item.parentId,
    
                                    expand: false,
    
                                    loading: false,
    
                                    children: []
    
                                })
    
                            } else {
    
                                treeData.push({
    
                                    id: item.id,
    
                                    title: item.name,
    
                                    information: item.information,
    
                                    isDivision: item.isDivision,
    
                                    parentId: item.parentId,
    
                                })
    
                            }
    
    
    
                        });
    
                        that.laodingData = treeData;
    
                    })
    
                    .catch(function(error) {
    
                        console.log(error);
    
                    });
    
                setTimeout(() => {
    
                    const data = that.laodingData
    
                    callback(data);
    
                }, 1000);
    
            },
    
            show(index) {
    
                this.$Modal.info({
    
                    title: 'User Info',
    
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
    
                })
    
            },
    
            remove(index) {
    
                this.data6.splice(index, 1);
    
            }
    
        }
    
    }
</script>
<style>
    .infoTable {
    
        border: 1px solid #ccc;
    
        line-height: 40px;
    
        height: 42px;
    
        ;
    
    }
    
    
    
    .infoTable .infoName {
    
        background: #eee;
    
    }
    
    
    
    .infoTable .info {
    
        background: #fff;
    
    }
</style>
