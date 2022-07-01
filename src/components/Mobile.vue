<template>
	<div id="mobile-menu">
		<mobile-menu/>
	</div>
	<div id="mobile-main">
		<mobile-main/>
	</div>
</template>

<script>
import MobileMenu from "./mobile/mobileMenu";
import MobileMain from "./mobile/mobileMain";

export default {
	name: "Mobile",
	components: {MobileMain, MobileMenu},
	created() {

	}
}
</script>

<style scoped>

</style>
