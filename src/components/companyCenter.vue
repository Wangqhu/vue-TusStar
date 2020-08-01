<template>
    <div>
        <Head></Head>
        <section class="page-title title-bg9">
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
        <section class="section" id="app">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-sm-center">
                            <upload-img></upload-img>
                            <h4 class="mt-3"><a href="#" class="text-dark">{{info.name}}</a></h4>
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item mr-3">
                                    <p class="text-muted mb-0" style="float: none"><i
                                            class="mdi mdi-map-marker mr-2"></i>{{info.area}}</p>
                                </li>

                                <li class="list-inline-item">
                                    <p class="text-success mb-0"><i class="mdi el-icon-s-flag mdi-18px mr-2"></i>通过验证
                                    </p>
                                </li>
                            </ul>
                            <ul class="list-inline mb-2">

                                <li class="list-inline-item mr-3">
                                    <p class="text-muted"><i class="mdi mdi-email mr-2"></i>{{info.email}}</p>
                                </li>
                                <li class="list-inline-item">
                                    <p class="text-muted"><i class="mdi mdi-cellphone-iphone mr-2"></i>{{info.headQuarters}}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 mt-4 pt-2">
                        <h4>公司简介 :</h4>
                        <div class="rounded border p-4 mt-3" style="height: 80%">
                            <p class="text-muted">{{info.introduction}}</p>
                        </div>
                    </div>
                </div>
                <div style="margin-top: 20px;">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"
                               role="tab" aria-controls="pills-home" aria-selected="true">待处理</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"
                               role="tab" aria-controls="pills-profile" aria-selected="false">历史记录</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-profile-tab1" data-toggle="pill" href="#pills-profile1"
                               role="tab" aria-controls="pills-profile" aria-selected="false">已发布岗位</a>
                        </li>
                    </ul>
                </div>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                         aria-labelledby="pills-home-tab">
                        <table class="table table-borderless">
                            <thead class="thead-dark">
                            <tr>
                                <th scope="col">姓名</th>
                                <th scope="col">学校</th>
                                <th scope="col">专业</th>
                                <th scope="col">投递岗位</th>
                                <th scope="col">手机号</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody id="dv">
                            <tr v-for="(item1,i) in infoList" :key="i" v-if="item1.status === 'wait'">
                                <td>{{item1.name}}</td>
                                <td>{{item1.school}}</td>
                                <td>{{item1.major}}</td>
                                <td>{{item1.jobName}}</td>
                                <td>***********</td>
                                <td>
                                    <button type="button" id="btn1" class="btn btn-sm  btn-primary"
                                            v-on:click="notify(item1)">通知面试
                                    </button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-sm btn-info"
                                            v-on:click="resumeInfo(item1)">查看简历
                                    </button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-sm  btn-danger"
                                            v-on:click="reject(item1)">拒绝
                                    </button>
                                </td>
                            </tr>
                            <tr v-for="(item2,i) in infoList" v-if="item2.status === 'interview'" :key="i">
                                <td>{{item2.name}}</td>
                                <td>{{item2.school}}</td>
                                <td>{{item2.major}}</td>
                                <td>{{item2.jobName}}</td>
                                <td>{{item2.phone}}</td>
                                <td>
                                    <button type="button" id="btn3" class="btn btn-sm  btn-warning"
                                            v-on:click="notify(item2)">通知报道
                                    </button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-sm btn-info"
                                            v-on:click="resumeInfo(item2)">查看简历
                                    </button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-sm  btn-danger"
                                            v-on:click="reject(item2)">拒绝
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <table class="table table-borderless">
                            <thead class="thead-dark">
                            <tr>
                                <th scope="col">姓名</th>
                                <th scope="col">学校</th>
                                <th scope="col">专业</th>
                                <th scope="col">投递岗位</th>
                                <th scope="col">手机号</th>
                                <th scope="col">转态</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(item3,i) in infoList"
                                v-if="item3.status === 'work' || item3.status === 'refuse' "
                                :key="i">
                                <td>{{item3.name}}</td>
                                <td>{{item3.school}}</td>
                                <td>{{item3.major}}</td>
                                <td>{{item3.jobName}}</td>
                                <td>{{item3.phone}}</td>
                                <td v-if="item3.status==='work'">已录用</td>
                                <td v-if="item3.status==='refuse'">已拒绝</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-pane fade" id="pills-profile1" role="tabpanel" aria-labelledby="pills-profile-tab1">
                        <table class="table table-borderless">
                            <thead class="thead-dark">
                            <tr>
                                <th scope="col">已发布的岗位</th>
                            </tr>
                            </thead>
                            <tbody v-for="(job,i) in currentPageData" :key="i">
                            <tr>
                                <div class="col-lg-8 col-md-7" style="max-width: 100%">
                                    <div class="shadow rounded p-4 mt-4">
                                        <img src="../assets/img/1.png" alt="" height="90"
                                             class="float-left shadow rounded-pill mr-3">
                                        <div class="d-block overflow-hidden">
                                            <h6 class="text-muted font-weight-light float-right mb-0"><i
                                                    class="mdi mdi-clock-outline mr-1"></i>{{job.postTime}}</h6>
                                            <h5 class="mb-1"><a :href="'jobDetail?id='+job.id+'&name='+job.jobName"
                                                                class="text-dark">{{job.jobName}}</a></h5>
                                            <small class="text-muted font-weight-bold">{{job.type}}</small>
                                            <ul class="employers-icons list-inline mb-1">
                                                <li class="list-inline-item mr-0 text-success"><i
                                                        class="el-icon-star-on"></i></li>
                                                <li class="list-inline-item mr-0 text-success"><i
                                                        class="el-icon-star-on"></i></li>
                                                <li class="list-inline-item mr-0 text-success"><i
                                                        class="el-icon-star-on"></i></li>
                                                <li class="list-inline-item mr-0 text-success"><i
                                                        class="el-icon-star-on"></i></li>
                                                <li class="list-inline-item mr-0 text-success"><i
                                                        class="el-icon-star-on"></i></li>
                                            </ul>
                                            <p class="text-muted mb-0">{{job.jobDesc}}</p>
                                        </div>
                                    </div>
                                </div>
                            </tr>
                            </tbody>
                        </table>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-center">
                                <div>
                                    <li class="page-item" @click="prevPage()">
                                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                                            <i class=' el-icon-arrow-left'></i>
                                        </a>
                                    </li>
                                </div>
                                <li class="page-item"><a class="page-link " href="#" @click="prevPage()"
                                                         v-if="currentPage-1!=0">{{currentPage-1}}</a></li>
                                <li class="page-item"><a class="page-link active" href="#">{{currentPage}}</a></li>
                                <li class="page-item"><a class="page-link" href="#" @click="nextPage()">{{currentPage+1}}</a>
                                </li>
                                <li class="page-item" @click="nextPage()">
                                    <a class="page-link" href="#">
                                        <i class='el-icon-arrow-right'></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <foot style="margin-top: 3%"></foot>
    </div>
</template>

<script>
    $(function () {
        $("[data-toggle='popover']").popover();
    });
</script>
<script>
    import qs from 'qs'
    import * as Cookies from "js-cookie";

    export default {
        data() {
            return {
                info: "",
                infoList: [],
                jobList: [],
                item1: "",
                totalPage: 1,
                currentPage: 1,
                pageSize: 5,
                currentPageData: [],
            }
        },

        methods: {
            compDetail() {
                let userOrCompany = Cookies.get("userOrCompany")
                if (userOrCompany === 1) {
                    this.axios.defaults.baseURL = 'http://47.95.195.192:8081/company'
                }
                if (userOrCompany === 2) {
                    this.axios.defaults.baseURL = 'http://47.95.195.192:8081/user'
                }
                this.axios.get('/companyDetail/' + Cookies.get('id')).then(res => {
                    this.info = res.data.data,
                        this.Jobdetail()
                }).catch(error => {
                    console.log("查询失败" + error)
                })
            },

            pendings() {
                let userOrCompany = Cookies.get("userOrCompany")
                if (userOrCompany === 1) {
                    this.axios.defaults.baseURL = 'http://47.95.195.192:8081/company'
                }
                if (userOrCompany === 2) {
                    this.axios.defaults.baseURL = 'http://47.95.195.192:8081/user'
                }
                this.axios.get('/getPendings').then(res => {
                    if (res.data.success == true) {

                        this.infoList = res.data.data
                    }
                }).catch(err => {
                    console.log("待处理的申请 :" + err)
                })
            },

            notify(item1) {
                if (item1.status === 'wait') {
                    item1.status = 'interview'
                    this.axios.post('/interview', qs.stringify({
                        phone: item1.phone,
                        jobName: item1.jobName
                    })).then(res => {
                    }).catch(err => {
                        console.log("通知面试失败")
                    })
                } else if (item1.status === 'interview') {
                    item1.status = 'work'
                    this.axios.post('/work', qs.stringify({
                        phone: item1.phone,
                        jobName: item1.jobName
                    })).then(res => {
                    }).catch(err => {
                        console.log("通知入职失败")
                    })
                }
            },

            resumeInfo(item2) {
                window.location = '/resume-style?phone=' + item2.phone
            },

            reject(item3) {
                this.axios.post('/refuse', qs.stringify({
                    phone: item3.phone,
                    jobName: item3.jobName
                })).then(res => {
                    item3.status = 'refuse';
                }).catch(err => {
                    console.log("拒绝申请失败")
                })
            },

            Jobdetail() {
                let userOrCompany = Cookies.get("userOrCompany")
                if (userOrCompany === 1) {
                    this.axios.defaults.baseURL = 'http://47.95.195.192:8081/company'
                }
                if (userOrCompany === 2) {
                    this.axios.defaults.baseURL = 'http://47.95.195.192:8081/user'
                }
                this.axios.get('/postedJobs/' + this.info.name).then(res => {
                    this.jobList = res.data.data,
                        this.totalPage = Math.ceil(this.jobList.length / this.pageSize);
                    this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
                    this.setCurrentPageData();
                }).catch(error => {
                    console.log("查询失败" + error)
                })
            },

            setCurrentPageData() {
                let begin = (this.currentPage - 1) * this.pageSize;
                let end = this.currentPage * this.pageSize;
                this.currentPageData = this.jobList.slice(
                    begin,
                    end
                );
            },

            prevPage() {
                if (this.currentPage == 1) return;
                this.currentPage--;
                this.setCurrentPageData();
            },

            nextPage() {
                if (this.currentPage == this.totalPage) return;
                this.currentPage++;
                this.setCurrentPageData();
            }
        },

        mounted: function () {
            this.compDetail()
            this.pendings()
        },
    }
</script>