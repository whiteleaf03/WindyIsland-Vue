<template>
	<div id="admin">
		<div id="admin-back">
			<router-view/>
		</div>
	</div>
</template>

<script>
export default {
	name: "admin",
	mounted() {
		document.getElementById('admin').style.height = `${window.innerHeight}px`
		document.getElementById('admin').style.width = `${window.innerWidth}px`
		document.getElementById('admin').style.background = `url("/admin/image/login-background.jpg")`
		document.getElementById('admin').style.backgroundSize = `100%`
		document.getElementById('admin').style.backgroundPosition = `0px -150px`
	}
}
</script>

<style>
</style>
