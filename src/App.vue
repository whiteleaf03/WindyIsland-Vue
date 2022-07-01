<template>
	<router-view></router-view>
</template>
<script>

import device from 'current-device'

export default {
    name: 'App',
	methods: {

	},
	created() {
		if (device.mobile()) {
			console.log('移动设备')
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url("/image/mobile-background.jpg")';
			document.getElementsByTagName("body")[0].style.backgroundSize = '110%';
			this.$router.push('/mobile')
		} else {
			console.log('desktop设备')
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url("/image/desktop-background.jpg")';
			this.$router.push('/desktop')
		}
	}
}
</script>

<style>
    * {
        margin: 0;
    }
</style>
