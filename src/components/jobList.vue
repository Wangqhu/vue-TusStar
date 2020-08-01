<template>
    <div>
        <Head></Head>
        <section class="page-title title-bg4">
            <div class="d-table">
                <div class="d-table-cell">
                    <h2>岗位列表</h2>
                    <ul>
                        <li>
                            <a href="/">主页</a>
                        </li>
                        <el-icon class="el-icon-caret-right"></el-icon>
                        <li>岗位列表</li>
                    </ul>
                </div>
            </div>
        </section>
        <div class="banner-section banner-style-five" style="height: 130px;">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <search @childFn="parentFn"></search>
                    </div>
                </div>
            </div>
        </div>
        <section class="job-style-two job-list-section pt-100 pb-70">
            <div class="container">
                <div class="section-title text-center">
                    <div class="jobs1">寻找合适你的岗位</div>
                    <div class="jobs2">您可以在左侧对工作岗位进行筛选。PS:投递前，先完善自己的简历哦</div>
                </div>
                <div class="row" v-for="(job,id) in currentPageData" :key="id">
                    <div class="col-lg-12 wow fadeInUp">
                        <a :href="'jobDetail?id='+job.id" style="color:black;">
                            <div class="job-card-two">
                                <div class="row align-items-center">
                                    <div class="col-md-1">
                                        <div class="company-logo">
                                            <a href="/job-details"></a>
                                            <img src="../assets/img/company-logo/1.png" alt="logo">
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="job-info">
                                            <h3>
                                                <a :href="'jobDetail?id='+job.id">{{job.jobName}}</a>
                                            </h3>
                                            <ul>
                                                <li>
                                                    <i class='bx el-icon-s-cooperation'></i>
                                                    {{job.name}}
                                                </li>
                                                <li>
                                                    <i class='bx el-icon-map-location'></i>
                                                    {{job.workLocation}}
                                                </li>
                                                <li>
                                                    <i class='bx el-icon-loading'></i>
                                                    {{job.postTime}}
                                                </li>
                                            </ul>
                                            <span>{{job.nature}}</span>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="theme-btn text-right">
                                            <a :href="'jobDetail?id='+job.id" class="default-btn">
                                                查看
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
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
        </section>
        <foot></foot>
    </div>
</template>

<script>
    import qs from 'qs'
    import * as Cookies from "js-cookie";

    export default {
        data() {
            return {
                totalPage: 1,
                currentPage: 1,
                pageSize: 10,
                currentPageData: [],
                jobs1: [],
                workName: "",
                workLocation: "",
                jobType: ""
            }
        },

        methods:
            {
                fuzhi() {
                    this.workName = decodeURI(this.$Request.jobName)
                    this.workLocation = decodeURI(this.$Request.workLocation)
                    this.jobType = decodeURI(this.$Request.jobType)
                },

                panduan() {
                    if (this.workName != null && this.workLocation != null && this.jobType != null && this.workName != 'undefined' && this.workLocation != 'undefined' && this.jobType != 'undefined') {
                        this.select()
                    } else {
                        this.getJobList()
                    }
                },

                getJobList() {
                    this.axios.get("http://47.95.195.192:8081/company/jobList").then(res => {
                        this.jobs1 = res.data.data
                        this.totalPage = Math.ceil(this.jobs1.length / this.pageSize);
                        this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
                        this.setCurrentPageData();
                    }).catch(error => {
                        console.log("无数据" + error)
                    })
                },

                parentFn(payload) {
                    this.jobs = payload
                },

                select() {
                    this.axios.defaults.baseURL = 'http://47.95.195.192:8081/company'
                    this.axios.post('/searchJobs', qs.stringify({
                        jobName: this.workName,
                        workLocation: this.workLocation,
                        type: this.jobType
                    })).then(res => {
                        this.jobs1 = res.data.data
                        this.totalPage = Math.ceil(this.jobs1.length / this.pageSize);
                        this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
                        this.setCurrentPageData();
                    }).catch(error => {
                        console.log("查询出错" + error)
                    })
                },

                setCurrentPageData() {
                    let begin = (this.currentPage - 1) * this.pageSize;
                    let end = this.currentPage * this.pageSize;
                    this.currentPageData = this.jobs1.slice(
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
            this.fuzhi()
            this.panduan()
        },
    }
</script>


<style>

    .jobs {
        font-size: 20px !important;
        font-family: 楷体;
        text-align: center;
        padding-top: 4%;
    }

    .jobs1 {
        font-size: 50px !important;
        font-family: 楷体;
        text-align: center;
        padding-top: 4%;
    }

    .jobs2 {
        font-size: 20px !important;
        font-family: 楷体;
        text-align: center;
        padding-top: 1%;
        padding-bottom: 5%;
    }

    .el-breadcrumb {
        padding: 1% 0 0 44% !important;
        font-size: 20px !important;
    }

    .border {
        text-align: center;
        padding-top: 3%;
    }

    .search {
        margin-left: 20px;
    }

    .search1 {
        margin-left: 10%;
        padding-top: 2%;
    }

    .el-pagination {
        padding: 2% 0 0 43% !important;
    }

    .number {
        font-size: 30px !important;
        font-family: 楷体 !important;
    }

</style>