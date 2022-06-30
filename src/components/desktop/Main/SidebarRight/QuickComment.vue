<script>

import {postQuickSaySay} from "../../../../request";

export default {
	name: "QuickComment",
	data() {
		return {
			randomNum1: 0,
			randomNum2: 0,
			randomResult: 0,
			question: "",
			answer: "",
			test: "0 + 0 = ?"
		}
	},
	created() {
		this.createRandomNum()
	},
	methods: {
		postQuickComment() {
			postQuickSaySay(this.$refs.username.value, this.$refs.useremail.value, this.$refs.message.value)
		},
		createRandomNum() {
			this.randomNum1 = Math.round(Math.random() * 10);
			this.randomNum2 = Math.round(Math.random() * 10);
			this.randomResult = this.randomNum1 + this.randomNum2;
			this.question = `${this.randomNum1} + ${this.randomNum2} = ?`

		},
		validResult() {
			this.answer = this.$refs.answer.value
			if (this.answer === `${this.randomResult}`) {
				this.postQuickComment()
				alert("评论成功！")
			} else {
				alert(`验证码错误！ ${this.answer} ${this.randomResult}`)
			}
		}
	}
}


</script>

<template>
	<div id="comment-title">
		<img id="comment-title-img"
			 src="/image/main/quickComment/comment-title.png">
	</div>
	<form>
		<input id="comment-userName" class="comment-input" ref="username" placeholder="昵称*"
			   type="text">
		<input id="comment-email" class="comment-input" ref="useremail" placeholder="邮箱*"
			   type="text">
		<textarea id="comment-userComment" class="comment-input" ref="message"
				  placeholder="评论由人工审核&#13;&#10;通过后会发送邮件提示&#13;&#10;最多255个字哦(｀・ω・´)"></textarea>
		<input id="comment-valid" class="comment-input" :placeholder="this.question" type="text" ref="answer">
		<button v-on:click="validResult" id="comment-button" class="comment-input" type="submit">提交</button>
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
