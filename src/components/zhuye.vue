<template>
    <div>
        <Head></Head>
        <div class="banner-section banner-style-onw">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="banner-content text-center">
                            <h1 class="wow fadeInUp" data-wow-duration="2s">快速寻找一个适合自己的工作岗位</h1>
                        </div>
                        <search @childFn="parentFn"></search>
                    </div>
                </div>
            </div>
        </div>
        <section class="categories-section category-style-three pt-100 pb-70">
            <div class="container">
                <div class="section-title text-center">
                    <h2>职位信息</h2>
                    <p>根据工作类型，快速选择一批符合您需求的工作岗位</p>
                </div>
                <div class="row">
                    <jobInfo
                            v-for="(zhiweixinxiname, i) in zhiweixinxinames"
                            :key="i"
                            :zhiweixinxinames="zhiweixinxinames[i]"
                            :jobTypeNum="jobTypeNum[i]"
                    ></jobInfo>
                </div>
            </div>
        </section>
        <section class="job-style-two pt-100 pb-70">
            <div class="container">
                <div class="section-title text-center">
                    <h2>推荐的职位</h2>
                    <p>启迪之星精心为各位求职者推荐的优质职位</p>
                </div>
                <div class="row">
                    <jobRecommend
                            v-for="(job, i) in currentPageData"
                            :key="i"
                            :jobs="currentPageData[i]"
                    ></jobRecommend>
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
        <div class="counter-section pt-100 pb-70">
            <div class="container">
                <div class="row counter-area">
                    <div class="col-lg-3 col-6 wow fadeInUp" data-wow-duration="1s">
                        <div class="counter-text">
                            <i class="flaticon-resume"></i>
                            <h2><span>{{num[0]}}</span></h2>
                            <p>Job Posted</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                        <div class="counter-text">
                            <i class="flaticon-recruitment"></i>
                            <h2><span>{{num[1]}}</span></h2>
                            <p>Job Filed</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                        <div class="counter-text">
                            <i class="flaticon-portfolio"></i>
                            <h2><span>{{num[2]}}</span></h2>
                            <p>Company</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                        <div class="counter-text">
                            <i class="flaticon-employee"></i>
                            <h2><span>{{num[3]}}</span></h2>
                            <p>Members</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <foot></foot>
        <div class="top-btn">
            <i class='bx bx-chevrons-up bx-fade-up'></i>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                jobs: [],
                jobTypeNum: [],
                totalPage: 1,
                currentPage: 1,
                pageSize: 10,
                currentPageData: [],
                zhiweixinxinames:
                    [
                        "技术",
                        "产品",
                        "设计",
                        "运营",
                        "销售",
                        "媒体",
                        "金融",
                        "教育",
                        "服务"
                    ],
                num: []
            };
        },

        methods: {
            getjoblist() {
                this.axios
                    .get("http://47.95.195.192:8081/user/jobList")
                    .then(res => {
                        this.jobs = res.data.data;
                        this.totalPage = Math.ceil(this.jobs.length / this.pageSize);
                        this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
                        this.setCurrentPageData();
                    })
                    .catch(error => {
                        console.log("无数据" + error);
                    });
                this.axios
                    .get('http://47.95.195.192:8081/user/getJobTypeNum')
                    .then(res => {
                        this.jobTypeNum = res.data.data
                    })
            },

            parentFn(payload) {
                this.jobs = payload
            },

            getNum() {
                this.axios.get("http://47.95.195.192:8081/user/indexCount").then(res => {
                    this.num = res.data.data
                }).catch(error => {
                    console.log(error)
                })
            },

            setCurrentPageData() {
                let begin = (this.currentPage - 1) * this.pageSize;
                let end = this.currentPage * this.pageSize;
                this.currentPageData = this.jobs.slice(
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
            this.getjoblist();
            this.getNum()
        }
    };
</script>
