<style lang="less">
    @import '../../styles/main.less';
</style>

<template>
    <div class="main">
    	<div class="content">
    		<Button type="primary" @click="info">Display info prompt</Button>
    	</div>
    </div>
</template>

<script>
    export default {
        methods: {
            info () {
                this.$Message.success('恭喜你，可以开始搭建你的博客了');
            }
        }
    }
</script>

<style lang="less">
	.main {
		.content {
			margin: 0 auto;
			width: 80%;
			border: 1px solid green;
		}
	}
</style>