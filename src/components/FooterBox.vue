<template>
    <div class="footer">
        <div class="foot_content">
            <p>版权所有 © Copyright 成都金大洲实业发展有限公司 版权所有 蜀ICP备11005866号-1</p>
            <p>川公网安备 51012402000420号</p>
        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.footer{
    width:100%;
    height:126px;
    background:rgba(0,145,64,1);
    display: flex;
    justify-content: center;
    align-items: center;
    .foot_content{
        width: 50%;
        margin: 0 auto;
        height: 48px;
        p{
            margin-bottom: 10px;
            text-align: center;
            font-size:14px;
            font-family:PingFang SC;
            font-weight:500;
            color:rgba(255,255,255,1);
        }
    }
}
</style>