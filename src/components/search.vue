<template>

    <div class="banner-content text-center">
        <form class="banner-form wow fadeInDown" data-wow-duration="2s">
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="exampleInputEmail1">岗位名称:</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="岗位名称"
                               v-model="workName"/>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label for="exampleInputEmail2">岗位地点:</label>
                        <input
                                type="text"
                                class="form-control"
                                id="exampleInputEmail2"
                                placeholder="岗位地点"
                                v-model="workLocation"
                        />
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label for="exampleInputEmail3">岗位类型:</label>
                        <input
                                type="text"
                                class="form-control"
                                id="exampleInputEmail3"
                                placeholder="岗位类型"
                                v-model="jobType"
                        />
                    </div>
                </div>
                <div class="col-md-2">
                    <el-button @click="find()" class="find-btn">查找
                        <i class="bx bx-search"></i></el-button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import qs from 'qs'
    import * as Cookies from "js-cookie";

    export default {
        data() {
            return {
                workName: "",
                workLocation: "",
                jobType: ""
            }
        },
        methods: {
            find() {
                this.axios.defaults.baseURL = 'http://47.95.195.192:8081/user'
                this.axios.post('/searchJobs', qs.stringify({
                    jobName: this.workName,
                    workLocation: this.workLocation,
                    type: this.jobType
                })).then(res => {
                    Cookies.set("searchJob", "true");
                    window.location = '/jobList?jobName=' + this.workName + '&workLocation=' + this.workLocation + '&jobType=' + this.jobType
                    this.$emit('childFn', res.data.data)
                }).catch(error => {
                    console.log("查询出错" + error)
                })
            }
        }
    }
</script>
