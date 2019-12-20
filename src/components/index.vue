<template>
    <div class="main-con">
        <el-aside width="200px">
            <Aside></Aside>
        </el-aside>
        <el-main>Main</el-main>
    </div>
</template>

<script>
    import Aside from './aside'
    export default {
        name:'index',
        components:{
            Aside
        }
    }
</script>

<style scoped>
    .main-con{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        min-width: 0;
    }
</style>