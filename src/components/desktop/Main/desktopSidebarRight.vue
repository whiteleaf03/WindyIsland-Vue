<script>
	import desktopSentence from "./SidebarRight/desktopSentence";
	import desktopQuickComment from "./SidebarRight/desktopQuickComment";
	import desktopLatestSaysay from "./SidebarRight/desktopLatestSaysay";

	export default {
		name: "SidebarRight",
		components: {
			desktopSentence,
			desktopLatestSaysay,
			desktopQuickComment
		}
	}
</script>

<template>
    <div id="desktop-sentence"><desktop-sentence/></div>
	<div id="desktop-latestSaySay"><desktop-latest-saysay/></div>
    <div id="desktop-quick-comment"><desktop-quick-comment/></div>
</template>

<style>
    #desktop-sentence {
        position: relative;
        width: 221px;
        height: auto;

        text-align: center;
        background-color: whitesmoke;
        background-color: rgba(245, 245, 245, 0.5);
        font-size: 14px;
        padding: 12px 16px;
        border-radius: 5px;
    }

    #desktop-latestSaySay {
        position: relative;
        top: 12px;
        left: 0;
        background-color: whitesmoke;
        background-color: rgba(245, 245, 245, 0.5);
        height: 90px;
        border-radius: 5px;
        padding: 12px 16px;
    }

    #desktop-quick-comment {
        position: relative;
        top: 28px;
        width: 219px;
        height: 289px;
        background-color: whitesmoke;
        background-color: rgba(245, 245, 245, 0.5);
        padding: 16px;
        border-radius: 5px;
    }
</style>
