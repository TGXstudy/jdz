<template>
    <div class="connect">
        <!-- banner -->
        <div class="banner">
            <img src="../assets/connect/banner.png" alt="">
        </div>
        <!-- 内容 -->
        <div class="connect_nav">
            <div class="title">
                <h1>联系我们</h1>
                <p>contact us </p>
            </div>
            <div class="lx_nav">
                <div class="left">
                    <div class="top">
                        <h3> 成都金大洲实业发展有限公司</h3>
                        <p>服务热线：028-67517995</p>
                        <p>公司地址：成都市郫县安德镇永和路339号</p>
                    </div>
                    <div class="bottom">
                        <h3> 招商加盟</h3>
                        <p>传统经销商：028-87868686</p>
                        <p>产品经理：裴先生：13808205074</p>
                        <p>电商事业部招商：028-87793077</p>
                        <p>OEM招商：刘先生：13488908408</p>
                    </div>
                </div>
                <div class="right">
                     <img src="../assets/connect/ewm.png" alt="">
                </div>
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

<style lang="less" >
.connect {
    width: 100%;
    .banner {
        width: 100%;
        height: auto;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .connect_nav {
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
        .lx_nav {
            width: 75%;
            margin: 0 auto;
            margin-top: 80px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 150px;
            .left {
                width: 48%;
                .top {
                    h3 {
                        font-size: 24px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: rgba(51, 51, 51, 1);
                        margin-bottom: 25px;
                    }
                    p {
                        font-size: 16px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: rgba(51, 51, 51, 1);
                        line-height: 30px;
                    }
                }
                .bottom {
                    margin-top: 45px;
                    h3 {
                        font-size: 24px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: rgba(51, 51, 51, 1);
                        margin-bottom: 25px;
                    }
                    p {
                        font-size: 16px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: rgba(51, 51, 51, 1);
                        line-height: 30px;
                    }
                }
            }
            .right {
                width: 48%;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width: 80%;
                }
            }
        }
    }
}
</style>