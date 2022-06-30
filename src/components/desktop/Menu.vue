<template>
	<ul id="HeaderList">
		<li class="HeaderList-li">
			<router-link to="/">
				<img class="header-icon"
					 src="/image/menu/home.icon.png">首页
			</router-link>
		</li>
		<li class="HeaderList-li">
			<router-link to="/pc/program">
				<img class="header-icon"
					 src="/image/menu/code.icon.png">编程
			</router-link>
		</li>
		<li class="HeaderList-li">
			<router-link to="/pc/book">
				<img class="header-icon"
					 src="/image/menu/book.icon.png">书籍
			</router-link>
		</li>
		<li class="HeaderList-li">
			<router-link to="/pc/daily">
				<img class="header-icon"
					 src="/image/menu/daily.icon.png">日常
			</router-link>
		</li>
		<li class="HeaderList-li">
			<router-link to="/pc/message">
				<img class="header-icon"
					 src="/image/menu/message.icom.png">留言
			</router-link>
		</li>
		<li class="HeaderList-li">
			<router-link to="/pc/saysay">
				<img class="header-icon"
					 src="/image/menu/saysay.icon.png">说说
			</router-link>
		</li>
		<li class="HeaderList-li">
			<router-link to="/pc/link">
				<img class="header-icon"
					 src="/image/menu/link.icon.png">友链
			</router-link>
		</li>
		<li class="HeaderList-li">
			<router-link to="/pc/user">
				<img id="login"
					 src="/image/menu/user.icon.png">
			</router-link>
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
