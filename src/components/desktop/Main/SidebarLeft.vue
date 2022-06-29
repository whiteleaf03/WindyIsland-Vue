<script>
    import UserCard from './SidebarLeft/UserCard.vue'
    import UserInfo from './SidebarLeft/UserInfo.vue'
    import BlogRunningTime from './SidebarLeft/BlogRunningTime.vue'

	export default {
		name: "SidebarLeft",
		components: {
			UserCard,
			UserInfo,
			BlogRunningTime
		}
	}
</script>

<template>
    <div id="UserCard"><UserCard/></div>
    <div id="UserInfo"><UserInfo/></div>
    <div id="BlogRunningTime"><BlogRunningTime/></div>
</template>

<style scoped>
    #UserCard {
        height: 256px;
        width: 251px;
        border-radius: 5px;
        background-color: rgba(245, 245, 245, 0.5);
        margin-bottom: 16px;
    }

    #UserInfo {
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
