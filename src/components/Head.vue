<template>
    <div>
        <div class="navbar-area">
            <div class="main-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav m-auto ">
                                <li class="nav-item ">
                                    <a href="/" class="nixihuan">主页</a>
                                </li>
                                <li class="nav-item">
                                    <a href="/jobList" class="nixihuan">岗位列表</a>
                                </li>
                                <li class="nav-item">
                                    <a href="/company" class="nixihuan">企业列表</a>
                                </li>
                                <li class="nav-item" v-if="userOrCom==''">
                                    <a href="#" class=" dropdown-toggle nixihuan">求职者相关</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="/userSignUp" class="nav-link">用户注册</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/denglu" class="nav-link">用户登录</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item" v-if="userOrCom==''">
                                    <a href="#" class="dropdown-toggle  nixihuan">企业相关</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="/compSignUp" class="nav-link">企业注册</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/denglu" class="nav-link">企业登录</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item " v-if="userOrCom==2">
                                    <a href="#" class="dropdown-toggle nixihuan">求职者相关</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="/userSignUp" class="nav-link">用户注册</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/denglu" class="nav-link">用户登录</a>
                                        </li>
                                        <li class="nav-item" v-if="resumeExist=='have_resume'">
                                            <a href="/createResume" class="nav-link">完善简历</a>
                                        </li>
                                        <li class="nav-item" v-if="resumeExist=='no_resume'">
                                            <a href="/createResume" class="nav-link">新建简历</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item" v-if="userOrCom==1">
                                    <a href="#" class="dropdown-toggle  nixihuan">企业相关</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="/userSignUp" class="nav-link">企业注册</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/denglu" class="nav-link">企业登录</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/postJob" class="nav-link">发布岗位</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="dropdown-toggle nixihuan">关于系统</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="blog.html" class="nav-link">常见问题</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="blog-two.html" class="nav-link">意见反馈</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="dropdown-toggle nixihuan">关于我们</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="blog.html" class="nav-link">实习基地</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">启迪之星</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="blog-two.html" class="nav-link">联系我们</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item "
                                    v-if="this.admin=='未登录'|| this.admin==null || typeof(this.admin) =='undefined'">
                                    <a href="/denglu" class="dropdown-toggle nixihuan yidong">{{this.admin}}</a>
                                </li>
                                <li class="nav-item" v-else>
                                    <div class="dropdown-toggle nixihuan yidong" style="cursor: pointer">{{admin}}</div>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item" style="padding-left: 30%;float: right">
                                            <a href="/" class="nav-link ziti" @click="logOut()">注销</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div class="other-option">
                                <a :href=showturn class="signin-btn" v-if="showCenter!=''">{{showCenter}}</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as Cookies from "js-cookie";

    export default {
        data() {
            return {
                admin: "未登录",
                userOrCom: "",
                resumeExist: "",
                showturn: "",
                showCenter: ""
            };
        },
        methods: {
            serch() {
                let userOrCompany = Cookies.get("userOrCompany")
                if (userOrCompany == 1) {
                    this.userOrCom = '1';
                    this.showturn = '/compCenter';
                    this.showCenter = "企业中心"
                    this.axios.defaults.baseURL = 'http://47.95.195.192:8081/company'
                    this.axios.get('/getName').then(res => {
                        this.admin = res.data.data
                    }).catch(error => {
                        console.log("用户报错误" + error)
                    });
                }
                if (userOrCompany == 2) {
                    this.userOrCom = '2';
                    this.showturn = '/userCenter';
                    this.showCenter = "个人中心"
                    this.axios.defaults.baseURL = 'http://47.95.195.192:8081/user'
                    this.axios.get('/getName').then(res => {
                        this.admin = res.data.data
                    }).catch(error => {
                        console.log("用户报错误" + error)
                    });
                    this.axios.get("/resumeExist").then(res => {
                        this.resumeExist = res.data.data
                    }).catch(error => {
                        console.log("获取简历失败")
                    })
                }
            },

            logOut() {
                Cookies.set("userOrCompany", -1);
                this.axios.get('/logOut').then(res => {
                    if (res.data.data == "success") {
                        window.location = "/"
                        this.admin = "未登录"
                    }
                })
            }
        },

        mounted: function () {
            this.serch()
        },
        created: function () {
            this.admin = "未登录"
        }
    }
</script>

<style scoped>
    .nixihuan {
        font-size: 25px !important;
    }

    .yidong {
        padding-left: 0% !important;
    }

    .ziti {
        color: blue;
    }

    .Hidden {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>