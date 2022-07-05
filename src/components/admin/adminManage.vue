<template>
	<div id="admin-manage-menu">
		<router-link to="/admin/manage/program" class="admin-menu-line">
			<img class="admin-menu-icon" src="/admin/image/menu/program.icon.png"><p>编程</p>
		</router-link>
		<router-link to="/admin/manage/daily" class="admin-menu-line">
			<img class="admin-menu-icon" src="/admin/image/menu/daily.icon.png"><p>日常</p>
		</router-link>
		<router-link to="/admin/manage/comment" class="admin-menu-line">
			<img class="admin-menu-icon" src="/admin/image/menu/comment.icom.png"><p>留言</p>
		</router-link>
		<router-link to="/admin/manage/saysay" class="admin-menu-line">
			<img class="admin-menu-icon" src="/admin/image/menu/saysay.icon.png"><p>说说</p>
		</router-link>
		<router-link to="/admin/manage" class="admin-menu-line">
			<img class="admin-menu-icon" src="/admin/image/menu/home.icon.png"><p>凑数</p>
		</router-link>
	</div>
	<div id="admin-manage-main">

	</div>
</template>

<script>
export default {
	name: "admin-manage"
}
</script>

<style scoped>
	#admin-manage-menu {
		position: fixed;
		top: 164px;
		left: 200px;
		width: 300px;
		height: auto;
		border-radius: 15px;
		border: 5px solid #ffc943;
		background: rgba(245, 245, 245, 0.5);
		backdrop-filter: blur(5px);
		display: inline-block;
	}

	.admin-menu-line {
		display: block;
		height: 82px;
		margin: 15px auto;
	}

	.admin-menu-icon {
		width: 50px;
		height: 50px;
	}

	#admin-manage-menu p {
		height: 26px;
		line-height: 26px;
		font-size: 22px;
	}

	#admin-manage-menu a {
		text-decoration: none;
		color: rgba(28, 37, 140);
	}

	#admin-manage-menu a:visited {
		text-decoration: none;
		color: rgb(28, 37, 140);
	}

	#admin-manage-main {
		position: fixed;
		top: 64px;
		right: 200px;
		width: 1000px;
		height: 700px;
		border-radius: 15px;
		border: 5px solid #ffc943;
		background: rgba(245, 245, 245, 0.5);
		backdrop-filter: blur(5px);
		display: inline-block;
	}
</style>
