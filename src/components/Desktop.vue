<template>
	<div id="desktop-menu">
		<desktop-menu/>
	</div>
	<div id="desktop-main">
		<desktop-main/>
	</div>
</template>

<script>

import desktopMenu from "./desktop/desktopMenu";
import desktopMain from "./desktop/desktopMain";

export default {
	name: "Desktop",
	components: {
		desktopMenu,
		desktopMain
	}
}
</script>

<style>

#desktop-menu {
	position: relative;
	width: 100%;
	height: 45px;
	margin: 0 auto 16px;
	background-color: rgba(245, 245, 245, 0.5);
	line-height: 45px;
	font-size: 15px;
}

#desktop-main {
	position: relative;
	width: 1280px;
	height: 800px;
	margin: 0 auto 0;
}
</style>
