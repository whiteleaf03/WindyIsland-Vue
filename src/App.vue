<template>
<!--    <Desktop/>-->
	<router-view></router-view>
</template>

<script>
import Desktop from "./components/Desktop.vue";
export default {
    name: 'App',
	components: {
		Desktop
	}
}
</script>

<style>
    * {
        margin: 0;
    }
</style>
