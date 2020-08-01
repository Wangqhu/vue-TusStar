<template>
    <div class="col-lg-12 wow fadeInUp">
        <div class="job-card-two">
            <div class="row align-items-center">
                <div class="col-md-1">
                    <div class="company-logo">
                        <a :href="'jobDetail?id='+appliedjobs.jobId">
                            <img src="@/assets/img/1.png" alt="logo">
                        </a>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="job-info">
                        <h3>
                            <a :href="'jobDetail?id='+appliedjobs.jobId">{{ appliedjobs.jobName }}</a>
                        </h3>
                        <ul>
                            <li>
                                <i class='bx bx-briefcase'></i>
                                公司名称：{{ appliedjobs.companyName }}
                            </li>
                            <li>
                                <i class='bx bx-location-plus'></i>
                                发布时间：{{ appliedjobs.postTime }}
                            </li>
                            <li>
                                <i class='bx bx-location-plus'></i>
                                状态：{{ appliedjobs.status }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="theme-btn text-right">
                        <a :href="'jobDetail?id='+appliedjobs.jobId" class="default-btn">
                            查看详情
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['appliedjobs'],
        methods:
            {
                statuszhuanhuan() {
                    if (this.appliedjobs.status == 'wait') {
                        this.appliedjobs.status = '待处理'
                    }
                    if (this.appliedjobs.status == 'work') {
                        this.appliedjobs.status = '已入职'
                    }
                    if (this.appliedjobs.status == 'interview') {
                        this.appliedjobs.status = '通知面试'
                    }
                    if (this.appliedjobs.status == 'refuse') {
                        this.appliedjobs.status = '已拒绝'
                    }
                }
            },

        mounted() {
            this.statuszhuanhuan()
        }
    };
</script>
