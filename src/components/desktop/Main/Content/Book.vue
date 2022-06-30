<template>
<!--	<div class="BookInfo">-->
<!--		<div class="BookName">-->
<!--			《机器学习》（南瓜书）-->
<!--		</div>-->
<!--		<div class="BookAuthor">-->

<!--		</div>-->
<!--		<a class="BookLink"-->
<!--		   href="https://www.aliyundrive.com/s/cqpJgP8hQhK">链接：https://www.aliyundrive.com/s/cqpJgP8hQhK-->
<!--		</a>-->
<!--		<div class="BookCode">-->
<!--			提取码：14hj-->
<!--		</div>-->
<!--	</div>-->
	<input v-on:click="showData" type="button">
</template>

<script>
// import {getUser} from "../../../../request";
import axios from "axios";

export default {
	name: "Book",

	methods: {
		showData() {
			// console.log(getUser())
		}
	}
}
</script>

<style scoped>
a {
	text-decoration: none;
	color: black;
}
a:visited {
	color: black;
}
</style>
