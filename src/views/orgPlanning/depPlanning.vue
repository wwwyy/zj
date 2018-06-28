<template>
  <div id="depPlanning">
      <Row type="flex" justify="space-around">
        <Col span="11" class="contentBox"  style="background: #f5f7f9;" >
         <div style="margin-top:20px;text-align:right">
          <Button type="primary" @click="addDep">新增部门</Button>
          <Button @click="removeDep">删除部门</Button>
         </div>
           <Tree :data="data1" :load-data="loadData" @on-select-change="nodeInfo" style="padding-top:10px;text-align:left;padding-left:60px"></Tree>
        </Col>
        <Col span="11" class="contentBox" style="background: #f5f7f9;padding: 60px 20px 0;" >
            <div>
            <i-form ref="formValidate" :model="formValidate" :label-width="80">
                <form-item label="上级部门" prop="parentName" >
            <i-input v-model="formValidate.parentName" readonly placeholder="请输入..."></i-input>
        </form-item>
        <form-item label="是否分部" prop="isDivision">
            <i-select v-model="formValidate.isDivision" placeholder="请选择...">
                <i-option value="0" key="0">否</i-option>
                <i-option value="1" key="1">是</i-option>
            </i-select>
        </form-item>
        <form-item label="部门名称" prop="name">
            <i-input v-model="formValidate.name" placeholder="请输入..."></i-input>
        </form-item>

        
        
        <form-item label="部门信息" prop="information">
            <i-input v-model="formValidate.information" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></i-input>
        </form-item>
        <form-item>
            <i-button type="primary" @click="handleSubmit('formValidate')" size="large" style="width:100px"> 保 存 </i-button>
            <i-button type="ghost" @click="handleReset('formValidate')" size="large" style="width:100px;margin-left: 8px"> 清 空 </i-button>
        </form-item>
    </i-form>
            </div>
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
      depData: null,
      laodingData: [],
       data1: [
                ],
      buttonProps: {
        type: "ghost",
        size: "small"
      },
      formValidate: {
        parentName: "",
        isDivision: "",
        name: "",
        information: "",
        id: ""
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur"
          }
        ],
        mail: [
          {
            required: true,
            message: "Mailbox cannot be empty",
            trigger: "blur"
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" }
        ],
        city: [
          {
            required: true,
            message: "Please select the city",
            trigger: "change"
          }
        ],
        desc: [
          {
            required: true,
            message: "Please enter a personal introduction",
            trigger: "blur"
          },
          {
            type: "string",
            min: 20,
            message: "Introduce no less than 20 words",
            trigger: "blur"
          }
        ]
      }
    };
  },
  beforeCreate( ) {
    const that = this;
    axios.post('/api/hotelhr/organize/department.json', qs.stringify({id:''}))
            .then(function (response) {
                let Result = response.data.result;
                let treeData = [];
                Result.forEach(function(item){
                  if(item.subCount!==0){
                    treeData.push(
                      {
                        id: item.id,
                        title: item.name,
                        information: item.information,
                        isDivision: item.isDivision,
                        parentId: item.parentId,
                        expand: false,
                        loading: false,
                        children: []
                      }
                    )
                  } else {
                    treeData.push(
                      {
                        id: item.id,
                        title: item.name,
                        information: item.information,
                        isDivision: item.isDivision,
                        parentId: item.parentId,
                      }
                    )
                  }
                  
                });
                that.data1 = treeData;
                console.log(treeData)
            })
            .catch(function (error) {
                console.log(error);
            });
  },
  methods: {
    nodeInfo(item) {
      this.depData = item;
      console.log(this.depData)
      const that = this;
      axios.post('/api/hotelhr/organize/department/'+item[0].id+'.json')
        .then(function (response) {
          
          let data = response.data.result
          if(!data) {
            that.handleReset('formValidate')
          }

          that.formValidate.parentName = data.parentDepartmentName;
          that.formValidate.isDivision = data.isDivision;
          that.formValidate.name = data.name;
          that.formValidate.information = data.information;
          that.formValidate.id  = data.id
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    loadData (item, callback) {
        const that = this;
        axios.post('/api/hotelhr/organize/department.json', qs.stringify({id:item.id}))
            .then(function (response) {
                let Result = response.data.result;
                let treeData = [];
                Result.forEach(function(item){
                  if(item.subCount!==0){
                    treeData.push(
                      {
                        id: item.id,
                        title: item.name,
                        information: item.information,
                        isDivision: item.isDivision,
                        parentId: item.parentId,
                        expand: false,
                        loading: false,
                        children: []
                      }
                    )
                  } else {
                    treeData.push(
                      {
                        id: item.id,
                        title: item.name,
                        information: item.information,
                        isDivision: item.isDivision,
                        parentId: item.parentId,
                      }
                    )
                  }
                  
                });
                that.laodingData = treeData;
                console.log(treeData)
            })
            .catch(function (error) {
                console.log(error);
            });
        setTimeout(() => {
            const data = that.laodingData
            callback(data);
        }, 1000);
    },
    renderContent(h, { root, node, data }) {
      return h(
        "span",
        {
          style: {
            display: "inline-block",
            width: "100%"
          }
        },
        [
          h("span", [
            h("Icon", {
              props: {
                type: "ios-paper-outline"
              },
              style: {
                marginRight: "8px"
              }
            }),
            h("span", data.title)
          ]),
          h(
            "span",
            {
              style: {
                display: "inline-block",
                float: "right",
                marginRight: "32px"
              }
            },
            [
              h("Button", {
                props: Object.assign({}, this.buttonProps, {
                  icon: "ios-plus-empty"
                }),
                style: {
                  marginRight: "8px"
                },
                on: {
                  click: () => {
                    this.append(data);
                  }
                }
              }),
              h("Button", {
                props: Object.assign({}, this.buttonProps, {
                  icon: "ios-minus-empty"
                }),
                on: {
                  click: () => {
                    this.remove(root, node, data);
                  }
                }
              })
            ]
          )
        ]
      );
    },
    addDep(){
      const data = this.depData[0]

      const that = this;
      axios.post('/api/hotelhr/organize/department/add.json', {
          information: "",
          isDivision: 0,
          name: "新增部门",
          parentId: data.id
        }).then(function(response){
          console.log(response)
          const children = data.children || [];
          children.push({
          title: "新增部门",
          expand: true,
          id:response.data.result.id
        });
        that.$set(data, "children", children);
        })
     
     
    },
    removeDep(){
       const that = this;
      axios.post('/api/hotelhr/organize/department/'+this.depData[0].id+'/delete.json')
        .then(function(){
         
    axios.post('/api/hotelhr/organize/department.json', qs.stringify({id:''}))
            .then(function (response) {
                let Result = response.data.result;
                let treeData = [];
                Result.forEach(function(item){
                  if(item.subCount!==0){
                    treeData.push(
                      {
                        id: item.id,
                        title: item.name,
                        information: item.information,
                        isDivision: item.isDivision,
                        parentId: item.parentId,
                        expand: false,
                        loading: false,
                        children: []
                      }
                    )
                  } else {
                    treeData.push(
                      {
                        id: item.id,
                        title: item.name,
                        information: item.information,
                        isDivision: item.isDivision,
                        parentId: item.parentId,
                      }
                    )
                  }
                  
                });
                that.data1 = treeData;
                console.log(treeData)
            })
            .catch(function (error) {
                console.log(error);
            });
        })
    },
    append(data) {
      console.log(data)
      const children = data.children || [];
      children.push({
        title: "新增部门",
        expand: true
      });
      this.$set(data, "children", children);
    },
    remove(root, node, data) {
      const parentKey = root.find(el => el === node).parent;
      const parent = root.find(el => el.nodeKey === parentKey).node;
      const index = parent.children.indexOf(data);
      parent.children.splice(index, 1);
    },
    handleSubmit(name) {
      const that = this;
      axios.post('/api/hotelhr/organize/department/update.json',{
  "id": that.depData[0].id,
  "information": that.formValidate.information,
  "isDivision": that.formValidate.isDivision,
  "name": that.formValidate.name
})
        .then(function (response) {
           that.$Message.success("信息更新成功");
            axios.post('/api/hotelhr/organize/department.json', qs.stringify({id:''}))
            .then(function (response) {
                let Result = response.data.result;
                let treeData = [];
                Result.forEach(function(item){
                  if(item.subCount!==0){
                    treeData.push(
                      {
                        id: item.id,
                        title: item.name,
                        information: item.information,
                        isDivision: item.isDivision,
                        parentId: item.parentId,
                        expand: false,
                        loading: false,
                        children: []
                      }
                    )
                  } else {
                    treeData.push(
                      {
                        id: item.id,
                        title: item.name,
                        information: item.information,
                        isDivision: item.isDivision,
                        parentId: item.parentId,
                      }
                    )
                  }
                  
                });
                that.data1 = treeData;
                console.log(treeData)
            })
            .catch(function (error) {
                console.log(error);
            });
          })

    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>
<style>
#depPlanning .contentBox,
#postPlanning .contentBox {
  min-height: 700px;
}
#depPlanning .blank,
#postPlanning .blank {
  background: #fff;
}
#depPlanning .ivu-tree ul,
#postPlanning .ivu-tree ul {
  font-size: 20px;
  /* text-align: left;
        margin-left: 60px;
        margin-top: 60px; */
}
</style>
