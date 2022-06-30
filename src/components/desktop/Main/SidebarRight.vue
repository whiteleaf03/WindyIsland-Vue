<script>
	import Sentence from "./SidebarRight/Sentence";
	import QuickComment from "./SidebarRight/QuickComment";
	import LatestSaySay from "./SidebarRight/LatestSaySay";

	export default {
		name: "SidebarRight",
		components: {
			Sentence,
			LatestSaySay,
			QuickComment
		}
	}
</script>

<template>
    <div id="Sentence"><Sentence/></div>
	<div id="LatestSaySay"><LatestSaySay/></div>
    <div id="QuickComment"><QuickComment/></div>
</template>

<style>
    #Sentence {
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

    #LatestSaySay {
        position: relative;
        top: 12px;
        left: 0px;
        background-color: whitesmoke;
        background-color: rgba(245, 245, 245, 0.5);
        height: 90px;
        border-radius: 5px;
        padding: 12px 16px;
    }

    #QuickComment {
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
