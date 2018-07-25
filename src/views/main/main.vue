<template>
    <Button type="primary" @click="info">Display info prompt</Button>
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
