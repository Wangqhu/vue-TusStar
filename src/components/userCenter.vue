<template>
    <div>
        <Head></Head>
        <section class="page-title title-bg4">
            <div class="d-table">
                <div class="d-table-cell">
                    <h2>个人中心</h2>
                    <ul>
                        <li>
                            <a href="/">主页</a>
                        </li>
                        <el-icon class="el-icon-caret-right"></el-icon>
                        <li>个人中心</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="section" style="margin-top: 80px">
            <div class="container">
                <!--Title-->
                <div style="margin-bottom: 10%">
                    <div class="col-md-3">
                        <h5 class="text-dark">已投递简历</h5>
                    </div>
                    <div class="col-md-3" style="float: right">
                        <div class="theme-btn">
                            <a href="/createResume">
                                <button class="btn btn-primary btn-block">
                                    <a href="/createResume" style="color: white">{{showtype}}</a>

                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row">

                    <appliedJobs v-for="(appliedjob,i) in appliedjobs" :key="i"
                                 :appliedjobs="appliedjobs[i]"></appliedJobs>

                </div>
            </div>
        </section>
        <foot style="padding-top: 5%"></foot>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                jobs: [],
                appliedjobs: [],
                showtype: ""
            }
        },

        methods: {
            getjoblist() {
                this.axios
                    .get("http://47.95.195.192:8081/user/jobList")
                    .then(res => {
                        this.jobs = res.data.data;
                    })
                    .catch(error => {
                        console.log("岗位列表无数据,错误信息：" + error);
                    });
                this.axios
                    .get("http://47.95.195.192:8081/user/getUserAppliedJobs")
                    .then(res => {
                        this.appliedjobs = res.data.data
                    })
                    .catch(error => {
                        console.log("status无数据,错误信息：" + error);
                    });
            },

            geren() {
                this.axios.get('http://47.95.195.192:8081/user/resumeExist').then(res => {
                    if (res.data.data == 'have_resume') {
                        this.showtype = "完善简历"
                    } else if (res.data.data == 'no_resume') {
                        this.showtype = "新建简历"
                    }
                })
            }
        },

        mounted() {
            this.getjoblist()
        },

        created: function () {
            this.geren()
        }
    }
</script>
