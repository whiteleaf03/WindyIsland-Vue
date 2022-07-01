<template>
	<div id="new-saysay-date" class="saysay">
		{{ time }}
	</div>

	<div id="new-saysay-message" class="saysay">
		{{ message }}
	</div>
</template>

<script>
import {getSaySay} from "../../../../request";

export default {
	name: "LatestSaySay",
	data() {
		return {
			saysay: "",
			time: "",
			message: "",
		}
	},
	created() {
		this.getLatestSaySay()
		this.timer = setInterval(this.getLatestSaySay, 1000)
	},
	methods: {
		async getLatestSaySay() {
			this.saysay = await getSaySay()
			this.time = this.saysay[this.saysay.length - 1].time.slice(0, -2)
			this.message = this.saysay[this.saysay.length - 1].message
		}
	}
}
</script>

<style>
	#new-saysay-date {
		position: relative;
		font-weight: bolder;
		display: inline-block;
		font-size: 6px;
		margin: 0 10px;
	}


	#new-saysay-message {

	}
</style>
