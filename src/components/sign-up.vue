<template>
    <div>
        <section class="page-title title-bg12">
            <div class="d-table">
                <div class="d-table-cell">
                    <h2>登录</h2>
                    <ul>
                        <li>登录中心</li>
                    </ul>
                </div>
            </div>
            <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </section>
        <div class="signin-section ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-8 offset-md-2 offset-lg-3">
                        <el-form :rules="rules" :model="loginForm" class="signin-form">
                            <div class="form-group">
                                <label>用户名</label>
                                <input type="text" class="form-control" placeholder="请输入用户名" required
                                       v-model="loginForm.username">
                            </div>
                            <div class="form-group">
                                <label>密码</label>
                                <input type="password" class="form-control" placeholder="请输入密码" required
                                       v-model="loginForm.password">
                            </div>
                            <el-form-item prop="code">
                                <el-input type="text" v-model="code">
                                    <template slot="append">
                                        <div class="login-code" @click="refreshCode">
                                            <yanzhengma :identifyCode="identifyCode"></yanzhengma>
                                        </div>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <div style="margin-left:25%">
                                <el-radio v-model="radio" value="1" label="1">企业用户</el-radio>
                                <el-radio v-model="radio" value="2" label="2">学生用户</el-radio>
                            </div>
                            <el-button type="primary" style="width: 100%;margin-top:30px;" @click="submit()">登陆
                            </el-button>
                            <div class="create-btn text-center">
                                <p>
                                    还没有注册账号？
                                </p>
                                <p>
                                    <a href="/userSignUp">求职者注册</a></p>
                                <p>
                                    <a href="/compSignUp">企业注册</a>
                                </p>
                            </div>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
        <foot></foot>
    </div>
</template>

<script>
    import qs from 'qs'
    import {mapActions,} from 'vuex'
    import * as Cookies from "js-cookie";
    import crypto from "crypto";

    export default {
        data() {
            return {
                code: '',
                identifyCodes: '1234567890abcdefjhijklinopqrsduvwxyz',
                identifyCode: '',
                loginForm: {
                    username: '',
                    password: '',
                },
                radio: '1',
                rules: {
                    username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                    password:
                        [{required: true, message: '请输入密码', trigger: 'blur'}],
                },

                list: []
            }
        },
        methods:
            {
                ...mapActions("d2admin/account", ["login"]),
                refreshCode() {
                    this.identifyCode = ''
                    this.makeCode(this.identifyCodes, 4)
                },

                makeCode(o, l) {
                    for (let i = 0; i < l; i++) {
                        this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
                    }
                },

                randomNum(min, max) {
                    return Math.floor(Math.random() * (max - min) + min)
                },

                // MD5 Hash
                md5Hash(text) {
                    var hash = crypto.createHash("md5");
                    hash.update(text);
                    // 16进制编码
                    return hash.digest("hex");
                },

                submit() {
                    if (this.code.toLowerCase() !== this.identifyCode.toLowerCase()) {
                        this.$message.error('请填写正确验证码')
                        this.refreshCode()
                        return
                    } else {
                        this.submitform()
                    }
                },

                submitform() {
                    if (this.radio == 1) {
                        Cookies.set('userOrCompany', 1);
                        this.axios.defaults.baseURL = 'http://47.95.195.192:8081/company'
                    }
                    if (this.radio == 2) {
                        Cookies.set('userOrCompany', 2);
                        this.axios.defaults.baseURL = 'http://47.95.195.192:8081/user'
                    }
                    if (this.loginForm.username != '' && this.loginForm.password != '') {
                        this.axios.post(
                            '/login',
                            qs.stringify({
                                phone: this.loginForm.username,
                                password: this.md5Hash(this.loginForm.password)
                            }))
                            .then(res => {
                                if (res.data.success == true) {
                                    Cookies.set("id", res.data.data)
                                    window.location = "/"
                                } else {
                                    alert(res.data.message)
                                }
                            })
                            .catch(error => {
                                console.log("错误信息" + error)
                            })
                    } else {
                        window.location = '/denglu'
                    }
                }
            },

        mounted: function () {
            this.identifyCode = '',
                this.makeCode(this.identifyCodes, 4)
        }
    }
</script>

