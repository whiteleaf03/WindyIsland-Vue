<template>
	<div class="mobile-comment" id="mobile-comment-quick">
		<div id="mobile-comment-quick-title" class="mobile-comment-quick-input">留言板</div>
		<input id="mobile-comment-quick-username" placeholder="用户名" ref="username" class="mobile-comment-quick-input">
		<input id="mobile-comment-quick-email" placeholder="邮箱" ref="email" class="mobile-comment-quick-input">
		<textarea id="mobile-comment-quick-comment" placeholder="最多留言255个字哦" ref="message" class="mobile-comment-quick-input"></textarea>
		<input id="mobile-comment-quick-valid" :placeholder="this.question" ref="answer" class="mobile-comment-quick-input">
		<input id="mobile-comment-quick-button" type="button" value="提交" v-on:click="validResult" class="mobile-comment-quick-input">
	</div>
	<div class="mobile-comment" id="mobile-comment-show">
		<ul>
			<li v-for="comment in comments">
				<div class="comment-info">{{ comment.username }} {{ comment.time.slice(0, -8) }}</div>
				<div class="comment-message">{{ comment.message }}</div>
			</li>
		</ul>
	</div>
</template>

<script>
import {postQuickSaySay, getComment} from "../../../request";

export default {
	name: "mobile-comment",
	data() {
		return {
			randomNum1: 0,
			randomNum2: 0,
			randomResult: 0,
			question: "",
			answer: "",
			test: "0 + 0 = ?",
			result: "",
			comments: []
		}
	},
	created() {
		this.createRandomNum()
		this.showComment()
	},
	mounted() {

	},
	methods: {
		async postQuickComment() {
			this.result = await postQuickSaySay(this.$refs.username.value, this.$refs.email.value, this.$refs.message.value)
			alert(this.result)
			await this.$router.push('/mobile/message')
			location.reload()
		},
		createRandomNum() {
			this.randomNum1 = Math.round(Math.random() * 10);
			this.randomNum2 = Math.round(Math.random() * 10);
			this.randomResult = this.randomNum1 + this.randomNum2;
			this.question = `${this.randomNum1} + ${this.randomNum2} = ?`
		},
		async validResult() {
			this.answer = this.$refs.answer.value
			if (this.answer === `${this.randomResult}`) {
				await this.postQuickComment()
			} else {
				alert(`验证码错误！ ${this.answer} ${this.randomResult}`)
			}
		},
		async showComment() {
			this.comments = await getComment()
		}
	}
}
</script>

<style scoped>
	.mobile-comment {
		height: auto;
		margin: 1px 8px;
		box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 3px 1px;
		background: rgba(245, 245, 245, 0.5);
		padding: 8px 0;
		border-radius: 5px;
	}

	.mobile-comment-quick-input {
		display: block;
		margin: 16px auto;
		width: 200px;
		height: 24px;
		border-radius: 5px;
		border: 3px solid #ffbd46;
	}

	#mobile-comment-quick-title {
		border: none;
	}

	#mobile-comment-quick-valid {
		display: inline-block;
		width: 80px;
		height: 24px;
		margin-right: 14px;
		margin-top: 0;
	}

	#mobile-comment-quick-button {
		display: inline-block;
		width: 90px;
		height: 32px;
		margin-left: 14px;
		margin-top: 0;
	}

	textarea {
		resize: none;
	}

	#mobile-comment-show {
		position: relative;
		top: 16px;
		height: auto;
	}

	ul {
		list-style: none;
		padding: 8px 0;
	}

	li {
		text-align: center;
		margin: 8px 0;
	}

	.comment-info {
		display: inline-block;
	}

</style>
