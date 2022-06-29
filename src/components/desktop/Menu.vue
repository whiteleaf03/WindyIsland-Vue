<template>
	<ul id="HeaderList">
		<li class="HeaderList-li">
			<a href="/">
				<img class="header-icon"
					 src="https://windy-island-static.oss-cn-hangzhou.aliyuncs.com/image/Header/home.icon.png">首页
			</a>
		</li>
		<li class="HeaderList-li">
			<a href="/pc/program">
				<img class="header-icon"
					 src="https://windy-island-static.oss-cn-hangzhou.aliyuncs.com/image/Header/code.icon.png">编程
			</a>
		</li>
		<li class="HeaderList-li">
			<a href="/pc/book">
				<img class="header-icon"
					 src="https://windy-island-static.oss-cn-hangzhou.aliyuncs.com/image/Header/book.icon.png">书籍
			</a>
		</li>
		<li class="HeaderList-li">
			<a href="/pc/daily">
				<img class="header-icon"
					 src="https://windy-island-static.oss-cn-hangzhou.aliyuncs.com/image/Header/daily.icon.png">日常
			</a>
		</li>
		<li class="HeaderList-li">
			<a href="/pc/message">
				<img class="header-icon"
					 src="https://windy-island-static.oss-cn-hangzhou.aliyuncs.com/image/Header/message.icom.png">留言
			</a>
		</li>
		<li class="HeaderList-li">
			<a href="/pc/saysay">
				<img class="header-icon"
					 src="https://windy-island-static.oss-cn-hangzhou.aliyuncs.com/image/Header/saysay.icon.png">说说
			</a>
		</li>
		<li class="HeaderList-li">
			<a href="/pc/link">
				<img class="header-icon"
					 src="https://windy-island-static.oss-cn-hangzhou.aliyuncs.com/image/Header/link.icon.png">友链
			</a>
		</li>
		<li class="HeaderList-li">
			<a href="/pc/user">
				<img id="login"
					 src="https://windy-island-static.oss-cn-hangzhou.aliyuncs.com/image/Header/user.icon.png">
			</a>
		</li>
	</ul>
</template>

<script>
export default {
	name: "pcMenu"
}
</script>

<style scoped>
#HeaderList {
	position: relative;
	margin: 0 auto;
	padding: 0;
	width: 1280px;
}

.HeaderList-li {
	display: inline-block;
}

.header-icon {
	vertical-align: middle;
	display: inline-block;
	width: 19px;
	height: 19px;
	padding-right: 15px;
}

#login {
	position: absolute;
	top: 6px;
	right: 0;
	width: 35px;
	height: 35px;
}

a {
	color: black;
	text-decoration: none;
	padding: 0 20px;
	text-align: center;
}

a:visited {
	color: black;
}
</style>
