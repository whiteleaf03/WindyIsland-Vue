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
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url("/mobile/image/mobile-background.jpg")';
			this.$router.push('/mobile')
		} else {
			console.log('desktop设备')
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url("/desktop/image/desktop-background.jpg")';
			this.$router.push('/desktop')
		}
	}
}
</script>

<style>
    * {
        margin: 0;
		text-align: center;
    }

	body {
		background-position: center center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;
	}
</style>
