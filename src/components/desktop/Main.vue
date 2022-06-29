<template>
	<div id="SidebarLeft">
		<SidebarLeft/>
	</div>
	<div id="Content">
		<router-view/>
	</div>
	<div id="SidebarRight">
		<SidebarRight/>
	</div>
</template>

<script>
import SidebarLeft from "./Main/SidebarLeft";
import SidebarRight from "./Main/SidebarRight";


export default {
	name: "Main",
	components: {
		SidebarLeft,
		SidebarRight
	}
}
</script>

<style>
#SidebarLeft {
	display: inline-block;
	width: 251px;
	text-align: center;
	vertical-align: top;
}

#Content {
	display: inline-block;
	margin: 0 16px;
	left: 587px;
	width: 746px;
	height: 800px;
	background-color: rgba(245, 245, 245, 0.5);
	border-radius: 5px;
}

#SidebarRight {
	display: inline-block;
	width: 251px;
	text-align: center;
	vertical-align: top;
}
</style>
