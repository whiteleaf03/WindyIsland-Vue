<script setup>

</script>

<template>
	<div class="userCard-bg"></div>
	<img class="userCard-Img" src="/image/main/userCard/head.jpg">
	<img class="userCard-Name" src="/image/main/userCard/username.png">
	<p class="userCard-Signature">一枚渣渣程序员∑(っ°Д°;)っ</p>
</template>

<style>
.userCard-bg {
	width: 251px;
	height: 150px;
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: 0% 30%;
	border-radius: 5px;
}

.userCard-bg {
	background-image: url('/image/main/userCard/background.jpg');
}

.userCard-Img {
	position: relative;
	top: -38px;
	width: 56px;
	height: 56px;
	border-radius: 50%;
	margin: 10px;
}

.userCard-Name {
	position: relative;
	top: -38px;
	width: 150px;
	height: 38px;
}

.userCard-Signature {
	font-size: 18px;
	font-style: italic;
	font-weight: bold;
	margin-left: 10px;
	position: relative;
	top: -15px;
}
</style>
