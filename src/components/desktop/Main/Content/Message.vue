<template>
	<div class="comment">
		<ul>
			<li v-for="comment in comments">
				<div class="comment-username">{{ comment.username }}</div>
				<div class="comment-time">在 {{ comment.time.slice(0, -2) }}</div>
				<div class="comment-message">说：{{ comment.message }}</div>
			</li>
		</ul>
	</div>
</template>

<script>
import {getComment} from "../../../../request";

export default {
	name: "Message",
	data() {
		return {
			comments: [],
			username: "",
			time: "",
			message: ""
		}
	},
	created() {
		this.showComment()
		this.timer = setInterval(this.show, 1000)
	},
	methods: {
		async showComment() {
			this.comments = await getComment()
		}
	}
}
</script>

<style scoped>
ul {
	list-style: none;
	padding: 16px;
}

li {
	margin: 5px 0;
	background: rgba(245, 245, 245, 0.8);
	border-radius: 5px;
}

.comment-username {
	display: inline-block;
	margin: 0 6px;
}

.comment-time {
	display: inline-block;
	margin: 0 6px;
}

.comment-message {
	margin: 0 6px;
}
</style>
