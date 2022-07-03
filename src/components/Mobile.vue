<template>
	<div id="mobile-main-back">
		<div id="mobile-main-font">
			<mobile-main/>
		</div>
	</div>
	<mobile-blog-running-time/>
	<mobile-menu/>
</template>

<script>
import mobileMenu from "./mobile/mobileMenu";
import mobileMain from "./mobile/mobileMain";
import MobileBlogRunningTime from "./mobile/Main/mobileBlogRunningTime";

export default {
	name: "mobile",
	components: {MobileBlogRunningTime, mobileMain, mobileMenu},
	created() {

	},
	mounted() {
		document.getElementById('mobile-main-back').style.width = `${window.innerWidth - 32}px`
		document.getElementById('mobile-main-back').style.margin = `16px auto 0`
	}
}
</script>

<style scoped>
#mobile-main-back {
	margin: 0 auto;
	background: rgba(245, 245, 245, 0.5);
	height: auto;
	border-radius: 25px;
	padding: 36px;
}

#mobile-main-font {
	border-radius: 25px;
	width: 340px;
}
</style>
