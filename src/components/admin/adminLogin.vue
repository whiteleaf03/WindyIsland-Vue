<template>
	<div id="admin-login">
		<p id="admin-login-title">Login</p>
		{{}}
		<div class="admin-login-line">
			<p class="admin-login-tips">username</p>
			<input id="admin-login-username" ref="username">
		</div>
		<div class="admin-login-line">
			<p class="admin-login-tips">password</p>
			<input id="admin-login-password" type="password" ref="password">
		</div>
		<div class="admin-login-line">
			<p class="admin-login-tips">{{ this.question }}</p>
			<input id="admin-login-valid" ref="answer">
		</div>
		<div class="admin-login-line" style="margin: 48px 0">
			<input v-on:click="validResult" id="admin-login-button" type="button" value="Login">
		</div>
	</div>
</template>

<script>
import {adminLogin} from "../../request";

export default {
	name: "admin-login",
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
		createRandomNum() {
			this.randomNum1 = Math.round(Math.random() * 10);
			this.randomNum2 = Math.round(Math.random() * 10);
			this.randomResult = this.randomNum1 + this.randomNum2;
			this.question = `${this.randomNum1} + ${this.randomNum2} = ?`
		},
		async validResult() {
			this.answer = this.$refs.answer.value
			if (this.answer === `${this.randomResult}`) {
				this.result = await adminLogin(this.$refs.username.value, this.$refs.password.value)
				if (this.result === '登录成功') {
					await this.$router.push('/admin/manage')
				} else if (this.result === '账号名或密码错误') {
					alert("账号名或密码错误")
					await this.$router.push('/admin/login')
				} else {
					alert("完蛋了")
				}
			} else {
				alert(`验证码错误！ ${this.answer} ${this.randomResult}`)
			}
		}
	}
}
</script>

<style scoped>
	@font-face {
		font-family: ZhiyongWrite;
		src: url("/admin/font/ZhiyongWrite.ttf");
	}

	* {
		font-family: ZhiyongWrite,serif;
		font-size: 28px;
	}

	#admin-login {
		width: 400px;
		height: 500px;
		margin: 0 auto;
		background: rgba(245, 245, 245, 0.5);
		backdrop-filter: blur(5px);
		position: relative;
		top: 128px;
		border-radius: 15px;
		border: 3px solid #597bff;
		padding: 32px;
		text-align: center;
	}

	#admin-login-title {
		font-weight: 800;
		font-size: 80px;
		user-select: none;
	}

	.admin-login-tips {
		user-select: none;
		text-align: left;
		position: relative;
		left: 54px;
	}

	.admin-login-line {
		margin: 32px 0;
	}
</style>
