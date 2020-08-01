<template>
    <div>
        <Head></Head>
        <section class="resume-section ptb-100">
            <div class="container">
                <div class="resume-area">
                    <div class="row" id="demo">
                        <div class="col-md-12">
                            <div class="resume-thumb-area text-center">
                                <img src="../assets/img/logo.png" alt="account image" v-if="path==''"
                                     style="width: 200px;height: 200px">
                                <img :src="path" alt="account image" v-if="path!=''" style="width: 200px;height: 200px">
                                <h3>{{resume.name}}</h3>
                                <p>{{resume.phone}}</p>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="resume-content about-text">
                                <h3>
                                    <i class='bx bx-user-circle'></i>
                                    自我介绍
                                </h3>
                                <p>{{resume.introduction}}</p>
                            </div>
                            <div class="resume-content basic-info-text">
                                <h3>
                                    <i class='bx bx-book-alt'></i>
                                    基本信息
                                </h3>
                                <ul>
                                    <li>
                                        <span>性别:</span>
                                        {{resume.sex}}
                                    </li>
                                    <li>
                                        <span>民族:</span>
                                        {{resume.nation}}
                                    </li>
                                    <li>
                                        <span>出生年月日:</span>
                                        {{resume.birth}}
                                    </li>
                                    <li>
                                        <span>电子邮箱:</span>
                                        {{resume.email}}
                                    </li>
                                    <li>
                                        <span>毕业院校:</span>
                                        {{resume.school}}
                                    </li>
                                    <li>
                                        <span>最高学历:</span>
                                        {{resume.degree}}
                                    </li>
                                </ul>
                            </div>
                            <div class="resume-content education-text">
                                <h3>
                                    <i class='bx bx-book-reader'></i>
                                    教育经历
                                </h3>
                                <ul>
                                    <li>
                                        <span>入学时间:</span>
                                        {{resume.timeOfEnrollment}}
                                    </li>
                                    <li>
                                        <span>专业:</span>
                                        {{resume.major}}
                                    </li>
                                    <li>
                                        <span>学制:</span>
                                        {{resume.educationalSystem}}
                                    </li>
                                    <li style="width: 92.3%;">
                                        <span>院系:</span>
                                        {{resume.department}}
                                    </li>
                                    <li style="width: 92.3%;">
                                        <span>附加信息(奖惩情况等):</span>
                                        <div style="white-space: pre-wrap;">{{resume.overHeadInfo}}</div>
                                    </li>
                                </ul>
                            </div>
                            <div class="resume-content  experience-text">
                                <h3>
                                    <i class='bx bx-briefcase'></i>
                                    联系方式
                                </h3>
                                <div class="education-info">
                                    <p>手机电话：{{resume.phone}}</p>
                                    <p>电子邮箱：{{resume.email}}</p>
                                    <p>家庭住址：{{resume.address}}</p>
                                </div>
                            </div>
                            <div class="resume-content  experience-text">
                                <h3>
                                    <i class='bx bx-briefcase'></i>
                                    工作/项目/实习经验
                                </h3>
                                <div class="experience-info">
                                    <p>当前(预期)薪资: {{resume.salary}}</p></br>
                                    <p style="white-space: pre-wrap;">实习信息(描述主要工作、成果等):</br>
                                        {{resume.internInfo}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="theme-btn" style="margin-left: 45%;margin-top: 2%;">
                    <button @click="downResume" class="default-btn">
                        下载
                        <i class='bx bx-download bx-fade-down'></i>
                    </button>
                </div>
            </div>
        </section>
        <foot></foot>
    </div>
</template>

<script>

    import * as Cookies from "js-cookie";
    import html2canvas from 'html2canvas';
    import JsPDF from 'jspdf';

    function downloadPDF(ele, pdfName) {
        window.scrollTo(0, 0);
        let eleW = ele.offsetWidth;
        let eleH = ele.offsetHeight;
        let eleOffsetTop = ele.offsetTop;
        let eleOffsetLeft = ele.offsetLeft;
        var canvas = document.createElement("canvas");
        var abs = 0;
        let win_in = document.documentElement.clientWidth || document.body.clientWidth;
        let win_out = window.innerWidth;
        if (win_out > win_in) {
            abs = (win_out - win_in) / 2;
        }
        canvas.width = eleW * 2;
        canvas.height = eleH * 2;
        var context = canvas.getContext("2d");
        context.scale(2, 2);
        context.translate(-eleOffsetLeft - abs, -eleOffsetTop);
        html2canvas(ele, {
            dpi: 300,
            useCORS: true
        }).then((canvas) => {
            var contentWidth = canvas.width;
            var contentHeight = canvas.height;
            var pageHeight = contentWidth / 595.28 * 841.89;
            var leftHeight = contentHeight;
            var position = 0;
            var imgWidth = 595.28;
            var imgHeight = 595.28 / contentWidth * contentHeight;
            var pageData = canvas.toDataURL('image/jpeg', 1.0);
            var pdf = new JsPDF('', 'pt', 'a4');
            if (leftHeight < pageHeight) {
                pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
            } else {
                while (leftHeight > 10) {
                    console.log(leftHeight)
                    pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
                    leftHeight -= pageHeight;
                    position -= 841.89;
                    if (leftHeight > 10) {
                        pdf.addPage();
                    }
                }
            }
            pdf.save(pdfName);
        })
    }

    async function previewImg(ele) {
        window.scrollTo(0, 0);
        let eleW = ele.offsetWidth;
        let eleH = ele.offsetHeight;
        let eleOffsetTop = ele.offsetTop;
        let eleOffsetLeft = ele.offsetLeft;
        var canvas = document.createElement("canvas");
        var abs = 0;
        let win_in = document.documentElement.clientWidth || document.body.clientWidth;
        let win_out = window.innerWidth;
        if (win_out > win_in) {
            abs = (win_out - win_in) / 2;
        }
        canvas.width = eleW * 2;
        canvas.height = eleH * 2;
        var context = canvas.getContext("2d");
        context.scale(2, 2);
        context.translate(-eleOffsetLeft - abs, -eleOffsetTop);
        var baseSrc = ''
        await html2canvas(ele, {
            dpi: 300,
            useCORS: true
        }).then((canvas) => {
            var pageData = canvas.toDataURL('image/jpeg', 1.0);
            baseSrc = pageData
        })
        return baseSrc;
    }

    export default {
        data() {
            return {
                resume: [],
                phone: "",
                path: ""
            }
        },

        methods: {
            searchResume() {
                let userOrCompany = Cookies.get("userOrCompany")
                if (userOrCompany == 1) {
                    this.axios.defaults.baseURL = 'http://47.95.195.192:8081/company'
                }
                if (userOrCompany == 2) {
                    this.axios.defaults.baseURL = 'http://47.95.195.192:8081/user'
                }
                this.axios.get('/getResume').then(res => {
                    this.resume = res.data.data
                }).catch(error => {
                    console.log("简历获取失败:" + error)
                })
            },

            viewResume() {
                this.phone = this.$Request.phone
                this.axios.get('/viewResume/' + this.phone).then(res => {
                    this.resume = res.data.data
                }).catch(eror => {
                    console.log("模板简历获取失败")
                })
            },

            downResume() {
                downloadPDF(document.querySelector('#demo'), this.resume.name)
            },

            getHeadUser() {
                let userOrCompany = Cookies.get("userOrCompany")
                if (userOrCompany == 2) {
                    this.axios.get("http://47.95.195.192:8081/user/headExist").then(res => {
                        if (res.data.success == true) {
                            if (res.data.data != "noHave") {
                                this.path = "http://47.95.195.192:8081/static/" + res.data.data
                            }
                        }
                    }).catch(err => {
                        console.log(err)
                    })
                }
            },

            getHeadCompany() {
                let userOrCompany = Cookies.get("userOrCompany")
                if (userOrCompany == 1) {
                    this.phone = this.$Request.phone
                    this.axios.get("http://47.95.195.192:8081/company/viewHead/" + this.phone).then(res => {
                        if (res.data.success == true) {
                            if (res.data.data != "" || res.data.data != null) {
                                this.path = "http://47.95.195.192:8081/static/" + res.data.data
                            }
                        }
                    }).catch(err => {
                        console.log(err)
                    })
                }
            },
        },

        mounted: function () {
            this.searchResume()
            this.viewResume()
            this.getHeadUser()
            this.getHeadCompany()
        },
    }
</script>