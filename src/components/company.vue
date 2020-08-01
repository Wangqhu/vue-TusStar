<template>
    <div>
        <Head></Head>
        <section class="page-title title-bg9">
            <div class="d-table">
                <div class="d-table-cell">
                    <h2>企业列表</h2>
                    <ul>
                        <li>
                            <a href="index.html">主页</a>
                        </li>
                        <el-icon class="el-icon-caret-right"></el-icon>
                        <li>企业列表</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="company-section company-style-two pt-100 pb-70">
            <div class="container">
                <div class="section-title text-center">
                    <h2>企业列表</h2>
                    <p>获取更多适合你的岗位.</p>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" v-for="(comp,i) in currentPageData" :key="i">
                        <div class="company-card">
                            <div class="company-logo">
                                <a :href="'company-detail?id='+comp.id+'&name='+comp.name">
                                    <img src="../assets/img/1.png" alt="company logo"
                                         v-if="path[i]==null || path[i]==''">
                                    <img :src="path[i]" alt="company logo" v-if="path[i]!=''&&path[i]!=null"
                                         style="width: 163px;height: 163px;border-radius: 50%">
                                </a>
                            </div>
                            <div class="company-text">
                                <h3>{{comp.name}}</h3>
                                <p>
                                    <i class='bx bx-location-plus'></i>
                                    {{comp.area}}
                                </p>
                                <a :href="'company-detail?id='+comp.id+'&name='+comp.name" class="company-btn">
                                    查看
                                </a>
                            </div>
                        </div>
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
    import * as Cookies from "js-cookie";

    export default {
        data() {
            return {
                company: [],
                path: [],
                totalPage: 1,
                currentPage: 1,
                pageSize: 10,
                currentPageData: [],
            }
        },

        methods: {
            findcompany() {
                this.axios.get('http://47.95.195.192:8081/company/getAllCompanies').then(res => {
                    this.company = res.data.data
                    for (let i = 0; i < this.company.length; i++) {
                        this.getHeadFromJobDetail(this.company[i].name)
                    }
                    this.totalPage = Math.ceil(this.company.length / this.pageSize);
                    this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
                    this.setCurrentPageData();

                }).catch(error => {
                    console.log("错误信息" + error)
                })
            },

            getHeadFromJobDetail(companyName) {
                this.axios.get("http://47.95.195.192:8081/company/getHeadFromJobDetail/" + companyName).then(res => {
                    if (res.data.success == true) {
                        if (res.data.data != null) {
                            this.path.push("http://47.95.195.192:8081/static/" + res.data.data)
                        }
                    }
                }).catch(err => {
                    console.log(err)
                })
            },

            setCurrentPageData() {
                let begin = (this.currentPage - 1) * this.pageSize;
                let end = this.currentPage * this.pageSize;
                this.currentPageData = this.company.slice(
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
            this.findcompany()
        },
    }
</script>