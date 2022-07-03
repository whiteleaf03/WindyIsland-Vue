<template>
	<div id="desktop-sidebar-left">
		<desktop-sidebar-left/>
	</div>
	<div id="desktop-content-back">
		<router-view/>
	</div>
	<div id="desktop-sidebar-right">
		<desktop-sidebar-right/>
	</div>
</template>

<script>
import desktopSidebarLeft from "./Main/desktopSidebarLeft";
import desktopSidebarRight from "./Main/desktopSidebarRight";

export default {
	name: "desktop-main",
	components: {
		desktopSidebarLeft,
		desktopSidebarRight
	}
}
</script>

<style>
#desktop-sidebar-left {
	display: inline-block;
	width: 251px;
	text-align: center;
	vertical-align: top;
}

#desktop-content-back {
	display: inline-block;
	margin: 0 16px;
	left: 587px;
	width: 746px;
	height: auto;
	background-color: rgba(245, 245, 245, 0.5);
	border-radius: 5px;
	backdrop-filter: blur(50px);
}

#desktop-sidebar-right {
	display: inline-block;
	width: 251px;
	text-align: center;
	vertical-align: top;
}
</style>
