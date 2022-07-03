<script>
export default {
	name: "desktop-user-card"
}
</script>

<template>
	<div id="desktop-user-card-bg"></div>
	<img id="desktop-user-card-img" src="/desktop/image/main/UserCard/head.jpg">
	<img id="desktop-user-card-name" src="/desktop/image/main/UserCard/username.png">
	<p id="desktop-user-card-signature">一枚渣渣程序员∑(っ°Д°;)っ</p>
</template>

<style>
#desktop-user-card-bg {
	width: 251px;
	height: 150px;
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: 0% 30%;
	border-radius: 5px;
}

#desktop-user-card-bg {
	background-image: url('/desktop/image/main/UserCard/background.jpg');
}

#desktop-user-card-img {
	position: relative;
	top: -38px;
	width: 56px;
	height: 56px;
	border-radius: 50%;
	margin: 10px;
}

#desktop-user-card-name {
	position: relative;
	top: -38px;
	width: 150px;
	height: 38px;
}

#desktop-user-card-signature {
	font-size: 18px;
	font-style: italic;
	font-weight: bold;
	margin-left: 10px;
	position: relative;
	top: -15px;
}
</style>
