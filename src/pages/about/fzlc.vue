<template>
    <div class="jdzs">
        <!-- banner -->
        <div class="banner">
            <img src="../../assets/about/jdzs/banner.png" alt="">
        </div>
        <!-- 内容 -->
        <div class="content">
            <div class="title">
                <h1>发展历程</h1>
                <p>DEVELOPMENT PROCESS</p>
            </div>

        </div>
        <div class="nav">
            <div class="banner">

                <template>
                    <el-carousel :interval="5000" arrow="always">
                        <div class="title">
                            <ul>
                                <li>2017年</li>
                                <li>2017年</li>
                                <li>2017年</li>
                                <li>2017年</li>
                                <li>2017年</li>
                                <li>2017年</li>
                                <li>2017年</li>
                                <li>2017年</li>
                                <li>2017年</li>
                                <li>2017年</li>
                            </ul>
                        </div>
                        <el-carousel-item v-for="item in 10" :key="item" class="lb">
                            <div class="lb_left">
                                <p>2017年</p>
                            </div>
                            <div class="lb_right">
                                <div>
                                    7月 公司崭新的一分厂在郫县安德中国川菜产业化园区落成，郫县县委常委刘虹副书记、组织部彭部长、县委常委、人大主任、管委会主任张云祥主任莅临现场参加了隆重的新厂落成剪彩仪式； 12月 公司占地30余亩的二分厂建成投产；
                                </div>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style lang="less">
h3 {
    margin: 0;
    padding: 0;
}
.jdzs {
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
    }
    .nav {
        margin-top: 80px;
        margin-bottom: 100px;
        width: 100%;
        height: 500px;
        background-image: url("../../assets/about/fzlc/banner.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        padding-top: 100px;
        .banner {
            width: 80%;
            margin: 0 auto;
            position: relative;
            .title {
                z-index: 9;
                position: absolute;
                top: 18px;
                left: 3.2%;
                width: 92%;
                height: 3px;
                background: rgba(255, 255, 255, 1);
                ul {
                    top: 0;
                    left: 49%;
                    z-index: 99;
                    width: 100%;
                    height: 50px;
                    display: flex;
                    justify-content: space-around;
                    line-height: 70px;
                    li {
                        width: 70px;
                        text-align: center;
                        display: flex;
                        justify-content: center;
                        font-weight: 400;
                        color: rgba(153, 153, 153, 1);
                        margin-left: 15px;
                    }
                }
            }
            .lb {
                display: flex;
                .lb_left {
                    width: 20%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    p {
                        font-size: 36px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: rgba(0, 145, 64, 1);
                        line-height: 30px;
                    }
                }
                .lb_right {
                    width: 80%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    div {
                        font-size: 14px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: rgba(51, 51, 51, 1);
                        line-height: 30px;
                    }
                }
            }
            .el-carousel__container {
                position: relative;
                height: 330px;
            }
            .el-carousel__arrow--left {
                left: 0px;
                position: absolute;
            }

            .el-carousel__indicators--horizontal {
                top: 0;
                left: 50%;
                z-index: 99;
                width: 92%;
                height: 50px;
                display: flex;
                justify-content: space-around;
            }
            .el-carousel__indicator--horizontal .is-active {
                button {
                    background-color: #009944 !important;
                    color: #009944;
                }
            }
            .el-carousel--horizontal {
                overflow-x: hidden;
                overflow-y: hidden;
            }
            .el-carousel__item {
                margin-top: 100px;
                background: rgba(247, 247, 249, 1);
                border-radius: 10px;
                padding: 10px;
                padding-left: 60px;
                padding-right: 60px;
                width: 89%;
                height: 200px;
            }
            .el-carousel__button {
                width: 16px;
                height: 16px;
                background: rgba(255, 255, 255, 1);
                border-radius: 50%;
            }
            .el-carousel__indicator--horizontal {
                width: 70px;
                text-align: center;
                display: flex;
                justify-content: center;
            }
            .el-carousel__indicator.is-active button {
                background-color: #009944 !important;
            }
            .el-carousel__arrow {
                top: 7%;
            }
            .banner .el-carousel__arrow--right {
                right: 2%;
            }
        }
    }
}
</style>