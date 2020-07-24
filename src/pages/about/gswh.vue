<template>
    <div class="gswh">
        <!-- banner -->
        <div class="banner">
            <img src="../../assets/about/gswh/banner.png" alt="">
        </div>
        <!-- 内容 -->
        <div class="content">
            <div class="title">
                <h1>公司文化</h1>
                <p>COMPANY CULTURE</p>
            </div>
            <div class="nav">
                <div class="nav_a">
                    <ul>
                        <li>
                            <img src="../../assets/about/gswh/bj.png" alt="">
                            <p>企业愿景</p>
                            <span>成为中国菌类深加工食品持续领跑者</span>
                        </li>
                        <li>
                            <img src="../../assets/about/gswh/sm.png" alt="">
                            <p>企业使命</p>
                            <span>让我们共同成长、快乐致富</span>
                        </li>
                        <li>
                            <img src="../../assets/about/gswh/js.png" alt="">
                            <p>企业精神</p>
                            <span>成为中国菌类深加工食品持续领跑者</span>
                        </li>
                        <li>
                            <img src="../../assets/about/gswh/ln.png" alt="">
                            <p>企业经营理念</p>
                            <span>为客户创造价值、为员工创造机会、为企业创造利润</span>
                        </li>
                        <li>
                            <img src="../../assets/about/gswh/jzg.png" alt="">
                            <p>企业核心价值观</p>
                            <span>客户至上、合作共赢、敢于担当</span>
                        </li>
                        <li>
                            <img src="../../assets/about/gswh/td.png" alt="">
                            <p>团队精神</p>
                            <span>我们是一心、一体、一方的团队</span>
                        </li>
                    </ul>
                </div>
                <div class="nav_b">
                    <ul>
                        <li> <img src="../../assets/about/gswh/11.png" alt=""></li>
                        <li> <img src="../../assets/about/gswh/11.png" alt=""></li>
                        <li> <img src="../../assets/about/gswh/22.png" alt=""></li>
                        <li> <img src="../../assets/about/gswh/11.png" alt=""></li>
                        <li> <img src="../../assets/about/gswh/11.png" alt=""></li>
                        <li> <img src="../../assets/about/gswh/22.png" alt=""></li>
                        <li> <img src="../../assets/about/gswh/11.png" alt=""></li>
                        <li> <img src="../../assets/about/gswh/11.png" alt=""></li>
                    </ul>
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
h3 {
    margin: 0;
    padding: 0;
}
.gswh {
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
        .nav {
            margin-top: 80px;
            margin-bottom: 100px;
            width: 100%;
            .nav_a {
                ul {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    li {
                        height: 266px;
                        margin-bottom: 40px;
                        width: 30%;
                        background: rgba(247, 247, 249, 1);
                        display: flex;
                        flex-direction: column;

                        align-items: center;
                        img {
                            margin-top: 38px;
                            width: 80px;
                            height: 80px;
                        }
                        p {
                            margin-top: 20px;
                            font-size: 18px;
                            font-family: Microsoft YaHei;
                            font-weight: 400;
                            color: rgba(51, 51, 51, 1);
                            line-height: 30px;
                        }
                        span {
                            margin-top: 20px;
                            font-size: 14px;
                            font-family: Microsoft YaHei;
                            font-weight: 400;
                            color: rgba(102, 102, 102, 1);
                            line-height: 30px;
                        }
                    }
                }
            }
            .nav_b {
                margin-top: 40px;
                ul {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    li {
                        width: 24%;
                        margin-top: 20px;
                        img {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
}
</style>