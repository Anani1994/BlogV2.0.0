<template>
    <BoWen>
        <div class="p-1" slot="catalog">
            <Steps direction="vertical">
                <Step
                    title="?"
                    content="?"
                    status="wait"
                    @click.native="toTop('#1', 30)">
                </Step>
            </Steps>
        </div>
        <div class="px-1">
            <div class="py-3 text-center">
                <h1><Icon type="ios-book-outline" /> 浅析 angular 指令的</h1>
                <p class="pt-1">简单介绍 AngularJS 指令的使用</p>
            </div>
            <h3 id="1" class="ml-1"><Icon type="logo-buffer" /> ?</h3>
            <Divider />
            <p>something</p>
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
