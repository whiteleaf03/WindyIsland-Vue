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
	<input v-on:click="getComment" type="button">
</template>

<script>
import axios from "axios";

export default {
	name: "Book",
	methods: {
		getComment() {
			// axios.get('http://localhost:8081/user/findAll')
			// 	.then(function (response) {
			// 		console.log(response.data[0]);
			// 	});
			// axios.post('/user', {
			// 	firstName: 'Fred',
			// 	lastName: 'Flintstone'
			// })
			// 	.then(function (response) {
			// 		console.log(response);
			// 	})
			// 	.catch(function (error) {
			// 		console.log(error);
			// 	});
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
