<template>
    <div>
        <Head></Head>
        <section class="page-title title-bg9">
            <div class="d-table">
                <div class="d-table-cell">
                    <h2>企业详情</h2>
                    <ul>
                        <li>
                            <a href="/">主页</a>
                        </li>
                        <el-icon class="el-icon-caret-right"></el-icon>
                        <li> 企业详情</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-sm-center">
                            <img src="../assets/img/1.png" style="width:200px;height:150px"
                                 class="img-fluid mx-md-auto d-block" v-if="path==''">
                            <img :src="path" style="width:200px;height:200px; border-radius: 50%"
                                 class="img-fluid mx-md-auto d-block" v-if="path!=''">
                            <h4 class="mt-3"><a href="#" class="text-dark">{{comdetail.name}}</a></h4>
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item mr-3">
                                    <p class="text-muted mb-0" style="float:none"><i
                                            class="mdi el-icon-location mr-2"></i>{{comdetail.headQuarters}}
                                    </p>
                                </li>
                                <li class="list-inline-item">
                                    <p class="text-success mb-0"><i class="mdi el-icon-s-flag mdi-18px mr-2"></i>通过验证
                                    </p>
                                </li>
                            </ul>
                            <ul class="list-inline mb-2">
                                <li class="list-inline-item mr-3 ">
                                    <p class="text-muted"><i class="mdi el-icon-place mr-2"></i>{{comdetail.area}}</p>
                                </li>
                                <li class="list-inline-item mr-3">
                                    <p class="text-muted"><i class="mdi el-icon-message mr-2"></i>{{comdetail.email}}
                                    </p>
                                </li>
                                <li class="list-inline-item">
                                    <p class="text-muted"><i class="mdi el-icon-phone-outline mr-2"></i>{{comdetail.phone}}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="border-top border-bottom pt-4 pb-4">
                            <div class="row justify-content-sm-center">
                                <div class="col-lg-2 col-md-3 col-6">
                                    <div class="text-sm-center m-14">
                                        <h5 class="text-dark mb-2">企业规模</h5>
                                        <p class="text-muted mb-0" style="float: none">{{comdetail.scale}}</p>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-3 col-6">
                                    <div class="text-sm-center m-14">
                                        <h5 class="text-dark mb-2">企业类型</h5>
                                        <p class="text-muted mb-0" style="float: none">{{comdetail.type}}</p>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-3 col-6">
                                    <div class="text-sm-center m-14">
                                        <h5 class="text-dark mb-2">所在地区</h5>
                                        <p class="text-muted mb-0" style="float: none">{{comdetail.area}}</p>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-3 col-6">
                                    <div class="text-sm-center m-14">
                                        <h5 class="text-dark mb-2">注册资金(万元)</h5>
                                        <p class="text-muted mb-0" style="float: none">{{comdetail.fund}}</p>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-3 col-6">
                                    <div class="text-sm-center m-14">
                                        <h5 class="text-dark mb-2">注册时间</h5>
                                        <p class="text-muted mb-0" style="float: none">{{comdetail.registerTime}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 mt-4 pt-2">
                        <h4>公司简介 :</h4>
                        <div class="rounded border p-4 mt-3" style="height: 80%">
                            <p class="text-muted">{{comdetail.introduction}}</p>
                        </div>
                    </div>
                </div>
                <div class="row" style="width: 2100px">
                    <div class="col-lg-12 mt-4 pt-2">
                        <h4>已发布工作 :</h4>
                    </div>
                    <div class="col-lg-8 col-md-7" v-for="(item,i) in currentPageData" :key="i">
                        <div class="shadow rounded p-4 mt-4">
                            <img src="../assets/img/img-9.jpg" alt="" height="90"
                                 class="float-left shadow rounded-pill mr-3">
                            <div class="d-block overflow-hidden">
                                <h6 class="text-muted font-weight-light float-right mb-0"><i
                                        class="mdi mdi-clock-outline mr-1"></i>{{item.postTime}}</h6>
                                <h5 class="mb-1"><a :href="'jobDetail?id='+item.id+'&name='+item.jobName"
                                                    class="text-dark">{{item.jobName}}</a></h5>
                                <small class="text-muted font-weight-bold">{{item.type}}</small>
                                <ul class="employers-icons list-inline mb-1">
                                    <li class="list-inline-item mr-0 text-success"><i class="el-icon-star-on"></i></li>
                                    <li class="list-inline-item mr-0 text-success"><i class="el-icon-star-on"></i></li>
                                    <li class="list-inline-item mr-0 text-success"><i class="el-icon-star-on"></i></li>
                                    <li class="list-inline-item mr-0 text-success"><i class="el-icon-star-on"></i></li>
                                    <li class="list-inline-item mr-0 text-success"><i class="el-icon-star-on"></i></li>
                                </ul>
                                <p class="text-muted mb-0">{{item.jobDesc}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <nav aria-label="Page navigation example" style="margin-top: 3%">
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
        </section>
        <foot style="padding-top: 5%"></foot>
    </div>
</template>

<script>
    import qs from 'qs'
    import * as Cookies from "js-cookie";

    export default {
        data() {
            return {
                comdetail: "",
                id: "",
                name: "",
                path: "",
                joblist: [],
                totalPage: 1,
                currentPage: 1,
                pageSize: 4,
                currentPageData: [],
            }
        },

        methods: {
            async compdetail() {
                this.id = this.$Request.id
                await this.axios.get('http://47.95.195.192:8081/company/companyDetail/' + this.id).then(res => {
                    this.comdetail = res.data.data,
                        this.getHeadFromJobDetail(this.comdetail.name)
                }).catch(error => {
                    console.log("查询失败" + error)
                })
            },

            jobdetail() {
                this.name = this.$Request.name
                this.axios.get('http://47.95.195.192:8081/company/postedJobs/' + this.name).then(res => {
                    this.joblist = res.data.data,
                        this.totalPage = Math.ceil(this.joblist.length / this.pageSize);
                    this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
                    this.setCurrentPageData();
                }).catch(error => {
                    console.log("查询失败" + error)
                })
            },

            getHeadFromJobDetail(companyName) {
                this.axios.get("http://47.95.195.192:8081/company/getHeadFromJobDetail/" + companyName).then(res => {
                    if (res.data.success == true) {
                        if (res.data.data != null) {
                            this.path = "http://47.95.195.192:8081/static/" + res.data.data
                        }
                    }
                }).catch(err => {
                    console.log(err)
                })
            },

            setCurrentPageData() {
                let begin = (this.currentPage - 1) * this.pageSize;
                let end = this.currentPage * this.pageSize;
                this.currentPageData = this.joblist.slice(
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
            this.compdetail(),
                this.jobdetail()
        },
    }
</script>