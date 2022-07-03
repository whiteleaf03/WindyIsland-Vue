<template>
	<div id="mobile-menu-button-back">
		<router-link to="/mobile/message">
			<div id="mobile-menu-button"></div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: "mobile-menu",
	mounted() {
		document.getElementById('mobile-menu-button-back').style.width = `${Math.round(window.innerWidth * 0.16)}px`
		document.getElementById('mobile-menu-button-back').style.height = `${Math.round(window.innerWidth * 0.16)}px`
		document.getElementById('mobile-menu-button-back').style.right = `${Math.round(window.innerWidth * 0.01)}px`
		document.getElementById('mobile-menu-button-back').style.bottom = `${Math.round(window.innerWidth * 0.01)}px`
	}
}
</script>

<style>
	#mobile-menu-button-back{
		background: rgba(245, 245, 245, 0.5);
		border: 3px solid #ffbd46;
		border-radius: 50px;
		backdrop-filter: blur(50);
		margin: 5px;
		position: fixed;
	}

	#mobile-menu-button {
		border-style: none;
		background: url("/mobile/image/mobile-menu-venti.png") no-repeat -7px;
		background-size: 120%;
		width: 100%;
		height: 100%;
	}
</style>
