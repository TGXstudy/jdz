<template>
    <div class="product">
        <!-- banner -->
        <div class="banner">
            <img src="../assets/product/banner.png" alt="">
        </div>
        <!-- 内容 -->
        <div class="content">
            <div class="title">
                <h1>产品中心</h1>
                <p>PRODUCT</p>
            </div>
            <div class="check">
                <div @click="cur=0" :class="{active:cur==0}">熊猫饿了系列</div>
                <div @click="cur=1" :class="{active:cur==1}">经典系列</div>
                <div @click="cur=2" :class="{active:cur==2}">新品系列</div>
            </div>
            <!-- 内容 -->
            <div class="check_nav">
                <div v-show="cur==0">
                    <ul class="navul">
                        <li>
                            <div class="bjzz"></div>
                            <div class="zz">香辣魔芋爽</div>
                            <div class="top">
                                <img src="../assets/product/cp.png" alt="">
                            </div>
                            <p>香辣菇肉</p>
                        </li>
                       <li>
                            <div class="bjzz"></div>
                            <div class="zz">香辣魔芋爽</div>
                            <div class="top">
                                <img src="../assets/product/cp.png" alt="">
                            </div>
                            <p>香辣菇肉</p>
                        </li>
                       <li>
                            <div class="bjzz"></div>
                            <div class="zz">香辣魔芋爽</div>
                            <div class="top">
                                <img src="../assets/product/cp.png" alt="">
                            </div>
                            <p>香辣菇肉</p>
                        </li>
                       <li>
                            <div class="bjzz"></div>
                            <div class="zz">香辣魔芋爽</div>
                            <div class="top">
                                <img src="../assets/product/cp.png" alt="">
                            </div>
                            <p>香辣菇肉</p>
                        </li>

                    </ul>
                    <div class="block">
                        <el-pagination layout="prev, pager, next" :total="50">
                        </el-pagination>
                    </div>
                </div>
                <div v-show="cur==1">经典系列</div>
                <div v-show="cur==2">新品系列</div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cur: 0 //默认选中第一个tab
        };
    }
};
</script>

<style lang="less" >
.product {
    width: 100%;
    .banner {
        width: 100%;
        height: auto;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .content {
        width: 80%;
        margin: 0 auto;
        .title {
            h1 {
                margin-bottom: 0;
                color: #009944;
            }
            p {
                color: #009944;
            }
        }
        .check {
            margin-top: 15px;
            margin-bottom: 80px;
            display: flex;
            justify-content: center;
            .active {
                background: rgba(0, 153, 68, 1);
                color: #ffffff;
            }
            div {
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 20px;
                width: 120px;
                height: 50px;
                background: rgba(238, 238, 238, 1);
                border-radius: 10px;
                font-family: Microsoft YaHei;
                font-weight: 400;
            }
        }
        .check_nav {
            width: 100%;
            div {
                .navul {
                    list-style: none;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    li {
                        .bjzz{
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            z-index: 1;
                              transition: all linear 0.3s;
                        }
                        .zz {
                            z-index: 2;
                            border: 10px solidrgba(200,200,200,0.25);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            color:rgba(255,255,255,1);
                            transition: all linear 0.3s;
                            position: absolute;
                            top: -60%;
                            left: 25%;
                            width: 160px;
                            height: 111px;
                            background-image: url(../assets/product/zz.png);
                        }
                        overflow: hidden;
                        cursor: pointer;
                        position: relative;
                        margin-bottom: 20px;
                        padding: 15px;
                        float: left;
                        width: 21%;
                        height: 300px;
                        border: 1px solid rgba(227, 227, 227, 1);
                        .top {
                            width: 250px;
                            height: 250px;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                        p {
                            font-family: Microsoft YaHei;
                            font-weight: 400;
                            color: rgba(51, 51, 51, 1);
                            line-height: 72px;
                            text-align: center;
                        }
                    }
                    li:hover {
                        .zz {
                            transition: all linear 0.3s;
                            top: 30%;
                            left: 25%;
                        }
                        .bjzz{
                              transition: all linear 0.3s;
                              background:rgba(0,0,0,1);
                            opacity:0.41;
                        }
                    }
                }
                .block{
                    margin-top: 40px;
                    margin-bottom: 40px;
                    display: flex;
                    justify-content: center;
                    .el-pagination .btn-next{
                        background-color: #009944;
                      padding: 0;
                        color: #ffffff;
                        border-radius:3px;
                    }
                    .el-pagination .btn-prev{
                          background-color: #009944;
                      padding: 0;
                        color: #ffffff;
                        border-radius:3px;
                        margin-right: 10px;
                    }
                    .el-pager li{
                        margin-right: 10px;
                        background:rgba(238,238,238,1);
                        border-radius:3px;
                        
                    }
                    .el-pager li.active{
                        color: #009944;
                    }
                    .el-pager li:hover {
                        color: #009944;
                    }
                }
            }
        }
    }
}
</style>