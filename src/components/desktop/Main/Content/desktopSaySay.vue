<template>
	<div class="desktop-saysay">
		<ul>
			<li v-for="saysay in saysays">
				<div class="desktop-saysay-info">
					{{ saysay.time }}
				</div>
				<div class="desktop-saysay-message">
					{{ saysay.message }}
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import {getSaysay} from "../../../../request";

export default {
	name: "desktop-saysay",
	data() {
		return {
			saysays: [],
			time: "",
			message: ""
		}
	},
	created() {
		this.showSaysay()
		this.timer = setInterval(this.showSaysay, 1000)
	},
	methods: {
		async showSaysay() {
			this.saysays = await getSaysay()
			console.log(this.saysays)
		}
	}
}
</script>

<style scoped>
ul {
	list-style: none;
	text-align: center;
	padding: 0 16px;
}

li {
	margin: 16px auto;
	background: rgba(245, 245, 245, 0.8);
	border-radius: 5px;
}

.desktop-saysay-info {
	display: inline-block;
	margin: 0 6px;
}

.desktop-saysay-message {
	margin: 0 6px;
}
</style>
