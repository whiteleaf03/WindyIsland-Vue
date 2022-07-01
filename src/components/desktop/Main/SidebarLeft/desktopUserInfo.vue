<script>
export default {
	name: "desktop-desktop-user-info"
}
</script>

<template>
    <div class="desktop-user-info-raw">
        <img class="icon" src="/image/main/UserInfo/email.icon.png">
        <p class="desktop-user-info-link">whiteleaf03@163.com</p>
    </div>
    <div class="desktop-user-info-raw">
        <img class="icon" src="/image/main/UserInfo/bilibili.icon.png">
        <a class="desktop-user-info-link" id="bilibili-space" href="https://space.bilibili.com/22199790">B站个人空间</a>
    </div>
    <div class="desktop-user-info-raw">
        <img class="icon" src="/image/main/UserInfo/github.icon.png">
        <a class="desktop-user-info-link" id="github-space" href="https://github.com/whiteleaf03">GitHub个人主页</a>
    </div>
    <div class="desktop-user-info-raw">
        <img class="icon" src="/image/main/UserInfo/gitee.icon.png">
        <a class="desktop-user-info-link" id="gitee-space" href="https://gitee.com/whiteleaf03">Gitee个人主页</a>
    </div>
    <div class="desktop-user-info-raw">
        <img class="icon" src="/image/main/UserInfo/cloudmusic.icon.png">
        <a class="desktop-user-info-link" id="cloudmusic-space" href="https://music.163.com/#/user/home?id=547485668">网易云音乐个人主页</a>
    </div>
</template>

<style scoped>
.desktop-user-info-raw {
    position: relative;
    height: 45px;
    width: 219px;
    margin: 1px 0px;
    line-height: 45px;
}

.icon {
    z-index: 2;
    vertical-align:middle;
    display: inline-block;
    width: 25px;
    height: 25px;
    position: absolute;
    top: 12px;
    left: 16px;
}

.desktop-user-info-link {
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
