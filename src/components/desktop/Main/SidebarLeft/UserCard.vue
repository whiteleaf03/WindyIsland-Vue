<script setup>

</script>

<template>
    <div class="userCard-bg"></div>
    <img class="userCard-Img" src="
https://windy-island-static.oss-cn-hangzhou.aliyuncs.com/image/head.jpg">
    <img class="userCard-Name" src="
https://windy-island-static.oss-cn-hangzhou.aliyuncs.com/image/UserCard/userName.png">
    <p class="userCard-Signature">一枚渣渣程序员∑(っ°Д°;)っ</p>
</template>

<style>
.userCard-bg {
    width: 251px;
    height: 150px;
    background-image: url('https://windy-island-static.oss-cn-hangzhou.aliyuncs.com/image/UserCard/userCard-bg.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 30%;
    border-radius: 5px;
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
