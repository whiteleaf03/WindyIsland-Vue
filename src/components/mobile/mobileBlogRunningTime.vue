<template>
	<div id="mobile-time-back">
		<p class="mobile-time-line">本博客已运行(≧ω≦)</p>
		<p class="mobile-time-line">{{ value }}</p>
	</div>
</template>

<script>
export default {
	name: "mobile-blog-running-time",
	data() {
		return {
			value: "",
			LineHeight: ""
		}
	},
	created() {
		this.getBlogRunningTime()
		this.timer = setInterval(this.getBlogRunningTime, 1000)
	},
	mounted() {
		document.getElementById('mobile-time-back').style.width = `${Math.round(document.documentElement.clientWidth * 4 / 7)}px`
		document.getElementById('mobile-time-back').style.height = `${Math.round(document.documentElement.clientWidth * 0.16)}px`
		document.getElementById('mobile-time-back').style.left = `${Math.round(document.documentElement.clientWidth * 0.01)}px`
		document.getElementById('mobile-time-back').style.bottom = `${Math.round(document.documentElement.clientWidth * 0.01)}px`
		this.LineHeight = `${Math.round(document.documentElement.clientWidth * 0.08)}px`
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
				this.value = `${year}年${day}天 ${hour}时${min}分0${sec}秒`;
			} else {
				this.value = `${year}年${day}天 ${hour}时${min}分${sec}秒`;
			}
		}
	}
}
</script>

<style scoped>
	#mobile-time-back {
		position: fixed;
		background: rgba(245, 245, 245, 0.5);
		/*border: 3px solid #ffbd46;*/
		border-radius: 5px;
		margin: 5px 5px 16px 16px;
		backdrop-filter: blur(3px);
	}

	.mobile-time-line {
		margin: auto 0;
		line-height: v-bind(LineHeight);
	}
</style>
