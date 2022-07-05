<template>
	<div id="mobile-main-back">
		<div id="mobile-main-font">
			<router-view/>
		</div>
	</div>
<!--	<mobile-blog-running-time/>-->
	<mobile-menu/>
</template>

<script>
import mobileMenu from "./mobile/mobileMenuButton";
import MobileBlogRunningTime from "./mobile/mobileBlogRunningTime";

export default {
	name: "mobile",
	components: {MobileBlogRunningTime, mobileMenu},
	created() {

	},
	mounted() {
		document.getElementById('mobile-main-back').style.width = `${document.documentElement.clientWidth - 32}px`
		document.getElementById('mobile-main-font').style.width = `${document.getElementById('mobile-main-back').style.width - 32}px`
		document.getElementById('mobile-main-font').style.maxHeight = `${document.documentElement.clientHeight * 0.75}px`
		document.getElementsByTagName('body')[0].backgroundSize = `${document.documentElement.clientWidth}px auto`
	}
}
</script>

<style scoped>
#mobile-main-back {
	margin: 32px auto 0;
	height: auto;
	width: 100%;
	padding: 16px;
}

#mobile-main-font {
	border-radius: 5px;
	padding: 8px 0;
	background: rgba(245, 245, 245, 0.5);
	backdrop-filter: blur(3px);
	overflow: auto;
}
</style>
