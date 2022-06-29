<template>
	<div id="Menu">
		<Menu/>
	</div>
	<div id="Main">
		<Main/>
	</div>
</template>

<script>

import Menu from "./desktop/Menu";
import Main from "./desktop/Main";
import axios from "axios";

export default {
	name: "Desktop",
	components: {
		Menu,
		Main
	},
	methods: {
		postData() {
			axios.get("http://localhost:8081/user/findAll").then((response) => {
				console.log(response.data)
			})
			console.log("测试成功！")
		}
	}
}
</script>

<style scoped>
#Menu {
	position: relative;
	width: 100%;
	height: 45px;
	margin: 0 auto 16px;
	background-color: rgba(245, 245, 245, 0.5);
	line-height: 45px;
	font-size: 15px;
}

#Main {
	position: relative;
	width: 1280px;
	height: 800px;
	margin: 0 auto 0;
}
</style>
