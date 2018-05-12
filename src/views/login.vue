<style lang="less">
    @import './login.less';
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
                            <i-input v-model="form.username" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </i-input>
                        </FormItem>
                        <FormItem prop="password">
                            <i-input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </i-input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
                    <p class="login-tip">输入任意用户名和密码即可</p>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
    import Cookies from 'js-cookie';
    import {login} from '@/api/user';
    import {department} from '@/libs/util';

    export default {
        data: function () {
            return {
                form: {
                    username: 'yunhu1',
                    password: 'ys12345678'
                },
                rules: {
                    username: [
                        {required: true, message: '账号不能为空', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '密码不能为空', trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            handleSubmit() {
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        login(this.form)
                            .then(response => {
                                Cookies.set('TokenKey', response.data.token);
                                Cookies.set('user', response.data.user.username);
                                Cookies.set('userName', response.data.user.name);
                                Cookies.set('access', response.data.access);
                                Cookies.set('department', department[response.data.access]);
                                Cookies.set('lastLogin', response.data.user.last_login);
                                this.$store.commit(
                                    'setAvator',
                                    'https://i.loli.net/2017/08/21/599a521472424.jpg'
                                );
                                this.$router.push({
                                    name: 'home_index'
                                });
                            })
                            .catch(() => {
                            });
                    }
                });
            }
        }
    };
</script>

<style>

</style>
