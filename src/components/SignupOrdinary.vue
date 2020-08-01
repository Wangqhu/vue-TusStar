<template>
    <div>
        <section class="page-title title-bg13">
            <div class="d-table">
                <div class="d-table-cell">
                    <h2>普通用户注册</h2>
                </div>
            </div>
        </section>
        <div class="signup-section ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-8 offset-md-2 offset-lg-3">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="signup-form">
                            <el-form-item label="账号(手机号)" prop="zhanghao">
                                <el-input v-model="ruleForm.zhanghao"></el-input>
                            </el-form-item>
                            <el-form-item label="真实姓名" prop="name">
                                <el-input v-model="ruleForm.name"></el-input>
                            </el-form-item>
                            <el-form-item label="电子邮箱" prop="youxiang">
                                <el-input v-model="ruleForm.youxiang"></el-input>
                            </el-form-item>
                            <el-form-item label="登录密码" prop="password">
                                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="确认您的密码" prop="querenpassword">
                                <el-input type="password" v-model="ruleForm.querenpassword"></el-input>
                            </el-form-item>

                            <el-form-item label="验证码" prop="code">
                                <el-input type="text" v-model="code">
                                    <template slot="append">
                                        <div class="login-code" @click="refreshCode">
                                            <yanzhengma :identifyCode="identifyCode"></yanzhengma>
                                        </div>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <div class="signup-btn text-center">
                                <el-button type="primary" @click.prevent="submit()">注册</el-button>
                            </div>
                            <div class="create-btn text-center">
                                <p>
                                    已经有账号了？
                                    <a href="/denglu">登录</a>
                                </p>
                            </div>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
        <foot></foot>
        <div class="top-btn">
            <i class='bx el-icon-upload2 bx-fade-up'></i>
        </div>
    </div>
</template>

<script>
    import qs from "qs";
    import {mapActions,} from 'vuex'
    import crypto from "crypto";

    export default {
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === "") {
                    callback(new Error("请输入密码"));
                } else {
                    if (this.ruleForm.querenpassword !== "") {
                        this.$refs.ruleForm.validateField("querenpassword");
                    }
                    callback();
                }
            };

            var validatePass2 = (rule, value, callback) => {
                if (value === "") {
                    callback(new Error("请再次输入密码"));
                } else if (value !== this.ruleForm.password) {
                    callback(new Error("两次输入密码不一致!"));
                } else {
                    callback();
                }
            };

            return {
                code: '',
                identifyCodes: '1234567890abcdefjhijklinopqrsduvwxyz',
                identifyCode: '',
                ruleForm: {
                    name: "",
                    zhanghao: "",
                    youxiang: "",
                    youxiangyangzhengma: "",
                    password: "",
                    querenpassword: "",
                    yanzhengma: ""
                },

                rules:
                    {
                        code: [{required: true, message: "请输入验证码", trigger: "blur"}],
                        zhanghao: [
                            {required: true, message: "请填写账号", trigger: "blur"},
                            {min: 11, max: 11, message: "请输入正确的手机号", trigger: "blur"}
                        ],
                        name: [{required: true, message: "请填写姓名", trigger: "blur"}],
                        youxiang: [
                            {required: true, message: "请填写邮箱", trigger: "blur"},
                            {
                                type: "email",
                                message: "请输入正确的邮箱地址",
                                trigger: ["blur", "change"]
                            }
                        ],
                        password: [{required: true, validator: validatePass, trigger: "blur"}],
                        querenpassword: [{required: true, validator: validatePass2, trigger: "blur"}],
                    }
            };
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
                    this.axios
                        .post(
                            "http://47.95.195.192:8081/user/register",
                            qs.stringify({
                                phone: this.ruleForm.zhanghao,
                                name: this.ruleForm.name,
                                email: this.ruleForm.youxiang,
                                password: this.md5Hash(this.ruleForm.password)
                            })
                        )
                        .then(function (res) {
                            if (res.data.success === true) {
                                alert("注册成功")
                                window.location = "/denglu"
                            } else {
                                alert(res.data.message)
                            }
                        })
                        .catch(error => {
                            console.log("错误信息" + error);
                        });
                }
            },

        mounted() {
            this.identifyCode = ''
            this.makeCode(this.identifyCodes, 4)
        }
    };
</script>