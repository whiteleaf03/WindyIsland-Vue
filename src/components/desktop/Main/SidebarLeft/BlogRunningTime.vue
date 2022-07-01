<template>
    <p class="runtime-text">本博客已运行(≧ω≦)</p>
    <p class="runtime-text" id="time">{{value}}</p>
</template>

<script>

export default {
    data() {
        return {
            timer: "",
            value: "",
        };
    },
    created() {
		this.getBlogRunningTime()
        this.timer = setInterval(this.getBlogRunningTime, 1000)
    },
    methods: {
        getBlogRunningTime() {
            const startTime = new Date(`2022-4-13 10:19:00`).getTime() / 1000;
            const nowTime = new Date().getTime() / 1000;
            let RunTime = Math.ceil(nowTime - startTime);
            const sec = RunTime % 60;
            RunTime = (RunTime - sec) / 60;
            const min = RunTime % 60;
            RunTime = (RunTime - min) / 60;
            const hour = RunTime % 24;
            RunTime = (RunTime - hour) / 24;
            const day = RunTime % 365;
            RunTime = (RunTime - day) / 365;
            const year = RunTime;
			if (`${sec}`.length === 1) {
				this.value = `${year} 年 ${day} 天 ${hour} 时 ${min} 分 0${sec} 秒`;
			} else {
				this.value = `${year} 年 ${day} 天 ${hour} 时 ${min} 分 ${sec} 秒`;
			}
        }
    }
};

</script>

<style>
.runtime-text {
    padding: 5px;
}
</style>
