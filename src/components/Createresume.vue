<template>
    <div>
        <Head></Head>
        <!-- CREATE RESUME START -->
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12" style="margin-top: 3%;">
                        <h5 class="text-dark">基本信息</h5>
                    </div>

                    <div class="col-12 mt-3">
                        <div class="custom-form p-4 border rounded">
                            <uploadImg></uploadImg>
                            <form>
                                <div class="row mt-4">
                                    <div class="col-md-4">
                                        <div class="form-group app-label">
                                            <label class="text-muted">姓名<span class="text-danger">*</span> :</label>
                                            <input id="first-name" type="text" name="name" class="form-control resume"
                                                   placeholder="" v-model="name" required>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group app-label">
                                            <label class="text-muted">最高学历<span class="text-danger">*</span> :</label>
                                            <input id="surname-name" type="text" class="form-control resume"
                                                   placeholder="" v-model="degree" required>
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="form-group app-label">
                                            <label class="text-muted">出生年月日<span class="text-danger">*</span> :</label>
                                            <input type="date" class="form-control resume" v-model="birth"
                                                   value="<fmt:formatDate value=" pattern="yyyy/MM/dd " required>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group app-label">
                                            <label class="text-muted">性别<span class="text-danger">*</span> :</label>
                                            <div class="form-button">
                                                <select class="nice-select rounded" v-model="sex" value="">
                                                    <option value="男">男</option>
                                                    <option value="女">女</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group app-label">
                                            <label class="text-muted">民族<span class="text-danger">*</span> :</label>
                                            <input id="date-of-birth" type="text" class="form-control resume"
                                                   placeholder="" v-model="nation" required>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group app-label">
                                            <label class="text-muted">自我介绍<span class="text-danger">*</span> :</label>
                                            <textarea id="first-name" type="text" name="name"
                                                      class="form-control resume" placeholder=""
                                                      v-model="introduction" required></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-12">
                        <h5 class="text-dark">联系方式 :</h5>
                    </div>
                    <div class="col-12 mt-3">
                        <div class="custom-form p-4 border rounded">
                            <form>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group app-label">
                                            <label class="text-muted">家庭住址</label>
                                            <input id="date-of-birth" type="text" class="form-control resume"
                                                   placeholder="" v-model="address" required>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group app-label">
                                            <label class="text-muted">手机电话</label>
                                            <input id="phone" type="number" class="form-control resume" placeholder=""
                                                   v-model="phone" required>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group app-label">
                                            <label class="text-muted">电子邮箱</label>
                                            <input id="e-mail" type="email" name="email" class="form-control resume"
                                                   placeholder="" v-model="email" required>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <h5 class="text-dark mt-5">教育经历 :</h5>
                    </div>
                    <div class="col-12 mt-3">
                        <div class="custom-form p-4 border rounded">
                            <form>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group app-label">
                                            <label class="text-muted">毕业院校<span class="text-danger">*</span> :</label>
                                            <input id="middle-name" type="text" class="form-control resume"
                                                   placeholder="" v-model="school" required>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group app-label">
                                            <label class="text-muted">院系<span class="text-danger">*</span></label>
                                            <input id="university/college" type="text" class="form-control resume"
                                                   placeholder="" v-model="department" required>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="form-group app-label">
                                            <label class="text-muted">专业<span class="text-danger">*</span></label>
                                            <input id="degree/certification" type="text" class="form-control resume"
                                                   placeholder="" v-model="major" required>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group app-label">
                                                    <label class="text-muted">学制</label>
                                                    <div class="form-button">
                                                        <select class="nice-select rounded" v-model="educationalSystem">
                                                            <option value="全日制">全日制</option>
                                                            <option value="成人教育">成人教育</option>
                                                            <option value="非全日制">非全日制</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group app-label" m>
                                            <label class="text-muted">入学时间<span class="text-danger">*</span></label>
                                            <input type="date" class="form-control resume" v-model="timeOfEnrollment"
                                                   value="<fmt:formatDate value=" pattern="yyyy/MM/dd ">

                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group app-label">
                                            <label class="text-muted">附加信息(奖惩情况等) :</label>
                                            <textarea id="addition-information" rows="4" class="form-control resume"
                                                      placeholder="" v-model="overHeadInfo" required></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 mt-5">
                        <h5 class="text-dark" style="margin-right:900px">工作/项目/实习经验 :</h5>
                    </div>
                    <div class="col-12 mt-3">
                        <div class="custom-form p-4 border rounded">
                            <div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group app-label">
                                            <label class="text-muted">当前（预期）薪资:</label>
                                            <input id="date-of-birth" type="number"
                                                   oninput="value=value.replace(/[^\d]/g,'')"
                                                   class="form-control resume"
                                                   placeholder="" v-model="salary" required>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group app-label">
                                            <label class="text-muted">实习信息(描述主要工作、成果等) :</label>
                                            <textarea id="addition-information-1" rows="4" class="form-control resume"
                                                      placeholder="" v-model="internInfo" required></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 mt-4" style="margin-left: 45%;">
                    <input type="submit" id="submit" name="send" class="submitBnt btn btn-primary"
                           style="font-size: 120%" value="保存简历"
                           v-on:click="insert()">
                </div>
            </div>
        </section>
        <foot style="margin-top: 3%"></foot>
    </div>
</template>

<script>
    import qs from 'qs'

    export default {
        data() {
            return {
                name: "",
                degree: "",
                birth: "",
                sex: "",
                nation: "",
                introduction: "",
                address: "",
                school: "",
                phone: "",
                email: "",
                department: "",
                major: "",
                educationalSystem: "",
                timeOfEnrollment: "",
                overHeadInfo: "",
                salary: "",
                internInfo: "",
                resumeInfo: []
            }
        },

        methods: {
            insert: function (response) {
                if (this.name == '') {
                    alert('请输入姓名');
                    return
                }
                if (this.degree == '') {
                    alert('请输入最高学历');
                    return
                }
                if (this.birth == "") {
                    alert("请输入出生年月日");
                    return
                }
                if (this.sex == '') {
                    alert('请选择性别');
                    return
                }
                if (this.nation == "") {
                    alert("请输入民族");
                    return
                }
                if (this.introduction == "") {
                    alert("请输入自我介绍");
                    return
                }
                if (this.address == "") {
                    alert("请输入家庭住址");
                    return
                }
                if (this.phone == "") {
                    alert("请输入手机电话");
                    return
                }
                if (this.email == "") {
                    alert("请输入邮箱");
                    return
                }
                if (this.school == "") {
                    alert("请输入毕业院校");
                    return
                }
                if (this.department == "") {
                    alert("请输入院系信息");
                    return
                }
                if (this.major == "") {
                    alert("请输入专业");
                    return
                }
                if (this.educationalSystem == "") {
                    alert("请输入学制信息");
                    return
                }
                if (this.timeOfEnrollment == "") {
                    alert("请输入入学时间");
                    return
                }
                if (this.overHeadInfo == "") {
                    alert("请输入附加信息");
                    return
                }
                if (this.salary == "") {
                    alert("请输入薪资需求");
                    return
                }
                if (this.internInfo == "") {
                    alert("请输入实习信息");
                    return
                }
                this.axios.get('/resumeExist').then(res => {
                    if (res.data.success == true) {
                        this.axios.post('/updateResume', qs.stringify({
                            name: this.name,
                            degree: this.degree,
                            birth: this.birth,
                            sex: this.sex,
                            nation: this.nation,
                            introduction: this.introduction,
                            address: this.address,
                            school: this.school,
                            phone: this.phone,
                            email: this.email,
                            department: this.department,
                            major: this.major,
                            educationalSystem: this.educationalSystem,
                            timeOfEnrollment: this.timeOfEnrollment,
                            overHeadInfo: this.overHeadInfo,
                            salary: this.salary,
                            internInfo: this.internInfo
                        })).then(function (data) {
                            if (data.data.data == 'success') {
                                alert('简历更新完成');
                                window.location = "/resume-style"
                            } else if (data.data.data == 'fail') {
                                alert('简历更新失败，请重试')
                                window.location.reload()
                            }
                        }).catch(function (error) {
                            console.log(error);
                        })
                    }
                })

                this.axios.post('/createResume', qs.stringify({
                    name: this.name,
                    degree: this.degree,
                    birth: this.birth,
                    sex: this.sex,
                    nation: this.nation,
                    introduction: this.introduction,
                    address: this.address,
                    school: this.school,
                    phone: this.phone,
                    email: this.email,
                    department: this.department,
                    major: this.major,
                    educationalSystem: this.educationalSystem,
                    timeOfEnrollment: this.timeOfEnrollment,
                    overHeadInfo: this.overHeadInfo,
                    salary: this.salary,
                    internInfo: this.internInfo
                })).then(function (data) {
                    if (data.data.data == 'success') {
                        alert('简历新建完成');
                        window.location = "/resume-style"
                    } else if (data.data.data == 'fail') {
                        alert('简历新建失败，请重试')
                        window.location.reload()
                    }
                }).catch(function (error) {
                    console.log(error);
                })
            },

            getResume() {
                this.axios.get('/resumeExist').then(res => {
                    if (res.data.data == 'have_resume') {
                        this.axios.get('/getResume').then(res => {
                            if (res.data.success == true) {
                                this.resumeInfo = res.data.data
                                this.name = this.resumeInfo.name
                                this.degree = this.resumeInfo.degree
                                this.birth = this.resumeInfo.birth
                                this.sex = this.resumeInfo.sex
                                this.nation = this.resumeInfo.nation
                                this.introduction = this.resumeInfo.introduction
                                this.address = this.resumeInfo.address
                                this.school = this.resumeInfo.school
                                this.phone = this.resumeInfo.phone
                                this.email = this.resumeInfo.email
                                this.department = this.resumeInfo.department
                                this.major = this.resumeInfo.major
                                this.educationalSystem = this.resumeInfo.educationalSystem
                                this.timeOfEnrollment = this.resumeInfo.timeOfEnrollment
                                this.overHeadInfo = this.resumeInfo.overHeadInfo
                                this.salary = this.resumeInfo.salary
                                this.internInfo = this.resumeInfo.internInfo
                            }
                        }).catch(err => {
                            console.log("简历获取失败")
                        })
                    }
                }).catch(error => {
                    console.log("没有简历")
                })
            },
        },

        mounted: function () {
            this.getResume()
        }
    }
</script>
<style>
    .weihzi {
        margin-left: 45% !important;
        width: 10%;
    }
</style>