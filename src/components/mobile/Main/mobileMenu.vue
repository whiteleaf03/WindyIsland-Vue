<template>
	<div class="mobile-menu-li">
		<img class="mobile-menu-icon" src="/mobile/image/menu/home.icon.png">
		<router-link to="/mobile/home" class="mobile-menu-link"><p>首页</p></router-link>
		<img class="mobile-menu-icon" src="/mobile/image/menu/home.icon.png">
	</div>
	<div class="mobile-menu-li">
		<img class="mobile-menu-icon" src="/mobile/image/menu/program.icon.png">
		<router-link to="/mobile/program" class="mobile-menu-link"><p>编程</p></router-link>
		<img class="mobile-menu-icon" src="/mobile/image/menu/program.icon.png">
	</div>
	<div class="mobile-menu-li">
		<img class="mobile-menu-icon" src="/mobile/image/menu/book.icon.png">
		<router-link to="/mobile/book" class="mobile-menu-link"><p>书籍</p></router-link>
		<img class="mobile-menu-icon" src="/mobile/image/menu/book.icon.png">
	</div>
	<div class="mobile-menu-li">
		<img class="mobile-menu-icon" src="/mobile/image/menu/daily.icon.png">
		<router-link to="/mobile/daily" class="mobile-menu-link"><p>日常</p></router-link>
		<img class="mobile-menu-icon" src="/mobile/image/menu/daily.icon.png">
	</div>
	<div class="mobile-menu-li">
		<img class="mobile-menu-icon" src="/mobile/image/menu/comment.icon.png">
		<router-link to="/mobile/comment" class="mobile-menu-link"><p>留言</p></router-link>
		<img class="mobile-menu-icon" src="/mobile/image/menu/comment.icon.png">
	</div>
	<div class="mobile-menu-li">
		<img class="mobile-menu-icon" src="/mobile/image/menu/saysay.icon.png">
		<router-link to="/mobile/saysay" class="mobile-menu-link"><p>说说</p></router-link>
		<img class="mobile-menu-icon" src="/mobile/image/menu/saysay.icon.png">
	</div>
	<div class="mobile-menu-li">
		<img class="mobile-menu-icon" src="/mobile/image/menu/link.icon.png">
		<router-link to="/mobile/link" class="mobile-menu-link"><p>友链</p></router-link>
		<img class="mobile-menu-icon" src="/mobile/image/menu/link.icon.png">
	</div>
</template>

<script>
export default {
	name: "mobile-menu"
}
</script>

<style scoped>
	.mobile-menu-li {
		height: 39px;
		padding: 15px 0;
		vertical-align: middle;
		line-height: 39px;
	}

	.mobile-menu-icon {
		vertical-align: middle;
		width: 33px;
		height: 33px;
		margin: 3px 10px;
	}

	.mobile-menu-link {
		vertical-align: middle;
		display: inline-block;
		height: 39px;
		font-weight: 800;
	}

	a {
		text-decoration: none;
		color: black;
	}

	a:visited {
		color: black;
	}

	p {
		color: #3761ff;
		font-size: 20px;
	}
</style>
