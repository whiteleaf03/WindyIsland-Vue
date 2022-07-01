<script>
    import desktopUserCard from "./SidebarLeft/desktopUserCard";
	import desktopUserInfo from "./SidebarLeft/desktopUserInfo";
	import desktopBlogRunningTime from "./SidebarLeft/desktopBlogRunningTime";

	export default {
		name: "SidebarLeft",
		components: {
			desktopUserCard,
			desktopUserInfo,
			desktopBlogRunningTime
		}
	}
</script>

<template>
    <div id="desktop-user-card"><desktop-user-card/></div>
    <div id="desktop-user-info"><desktop-user-info/></div>
    <div id="BlogRunningTime"><desktop-blog-running-time/></div>
</template>

<style scoped>
    #desktop-user-card {
        height: 256px;
        width: 251px;
        border-radius: 5px;
        background-color: rgba(245, 245, 245, 0.5);
        margin-bottom: 16px;
    }

    #desktop-user-info {
        width: 219px;
        height: 235px;
        font-size: 18px;
        border-radius: 5px;
        padding: 12px 16px;
        background-color: rgba(245, 245, 245, 0.5);
        margin-bottom: 16px;
    }

    #BlogRunningTime {
        height: 60px;
        width: 219px;
        border-radius: 5px;
        background-color: rgba(245, 245, 245, 0.5);
        padding: 12px 16px;
        font-size: 15px;
    }
</style>
