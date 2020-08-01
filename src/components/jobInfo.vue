<template>
    <div class="col-lg-3 col-sm-6 wow fadeInUp">
        <a :href=tiaozhuan>
            <div class="category-item">
                <i class="el-icon-user-solid"></i>
                <h3>{{ zhiweixinxinames }}类</h3>
                <p>{{jobTypeNum}}个岗位</p>
            </div>
        </a>
    </div>
</template>

<script>
    import qs from 'qs'
    import * as Cookies from "js-cookie";

    export default {
        props: ["zhiweixinxinames", 'jobTypeNum'],
        data() {
            return {
                xinxijobs: [],
                tiaozhuan: ''
            }
        },
        methods:
            {
                find() {
                    this.axios.post('http://47.95.195.192:8081/user/searchJobs', qs.stringify({
                        jobName: this.workName,
                        workLocation: this.workLocation,
                        type: this.zhiweixinxinames
                    })).then(res => {
                        Cookies.set("searchJob", "true");
                        this.tiaozhuan = '/jobList?jobName=&workLocation=&jobType=' + this.zhiweixinxinames
                    }).catch(error => {
                        console.log("查询出错" + error)
                    })
                },
            },

        mounted() {
            this.find()
        }
    };
</script>
