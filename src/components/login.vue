<style lang="less">
    @import './login';
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie';
import axios from 'axios';
import qs from 'qs';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.interceptors.request.use((config) => {
//   config.headers['X-Requested-With'] = 'XMLHttpRequest'

//   return config
// })

export default {
    data () {
        return {
            form: {
                userName: '',
                password: ''
            },
            rules: {
                userName: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        handleSubmit () {
            // Cookies.set('username', this.form.userName);
            // Cookies.set('password', this.form.password);
            // this.$router.push('/')
            const that = this;
            // axios.post('/api/upload', qs.stringify())
            //         .then(function (response) {
            //             console.log(response.data);
                       
            //         })
            //         .catch(function (error) {
            //             console.log(error);
            //         });
            axios.post('/api/hotelhr/login.json', qs.stringify({username:'admin',password:'admin'}))
                    .then(function (response) {
                        console.log(response.data.success);
                        if(response.data.success) {
                            console.log(that.form);
                            Cookies.set('username', that.form.userName);
                            Cookies.set('password', that.form.password);
                            that.$router.push('/')
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });


            // this.$refs.loginForm.validate((valid) => {
            //     if (valid) {
            //         Cookies.set('user', this.form.userName);
            //         Cookies.set('password', this.form.password);
                    
            //         // this.$store.commit('setAvator', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg');
            //         if (this.form.userName === 'iview_admin') {
            //             Cookies.set('access', 0);
            //         } else {
            //             Cookies.set('access', 1);
            //         }
                    
            //         this.$router.push('/')
            //     }
            // });
        }
    },
};
</script>

<style>

</style>


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
