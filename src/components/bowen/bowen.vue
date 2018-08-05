<template>
    <Row class="bo-wen">
        <Col span="4"><slot name="catalog"></slot>&nbsp;</Col>
        <Col class="h-100 outContainer" span="17">
            <div class="h-100 innerContainer">
               <slot></slot>
            </div>
        </Col>
        <Col span="3"><slot name="others">&nbsp;</slot></Col>
    </Row>
</template>

<script>
export default {
    name: 'BoWen'
}
</script>

<style lang="less" scoped>
    .bo-wen {
        height: calc(100% - 90px);
        .outContainer {
            overflow: hidden;
        }
        .innerContainer {
            overflow-x: hidden;
            overflow-y: scroll;
            width: calc(100% + 17px);
        }
    }
</style>
