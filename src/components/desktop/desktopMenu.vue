<template>
	<ul id="desktop-menu-list">
		<li class="desktop-menu-list-li">
			<router-link to="/">
				<img class="desktop-menu-icon"
					 src="/image/menu/home.icon.png">首页
			</router-link>
		</li>
		<li class="desktop-menu-list-li">
			<router-link to="/desktop/program">
				<img class="desktop-menu-icon"
					 src="/image/menu/code.icon.png">编程
			</router-link>
		</li>
		<li class="desktop-menu-list-li">
			<router-link to="/desktop/book">
				<img class="desktop-menu-icon"
					 src="/image/menu/book.icon.png">书籍
			</router-link>
		</li>
		<li class="desktop-menu-list-li">
			<router-link to="/desktop/daily">
				<img class="desktop-menu-icon"
					 src="/image/menu/daily.icon.png">日常
			</router-link>
		</li>
		<li class="desktop-menu-list-li">
			<router-link to="/desktop/message">
				<img class="desktop-menu-icon"
					 src="/image/menu/message.icom.png">留言
			</router-link>
		</li>
		<li class="desktop-menu-list-li">
			<router-link to="/desktop/saysay">
				<img class="desktop-menu-icon"
					 src="/image/menu/saysay.icon.png">说说
			</router-link>
		</li>
		<li class="desktop-menu-list-li">
			<router-link to="/desktop/link">
				<img class="desktop-menu-icon"
					 src="/image/menu/link.icon.png">友链
			</router-link>
		</li>
		<li class="desktop-menu-list-li">
			<router-link to="/desktop/user">
				<img id="login"
					 src="/image/menu/user.icon.png">
			</router-link>
		</li>
	</ul>
</template>

<script>
export default {
	name: "desktop-menu"
}
</script>

<style scoped>
#desktop-menu-list {
	position: relative;
	margin: 0 auto;
	padding: 0;
	width: 1280px;
}

.desktop-menu-list-li {
	display: inline-block;
}

.desktop-menu-icon {
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
