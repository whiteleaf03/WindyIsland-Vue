<template>
	<div id="mobile-quick-comment">
		<div id="mobile-quick-comment-title" class="mobile-quick-comment">留言板</div>
		<input id="mobile-quick-comment-username" placeholder="用户名" ref="username" class="mobile-quick-comment">
		<input id="mobile-quick-comment-email" placeholder="邮箱" ref="email" class="mobile-quick-comment">
		<textarea id="mobile-quick-comment-comment" placeholder="最多留言255个字哦" ref="message" class="mobile-quick-comment"></textarea>
		<input id="mobile-quick-comment-valid" :placeholder="this.question" ref="answer" class="mobile-quick-comment">
		<input id="mobile-quick-comment-button" type="button" value="提交" v-on:click="validResult" class="mobile-quick-comment">
	</div>
</template>

<script>
import {postQuickSaySay} from "../../../request";

export default {
	name: "mobile-quick-comment",
	data() {
		return {
			randomNum1: 0,
			randomNum2: 0,
			randomResult: 0,
			question: "",
			answer: "",
			test: "0 + 0 = ?",
			result: ""
		}
	},
	created() {
		this.createRandomNum()
	},
	methods: {
		async postQuickComment() {
			// this.result = await postQuickSaySay(this.$refs.username.value, this.$refs.email.value, this.$refs.message.value)
			// alert(this.result)
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
		}
	}
}
</script>

<style scoped>
	#mobile-quick-comment {
		height: auto;
		padding: 16px;
	}

	.mobile-quick-comment {
		display: block;
		margin: 16px auto;
		width: 200px;
		height: 24px;
		border-radius: 5px;
		border: 3px solid #ffbd46;
	}

	#mobile-quick-comment-title {
		border: none;
	}

	#mobile-quick-comment-username {

	}

	#mobile-quick-comment-email {

	}

	#mobile-quick-comment-comment {
		width: 200px;
	}

	#mobile-quick-comment-valid {
		display: inline-block;
		width: 80px;
		height: 24px;
		margin-right: 14px;
		margin-top: 0;
	}

	#mobile-quick-comment-button {
		display: inline-block;
		width: 90px;
		height: 32px;
		margin-left: 14px;
		margin-top: 0;
	}
</style>
