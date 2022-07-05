<template>
	<input v-on:click="showData" type="button">
</template>

<script>

export default {
	name: "desktop-book",

	methods: {
		showData() {
			debugger
			this.$router.push('/admin/login')
		}
	}
}
</script>

<style scoped>
a {
	text-decoration: none;
	color: black;
}
a:visited {
	color: black;
}
</style>
