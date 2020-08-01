<template>
    <div class="col-lg-12 wow fadeInUp">
        <div class="job-card-two">
            <div class="row align-items-center">
                <div class="col-md-1">
                    <div class="company-logo">
                        <a :href="'jobDetail?id='+jobs.id">
                            <img src="@/assets/img/1.png" alt="logo">
                        </a>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="job-info">
                        <h3>
                            <a :href="'jobDetail?id='+jobs.id">{{ jobs.jobName }}</a>
                        </h3>
                        <ul>
                            <li>
                                <i class='bx bx-briefcase'></i>
                                企业名称：{{ jobs.name }}
                            </li>
                            <li>
                                <i class='bx bx-location-plus'></i>
                                地点：{{ jobs.workLocation }}
                            </li>
                        </ul>

                        <span>{{ jobs.nature }}</span>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="theme-btn text-right">
                        <a :href="'jobDetail?id='+jobs.id" class="default-btn">
                            浏览详情
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["jobs"]
    };
</script>
