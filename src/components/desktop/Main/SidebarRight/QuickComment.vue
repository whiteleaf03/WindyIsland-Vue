<script>
export default {name: "QuickComment"}


</script>

<template>
	<div id="comment-title"><img id="comment-title-img"
								 src="https://windy-island-static.oss-cn-hangzhou.aliyuncs.com/image/comment-title.png">
	</div>
	<form>
		<input v-model="commentusername" id="comment-userName" class="comment-input" name="username" placeholder="昵称*"
			   type="text">
		<input v-model="commentuseremail" id="comment-email" class="comment-input" name="useremail" placeholder="邮箱*"
			   type="text">
		<textarea v-model="commentusercomment" id="comment-userComment" class="comment-input" name="usercomment"
				  placeholder="评论由人工审核&#13;&#10;通过后会发送邮件提示&#13;&#10;最多255个字哦(｀・ω・´)"></textarea>
		<input id="comment-valid" class="comment-input" placeholder="验证信息" type="text">
		<button v-on:click="postComment" id="comment-button" class="comment-input" type="submit">提交</button>
	</form>
</template>

<style>
#comment-title {
	position: relative;
	height: 40px;
	width: 219px;
	margin-bottom: 10px;
	/* background-color: black; */
	font-size: 25px;
}

#comment-title-img {
	position: absolute;
	right: 46px;
	top: -12px;
	height: 65px;
}

.comment-input {
	background-color: whitesmoke;
	border-radius: 5px;
	border: 1px solid #e58900;
	width: 212px;
}

.comment-input:focus {
	outline-style: none;
	background-color: white;
	border: 1px solid #e58900;
}

#comment-userName {
	display: inline-block;
	height: 25px;
	position: absolute;
	left: 16px;
}

#comment-email {
	position: absolute;
	top: 107px;
	left: 16px;
	height: 25px;
}

#comment-userComment {
	position: absolute;
	top: 149px;
	left: 16px;
	height: 75px;
	resize: none;
}

#comment-valid {
	position: absolute;
	top: 239px;
	left: 16px;
	height: 25px;
}

#comment-button {
	width: 100px;
	height: 25px;
	position: relative;
	top: 214px;
	right: -2px;
	display: inline-block;
	font-size: 15px;
	user-select: all;
}
</style>
