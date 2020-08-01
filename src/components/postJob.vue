<template>
    <div>
        <Head></Head>
        <section class="page-title title-bg9">
            <div class="d-table">
                <div class="d-table-cell">
                    <h2>发布岗位</h2>
                    <ul>
                        <li>
                            <el-icon class="el-icon-caret-right"></el-icon>
                            <a href="/">主页</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <h4 class="mb-4 text-center" style="margin-top: 40px;">发布一个新岗位</h4>
        <div class="signup-form">
            <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    class="demo-ruleForm"
            >
                <el-form-item label="职位名称" prop="jobName">
                    <el-input v-model="ruleForm.jobName"></el-input>
                </el-form-item>
                <el-form-item label="职位性质" prop="nature">
                    <el-select v-model="ruleForm.nature" placeholder="请选择">
                        <el-option label="全职" value="全职"></el-option>
                        <el-option label="实习" value="实习"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="职位类型" prop="type">
                    <el-select v-model="ruleForm.type" placeholder="请选择">
                        <el-option label="技术" value="技术"></el-option>
                        <el-option label="产品" value="产品"></el-option>
                        <el-option label="设计" value="设计"></el-option>
                        <el-option label="运营" value="运营"></el-option>
                        <el-option label="销售" value="销售"></el-option>
                        <el-option label="媒体" value="媒体"></el-option>
                        <el-option label="金融" value="金融"></el-option>
                        <el-option label="教育" value="教育"></el-option>
                        <el-option label="服务业" value="服务业"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="工作地点" prop="workLocation">
                    <el-input v-model="ruleForm.workLocation"></el-input>
                </el-form-item>
                <el-form-item label="薪资（单位：元）" prop="salary">
                    <el-input v-model.number="ruleForm.salary"></el-input>
                </el-form-item>
                <el-form-item label="要求学历" prop="degree">
                    <el-select v-model="ruleForm.degree" placeholder="请选择">
                        <el-option label="高中" value="高中"></el-option>
                        <el-option label="专科" value="专科"></el-option>
                        <el-option label="本科" value="本科"></el-option>
                        <el-option label="硕士" value="硕士"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="工作经验" prop="experience">
                    <el-select v-model="ruleForm.experience" placeholder="请选择">
                        <el-option label="无要求" value="无要求"></el-option>
                        <el-option label="1年" value="1年"></el-option>
                        <el-option label="2年" value="2年"></el-option>
                        <el-option label="3年" value="3年"></el-option>
                        <el-option label="4年" value="4年"></el-option>
                        <el-option label="5年以上" value="5年以上"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="邮箱地址" prop="email">
                    <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>
                <el-form-item label="联系人" prop="contactName">
                    <el-input v-model="ruleForm.contactName"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" prop="contactPhone">
                    <el-input v-model="ruleForm.contactPhone"></el-input>
                </el-form-item>
                <el-form-item label="招聘人数" prop="recruitingNumbers">
                    <el-input v-model.number="ruleForm.recruitingNumbers"></el-input>
                </el-form-item>
                <el-form-item label="岗位福利" prop="jobWelfare">
                    <el-input
                            type="textarea"
                            :rows="4"
                            v-model="ruleForm.jobWelfare"
                    ></el-input>
                </el-form-item>
                <el-form-item label="岗位描述" prop="jobDesc">
                    <el-input
                            type="textarea"
                            :rows="4"
                            v-model="ruleForm.jobDesc"
                    ></el-input>
                </el-form-item>
                <el-form-item label="工作内容" prop="jobContent">
                    <el-input
                            type="textarea"
                            :rows="4"
                            v-model="ruleForm.jobContent"
                    ></el-input>
                </el-form-item>
                <el-button
                        type="primary"
                        class="btn btn-primary w-100 "
                        @click="fabugangwei()"
                >发布岗位
                </el-button
                >
            </el-form>
        </div>
    </div>
</template>

<script>
    import qs from "qs";

    export default {
        data() {
            var checknum = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error("不能为空"));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error("请输入数字值"));
                    } else {
                        callback();
                    }
                }, 100);
            };
            return {
                ruleForm: {
                    jobName: "",
                    nature: "",
                    type: "",
                    workLocation: "",
                    salary: "",
                    degree: "",
                    experience: "",
                    email: "",
                    contactPhone: "",
                    contactName: "",
                    recruitingNumbers: "",
                    jobWelfare: "",
                    jobDesc: "",
                    jobContent: "",
                    postTime: ""
                },

                rules: {
                    zhanghao: [
                        {required: true, message: "请填写账号", trigger: "blur"},
                        {min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur"}
                    ],
                    name: [{required: true, message: "请填写姓名", trigger: "blur"}],
                    email: [
                        {required: true, message: "请填写邮箱", trigger: "blur"},
                        {
                            type: "email",
                            message: "请输入正确的邮箱地址",
                            trigger: ["blur", "change"]
                        }
                    ],
                    salary: [{validator: checknum, trigger: "blur"}],
                    recruitingNumbers: [{validator: checknum, trigger: "blur"}],
                    yanzhengma: [
                        {required: true, message: "请填写验证码", trigger: "blur"}
                    ]
                }
            };
        },
        methods: {
            fabugangwei() {
                this.axios
                    .post(
                        "http://47.95.195.192:8081/company/postJob",
                        qs.stringify({
                            jobName: this.ruleForm.jobName,
                            nature: this.ruleForm.nature,
                            type: this.ruleForm.type,
                            workLocation: this.ruleForm.workLocation,
                            salary: this.ruleForm.salary,
                            degree: this.ruleForm.degree,
                            experience: this.ruleForm.experience,
                            email: this.ruleForm.email,
                            contactPhone: this.ruleForm.contactPhone,
                            contactName: this.ruleForm.contactName,
                            recruitingNumbers: this.ruleForm.recruitingNumbers,
                            jobWelfare: this.ruleForm.jobWelfare,
                            jobDesc: this.ruleForm.jobDesc,
                            jobContent: this.ruleForm.jobContent,
                            postTime: this.ruleForm.postTime
                        })
                    )

                    .then(res => {
                        if (res.data.data == 'success') {
                            alert('发布成功')
                            window.location = '/compCenter'
                        }
                    })
            }
        },
    };
</script>

<style scoped>
    .container {
        padding: 30px 0;
    }

    .banner-section {
        height: 600px;
        background-position: center center;
        background-size: cover;
        position: relative;
        z-index: 0;
    }

    .banner-section::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: rgba(0, 4, 44, 0.6);
        top: 0;
        left: 0;
        z-index: -1;
    }

    .banner-section::after {
        position: absolute;
        content: "";
        background-position: center center;
        background-size: cover;
        width: 100%;
        height: 350px;
        bottom: 0;
        left: 0;
        z-index: -1;
    }

    .banner-section .banner-content p {
        color: #ffffff;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 15px;
    }

    .banner-section .banner-content h1 {
        font-size: 65px;
        font-weight: 700;
        color: #ffffff;
        max-width: 715px;
        margin: 0 auto 40px;
        text-transform: capitalize;
    }

    .banner-section .banner-content .banner-form {
        background: rgba(255, 255, 255, 0.5);
        padding: 30px;
        border-radius: 10px;
        margin-bottom: 45px;
    }

    .banner-section .banner-content .banner-form .form-group {
        margin-bottom: 0;
        line-height: 1;
        text-align: left;
    }

    .banner-section .banner-content .banner-form .form-group label {
        font-size: 20px;
        color: #5c5a5a;
        font-weight: 800;
        padding-left: 5px;
    }

    .banner-section .banner-content .banner-form .form-group .form-control {
        height: 60px;
        border-radius: 10px;
        padding: 5px 20px 10px;
    }

    .banner-section
    .banner-content
    .banner-form
    .form-group
    ::-webkit-input-placeholder {
        font-size: 14px;
        font-weight: 500;
        color: #8e8d8d;
    }

    .banner-section
    .banner-content
    .banner-form
    .form-group
    :-ms-input-placeholder {
        font-size: 14px;
        font-weight: 500;
        color: #8e8d8d;
    }

    .banner-section
    .banner-content
    .banner-form
    .form-group
    ::-ms-input-placeholder {
        font-size: 14px;
        font-weight: 500;
        color: #8e8d8d;
    }

    .banner-section .banner-content .banner-form .form-group ::placeholder {
        font-size: 14px;
        font-weight: 500;
        color: #8e8d8d;
    }

    .banner-section .banner-content .banner-form .find-btn {
        background: #fd1616;
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 600;
        width: 100%;
        color: #ffffff;
        border-radius: 10px;
        top: 32px;
        position: relative;
        padding: 16px 20px;
        -webkit-transition: 0.5s;
        transition: 0.5s;
    }

    .banner-section .banner-content .banner-form .find-btn:hover {
        background: #001935;
    }

    .banner-section .banner-content .banner-form .find-btn i {
        left: 10px;
        top: 2px;
        position: relative;
    }

    .banner-section .banner-content .keyword {
        padding-left: 0;
        margin-bottom: 0;
    }

    .banner-section .banner-content .keyword li {
        display: inline-block;
        color: #ffffff;
        font-size: 17px;
        font-weight: 500;
    }

    .banner-section .banner-content .keyword li a {
        color: #ffffff;
        font-size: 17px;
        font-weight: 500;
    }

    .banner-section .banner-content .keyword li a:hover {
        color: #fd1616;
    }

    .d-table {
        width: 100%;
        height: 100%;
    }

    .d-table-cell {
        display: table-cell;
        vertical-align: middle;
    }

    .mx-auto {
        width: fit-content;
        margin: 0 auto;
    }

    ul {
        list-style: none;
    }

    .signup-form {
        -webkit-box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.07);
        margin: 20px 500px;
        padding: 10px;
        border-radius: 30px;
    }

    .signup-form .form-group label {
        font-size: 15px;
        margin-bottom: 5px;
        color: #000;
        padding-left: 20px;
        font-weight: 500;
    }

    .signup-form .form-group .form-control {
        height: 50px;
        border-radius: 50px;
        padding: 5px 20px;
        background: #f9f6f6;
    }
</style>
