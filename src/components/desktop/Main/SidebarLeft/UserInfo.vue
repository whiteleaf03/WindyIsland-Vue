<script setup>

</script>

<template>
    <div class="userInfo-raw">
        <img class="Icon" src="https://windy-island-static.oss-cn-hangzhou.aliyuncs.com/image/UserInfo/email.icon.png">
        <p class="userInfo-link">whiteleaf03@163.com</p>
    </div>
    <div class="userInfo-raw">
        <img class="Icon" src="https://windy-island-static.oss-cn-hangzhou.aliyuncs.com/image/UserInfo/bilibili.icon.png">
        <a class="userInfo-link" id="bilibili-space" href="https://space.bilibili.com/22199790">B站个人空间</a>
    </div>
    <div class="userInfo-raw">
        <img class="Icon" src="https://windy-island-static.oss-cn-hangzhou.aliyuncs.com/image/UserInfo/github.icon.png">
        <a class="userInfo-link" id="github-space" href="https://github.com/whiteleaf03">GitHub个人主页</a>
    </div>
    <div class="userInfo-raw">
        <img class="Icon" src="https://windy-island-static.oss-cn-hangzhou.aliyuncs.com/image/UserInfo/gitee.icon.png">
        <a class="userInfo-link" id="gitee-space" href="https://gitee.com/whiteleaf03">Gitee个人主页</a>
    </div>
    <div class="userInfo-raw">
        <img class="Icon" src="https://windy-island-static.oss-cn-hangzhou.aliyuncs.com/image/UserInfo/cloudmusic.icon.png">
        <a class="userInfo-link" id="cloudmusic-space" href="https://music.163.com/#/user/home?id=547485668">网易云音乐个人主页</a>
    </div>
</template>

<style scoped>
.userInfo-raw {
    position: relative;
    height: 45px;
    width: 219px;
    margin: 1px 0px;
    line-height: 45px;
}

.Icon {
    z-index: 2;
    vertical-align:middle;
    display: inline-block;
    width: 25px;
    height: 25px;
    position: absolute;
    top: 12px;
    left: 16px;
}

.userInfo-link {
    z-index: 2;
    display: inline-block;
    font-size: 10px;
    user-select: text;
    position: relative;
    left: 23px;
}

a {
	color: black;
	text-decoration: none;
	padding: 0 20px;
	text-align: center;
}

a:visited{color: black;}

</style>
