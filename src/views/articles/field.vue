<style lang="less">
@import './field.less';
</style>

<template>
    <div class="field-container">
        <Row class="field-header">
            <Col span="6">分类</Col>
            <Col span="18">内容</Col>
        </Row>
        <Row class="field-content">
            <Col span="6" class="h-100">
                <div class="outer-container">
                    <div class="inner-container">
                        <Menu :accordion="true">
                            <Submenu name="frontend">
                                <template slot="title">
                                    <Icon type="ios-book-outline"></Icon>
                                    前端
                                </template>
                                <MenuItem name="FE-1">HTML</MenuItem>
                                <MenuItem name="FE-2">CSS</MenuItem>
                                <MenuItem name="FE-3">JavaScript</MenuItem>
                                <MenuItem name="FE-4">杂烩</MenuItem>
                            </Submenu>
                            <Submenu name="BE">
                                <template slot="title">
                                    <Icon type="ios-people"></Icon>
                                    后端
                                </template>
                                <MenuItem name="BE-1">PHP</MenuItem>
                                <MenuItem name="BE-2">MySQL</MenuItem>
                            </Submenu>
                            <Submenu name="OTH">
                                <template slot="title">
                                    <Icon type="stats-bars"></Icon>
                                    其它
                                </template>
                                <MenuItem name="OTH-1">打造开发环境</MenuItem>
                            </Submenu>
                        </Menu>
                    </div>
                </div>
            </Col>
            <Col span="18" class="h-100">
                <Table 
                    :columns="columns" 
                    :data="articles"
                    :show-header="false"
                    :height="height">
                </Table>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                height: 500,
                columns: [
                    {
                        title: '题目',
                        key: 'name',
                        width: 200,
                        ellipsis: true
                    },
                    {
                        title: '摘要',
                        key: 'abstract',
                        ellipsis: true
                    },
                    {
                        title: '发表时间',
                        key: 'postTime',
                        width: 180,
                        align: 'right'
                    }
                ],
            }
        },
        computed: {
            articles() {
                return this.$store.state.articles.articlesList;
            }
        },
        mounted() {
            this.$store.commit('setActiveName','articles');
        }
    }
</script>
