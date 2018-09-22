<template>
    <BoWen>
        <div class="p-1" slot="catalog">
            <Steps direction="vertical">
                <Step
                    title="使用笔录"
                    content="记录开发过程中相关知识点"
                    status="wait"
                    @click.native="toTop('#angular-notes-01', 30)">
                </Step>
            </Steps>
        </div>
        <div class="px-1">
            <div class="py-3 text-center">
                <h1><Icon type="ios-book-outline" /> AngularJS 的使用笔记</h1>
                <p class="pt-1">记录工作中的学习中遇到的重点</p>
            </div>
            <h3 id="angular-notes-01" class="ml-1"><Icon type="logo-buffer" /> 使用笔录</h3>
            <Divider />
            <p>AngularJS 中的所有 DOM 操作都是在指令中进行的。</p>
            <FooterDivider></FooterDivider>
        </div>
    </BoWen>
</template>

<script>
export default {
    data() {
        return {
            toTop: this.$util.toTop
        }
    }
}
</script>
