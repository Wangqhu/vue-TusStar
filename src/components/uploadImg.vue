<template>
    <div>
        <form action="/uploadPhoto1" method="post" enctype="multipart/form-data">
            <div id="myPhoto">
                <div class="viewPhoto">
                    <img src="../assets/img/1.png" alt="" id="portrait"
                         style="width: 200px;height: 200px; border-radius:50%"
                         v-if="imgURL==null || imgURL== ''"/>
                    <img :src="imgURL" alt="" id="portrait" style="width: 200px;height: 200px; border-radius:50%"
                         v-if="imgURL!=''"/>
                </div>
                <div class="listBox" style="float: left;padding-top: 1.8%;padding-left:41%; ">
                    <dl class="btn btn-success fileinput-button"
                        style="height: 38px;font-family: ‘IBM Plex Sans’,sans-serif">
                        <dt>上传图片</dt>
                        <dd>
                            <input type="file" id="saveImage" name="myphoto">
                        </dd>
                    </dl>
                </div>
                <div>
                    <input type="button" style="margin-right: 40%;margin-bottom: 1%"
                           class="btn btn-success fileinput-button" value="保存图片" @click="imageSubmit">
                </div>
            </div>
        </form>
    </div>
</template>

<style>
    .fileinput-button {
        position: relative;
        display: inline-block;
        overflow: hidden;
        margin-top: 2%;
    }

    .fileinput-button input {
        position: absolute;
        right: 0px;
        top: 0px;
        opacity: 0;
        -ms-filter: 'alpha(opacity=0)';
        font-size: 100px;
    }

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>

<script>
    import * as Cookies from "js-cookie";

    export default {
        data() {
            return {
                imageUrl: '',
                action: '',
                mode: {},
                imgURL: '',
            };
        },
        methods:
            {
                handleAvatarSuccess(res, file) {
                    this.imageUrl = URL.createObjectURL(file.raw);
                },
                beforeAvatarUpload(file) {
                    const isJPG = file.type === 'image/jpeg';
                    const isLt2M = file.size / 1024 / 1024 < 2;

                    if (!isJPG) {
                        this.$message.error('上传头像图片只能是 JPG 格式!');
                    }
                    if (!isLt2M) {
                        this.$message.error('上传头像图片大小不能超过 2MB!');
                    }
                    return isJPG && isLt2M;
                },

                great() {
                    document.getElementById('saveImage').onchange = function () {
                        var imgFile = this.files[0];
                        var fr = new FileReader();
                        fr.onload = function () {
                            document.getElementById('portrait').src = fr.result;
                        };
                        fr.readAsDataURL(imgFile);
                    }
                },

                imageSubmit() {
                    let x = document.getElementById('saveImage').files[0];
                    console.log(x);
                    let params = new FormData();
                    params.append('file', x, x.name);
                    let config =
                        {
                            headers: {'Content-Type': 'multipart/form-data'}
                        };
                    let userOrCompany = Cookies.get("userOrCompany")
                    if (userOrCompany === 1) {
                        this.axios.defaults.baseURL = 'http://47.95.195.192:8081/company'
                        this.action = 'http://47.95.195.192:8081/company/uploadHead'
                    }
                    if (userOrCompany === 2) {
                        this.axios.defaults.baseURL = 'http://47.95.195.192:8081/user'
                        this.action = 'http://47.95.195.192:8081/user/uploadHead'
                    }
                    this.axios.post("/uploadHead", params, config)
                        .then(function (res) {
                            alert("上传成功")
                            this.imageSave = res.data.image;
                            sessionStorage.setItem('headImg', this.imageSave); //将图片保存，并能够在其他地方加载显示
                        }
                            .bind(this))
                        .catch(function (error) {
                            console.log(error);
                        })
                },

                getImg() {
                    let userOrCompany = Cookies.get("userOrCompany")
                    if (userOrCompany === 1) {
                        this.axios.defaults.baseURL = 'http://47.95.195.192:8081/company'
                    }
                    if (userOrCompany === 2) {
                        this.axios.defaults.baseURL = 'http://47.95.195.192:8081/user'
                    }
                    this.axios
                        .get('/headExist')
                        .then(res => {
                            if (res.data.data != "noHave") {
                                this.imgURL = 'http://47.95.195.192:8081/static/' + res.data.data
                            }
                        })
                },

                modeUpload(item) {
                    this.mode = item.file
                },

                upload() {
                    let userOrCompany = Cookies.get("userOrCompany")
                    if (userOrCompany === 1) {
                        this.axios.defaults.baseURL = 'http://47.95.195.192:8081/company'
                        this.action = 'http://47.95.195.192:8081/company/uploadHead'
                    }
                    if (userOrCompany === 2) {
                        this.axios.defaults.baseURL = 'http://47.95.195.192:8081/user'
                        this.action = 'http://47.95.195.192:8081/user/uploadHead'
                    }
                    let fd = new FormData()
                    fd.append('file', this.mode)
                    this.axios.post('/api/reportRule', fd, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }).then(response => {
                        console.log(response.data);
                    })
                }
            },

        mounted() {
            this.great()
            this.getImg()
        }
    }
</script>