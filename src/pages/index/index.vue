<template>
    <div class="main">
        <div class="banner">
            <template>
                <el-carousel :interval="5000" arrow="always" height="500px">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <img class="logo" src="../../assets/index/banner.png" />
                    </el-carousel-item>
                </el-carousel>
            </template>
        </div>
        <!-- 关于金大洲 -->
        <div class="about">
            <template>
                <el-carousel height="750px" direction="vertical" :autoplay="false">
                    <el-carousel-item v-for="item in 3" :key="item">
                        <div class="about_top">
                            <img src="../../assets/index/jdz_title.png" alt="">
                        </div>
                        <div class="about_bottom">
                            <div class="bottom1">
                                <h3>公司简介</h3>
                                <div>成都金大洲实业发展有限公司是一家专注川味零食16年的老品牌,成都金大洲实业发展公司成立于2001年，专注于即食金针菇产品的研发、生产与销售。连续10年生产、销售即食金针菇产品全国第一，是全国最大的金针菇深加工企业，现已建成3条现代化生产线。获得2项金针菇加工工艺国家级发明专利，并获得与金针菇加工工艺配套的7项实用新型专利。...</div>
                                <button>MORE></button>
                            </div>
                            <div class="bottom2">
                                <ul>
                                    <li>
                                        <img src="../../assets/index/gswh.png" alt="">
                                        <p>企业文化</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/index/fzlc.png" alt="">
                                        <p>发展历程</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/index/jdztd.png" alt="">
                                        <p>金大洲团队</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/index/ryzt.png" alt="">
                                        <p>荣誉展台</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/index/gsnk.png" alt="">
                                        <p>公司内刊</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/index/jdzs.png" alt="">
                                        <p>基地展示</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </template>
        </div>
        <!-- 金大洲的对比 -->
        <div class="jdzdb">
            <template>
                <el-carousel height="800px" direction="vertical" :autoplay="false">
                    <el-carousel-item v-for="item in 3" :key="item">
                        <div class="db_top">
                            <img src="../../assets/index/db_title.png" alt="">
                        </div>
                        <div class="db_bottom">
                            <div class="dbbox">
                                <div class="boxleft">
                                    <h3>好品牌-四川著名商标//上亿的消费者</h3>
                                    <div>
                                        品牌价值高，作为即食金针菇开创者，当之无愧是行业一块响当当的金字招牌；品牌认知度高，2017年被列为成都造作为伴手礼代表四川发往全世界。
                                    </div>
                                </div>
                                <div class="boxmiddle">
                                    VS
                                    <br/> 其他产品
                                </div>
                                <div class="boxright">
                                    <h3>好品牌-四川著名商标//上亿的消费者</h3>
                                    <div>
                                        品牌价值高，作为即食金针菇开创者，当之无愧是行业一块响当当的金字招牌；品牌认知度高，2017年被列为成都造作为伴手礼代表四川发往全世界。
                                    </div>
                                </div>
                            </div>
                            <div class="dbbox">
                                <div class="boxleft">
                                    <h3>好产品-经典美味/产品丰富/畅销</h3>
                                    <div>
                                        市场占有率高，产品市场占有率65%以上，销量在全国遥遥领先。好根底：公司基础扎实，拥有两个现代化厂区，六条标准化生产线六套严格把关的品控班子，一个军事化的管理团队，两个中国最大的金针菇种植基地。
                                    </div>
                                </div>
                                <div class="boxmiddle">
                                    VS
                                    <br/> 其他产品
                                </div>
                                <div class="boxright">
                                    <h3>产品单一/产品单一产品单一</h3>
                                    <div>
                                        品牌价值高，作为即食金针菇开创者，当之无愧是行业一块响当当的金字招牌；品牌认知度高，2017年被列为成都造作为伴手礼代表四川发往全世界。
                                    </div>
                                </div>
                            </div>
                            <div class="dbbox">
                                <div class="boxleft">
                                    <h3>好行业-中国特殊国情=无限前景</h3>
                                    <div>
                                        民以食为天，休闲零食行业永远不全客户，一直以来都是市场中成熟。稳健的项目尤其在中国十三亿人口的大市场中，更是一块大蛋糕。
                                    </div>
                                </div>
                                <div class="boxmiddle">
                                    VS
                                    <br/> 其他产品
                                </div>
                                <div class="boxright">
                                    <h3>无保障/无保障/无保障/</h3>
                                    <div>
                                        品牌价值高，作为即食金针菇开创者，当之无愧是行业一块响当当的金字招牌；品牌认知度高，2017年被列为成都造作为伴手礼代表四川发往全世界。
                                    </div>
                                </div>
                            </div>

                        </div>
                    </el-carousel-item>
                </el-carousel>
            </template>
        </div>
        <!-- 选择我们 -->
        <div class="xzwm">
            <template>
                <el-carousel height="700px" direction="vertical" :autoplay="false">
                    <el-carousel-item v-for="item in 3" :key="item">
                        <div class="xz_top">
                            <img src="../../assets/index/xzwm.png" alt="">
                        </div>
                        <div class="xz_bottom">
                            <ul>
                                <li>
                                    <div class="top">
                                        <img src="../../assets/index/xz1.png" alt="">
                                    </div>
                                    <div class="bottom">
                                        <h3>优质原料</h3>
                                        <p>产品有使用海拔3000米以上的川西高原种植基地的金针菇原料，产品在无污染的大自然环境生长，产品更绿色。</p>
                                        <button>查看详情></button>
                                    </div>
                                </li>
                                <li>
                                    <div class="top">
                                        <img src="../../assets/index/xz2.png" alt="">
                                    </div>
                                    <div class="bottom">
                                        <h3>独有配方</h3>
                                        <p>产品有使用海拔3000米以上的川西高原种植基地的金针菇原料，产品在无污染的大自然环境生长，产品更绿色。</p>
                                        <button>查看详情></button>
                                    </div>
                                </li>
                                <li>
                                    <div class="top">
                                        <img src="../../assets/index/xz3.png" alt="">
                                    </div>
                                    <div class="bottom">
                                        <h3>手工秘制</h3>
                                        <p>产品有使用海拔3000米以上的川西高原种植基地的金针菇原料，产品在无污染的大自然环境生长，产品更绿色。</p>
                                        <button>查看详情></button>
                                    </div>
                                </li>
                                <li>
                                    <div class="top">
                                        <img src="../../assets/index/xz4.png" alt="">
                                    </div>
                                    <div class="bottom">
                                        <h3>保鲜工艺</h3>
                                        <p>产品有使用海拔3000米以上的川西高原种植基地的金针菇原料，产品在无污染的大自然环境生长，产品更绿色。</p>
                                        <button>查看详情></button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </template>
        </div>
        <!-- 新闻资讯 -->
        <div class="xwzx">
            <template>
                <el-carousel height="800px" direction="vertical" :autoplay="false">
                    <el-carousel-item v-for="item in 3" :key="item">
                        <div class="xw_top">
                            <img src="../../assets/index/news.png" alt="">
                        </div>
                        <div class="xw_bottom">
                            <!-- 左边 -->
                            <div class="left" v-show="cur==0">
                                <img src="../../assets/index/xwzx.png" alt="">
                                <span>2020-06-22</span>
                                <h3>六月月会——不忘初心</h3>
                                <p>6月1日，公司召开六月月会，本月月会恰逢儿童节，以“不忘初心”为主题。</p>
                                <button>查看更多></button>
                            </div>
                            <div class="left" v-show="cur==1">
                                <img src="../../assets/index/xwzx.png" alt="">
                                <span>2020-06-23</span>
                                <h3>六月月会——不忘初心</h3>
                                <p>6月1日，公司召开六月月会，本月月会恰逢儿童节，以“不忘初心”为主题。</p>
                                <button>查看更多></button>
                            </div>
                            <div class="left" v-show="cur==2">
                                <img src="../../assets/index/xwzx.png" alt="">
                                <span>2020-06-24</span>
                                <h3>六月月会——不忘初心</h3>
                                <p>6月1日，公司召开六月月会，本月月会恰逢儿童节，以“不忘初心”为主题。</p>
                                <button>查看更多></button>
                            </div>
                            <!-- 右边 -->
                            <div class="right">
                                <div class="checkbox" @click="cur=0" :class="{active:cur==0}">
                                    <span>2020-06-23</span>
                                    <h3>食品生产经营日常监督检查要点培训</h3>
                                    <p>2020年6月20日下午，由公司品管部郑经理为大家进行了食品生产经营日常监督检查要点培训</p>
                                </div>
                                <div class="checkbox" @click="cur=1" :class="{active:cur==1}">
                                    <span>2020-06-23</span>
                                    <h3>食品生产经营日常监督检查要点培训</h3>
                                    <p>2020年6月20日下午，由公司品管部郑经理为大家进行了食品生产经营日常监督检查要点培训</p>
                                </div>
                                <div class="checkbox" @click="cur=2" :class="{active:cur==2}">
                                    <span>2020-06-23</span>
                                    <h3>食品生产经营日常监督检查要点培训</h3>
                                    <p>2020年6月20日下午，由公司品管部郑经理为大家进行了食品生产经营日常监督检查要点培训</p>
                                </div>
                            </div>

                        </div>
                    </el-carousel-item>
                </el-carousel>
            </template>
        </div>
        <!-- 客户见证 -->
        <div class="khjz">
            <template>
                <el-carousel height="800px" direction="vertical" :autoplay="false">
                    <el-carousel-item v-for="item in 3" :key="item">
                        <div class="kh_top">
                            <img src="../../assets/index/khjz_title.png" alt="">
                        </div>
                        <div class="kh_bottom">
                            <ul>
                                <li>
                                    <img src="../../assets/index/hqls1.png" alt="">
                                    <p>红旗连锁超市</p>
                                </li>
                                <li>
                                    <img src="../../assets/index/werm1.png" alt="">
                                    <p>红旗连锁超市</p>
                                </li>
                                <li>
                                    <img src="../../assets/index/yt1.png" alt="">
                                    <p>红旗连锁超市</p>
                                </li>
                                <li>
                                    <img src="../../assets/index/hqls1.png" alt="">
                                    <p>红旗连锁超市</p>
                                </li>
                                <li>
                                    <img src="../../assets/index/werm1.png" alt="">
                                    <p>红旗连锁超市</p>
                                </li>
                                <li>
                                    <img src="../../assets/index/yt1.png" alt="">
                                    <p>红旗连锁超市</p>
                                </li>
                            </ul>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </template>
        </div>
        <!-- 在线商城 -->
        <div class="zxsc">
            <template>
                <el-carousel height="600px" direction="vertical" :autoplay="false">
                    <el-carousel-item v-for="item in 3" :key="item">
                        <div class="zx_top">
                             <img src="../../assets/index/zxsc.png" alt="">
                        </div>
                        <div class="zx_bottom">
                            <ul>
                                <li>
                                     <img src="../../assets/index/wd1.png" alt="">
                                     <p>金大洲微店</p>
                                </li>
                                <li>
                                     <img src="../../assets/index/jd1.png" alt="">
                                     <p>金大洲京东店</p>
                                </li>
                                <li>
                                     <img src="../../assets/index/tm1.png" alt="">
                                     <p>金大洲天猫店</p>
                                </li>
                            </ul>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            height: 500,
            cur: 0 //默认选中第一个tab
        };
    },
    mounted() {
        var h =
            document.documentElement.clientHeight || document.body.clientHeight;
        this.height = h - 100; //减去页面上固定高度height
    }
};
</script>

<style lang="less" >
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
h3 {
    margin: 0;
}
p {
    margin: 0;
    padding: 0;
}
.banner {
    width: 100%;
}
.banner .el-carousel__arrow--left {
    left: 13%;
}
.banner .el-carousel__arrow--right {
    right: 13%;
}
.about {
    .el-carousel__indicators--vertical {
        right: 1%;
    }
    .el-carousel__button {
        width: 14px;
        height: 14px;
        border: 1px solid rgba(255, 255, 255, 1);
        border-radius: 50%;
    }
    width: 100%;
    background-image: url(../../assets/index/gyjdz.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .about_top {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 70px;
        img {
            width: 15%;
        }
    }
    .about_bottom {
        width: 77%;
        display: flex;
        justify-content: space-between;
        margin: 50px auto;
        .bottom1 {
            width: 45%;
            display: flex;
            flex-direction: column;
            h3 {
                font-weight: normal;
                font-size: 18px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
                line-height: 30px;
                margin-bottom: 30px;
            }
            div {
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
                line-height: 30px;
            }
            button {
                margin-top: 50px;
                width: 116px;
                height: 33px;
                background: rgba(0, 153, 68, 1);
                color: #fff;
                border: none;
                outline: none;
            }
        }
        .bottom2 {
            width: 45%;
            height: 250px;
            ul {
                list-style: none;
                width: 100%;
                li {
                    text-align: center;
                    p {
                        font-size: 14px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                    }
                    margin-top: 20px;
                    list-style: none;
                    width: 32%;
                    float: left;
                    img {
                        width: 40%;
                    }
                }
            }
        }
    }
}
.jdzdb {
    width: 100%;
    .el-carousel__indicators--vertical {
        right: 1%;
    }
    .el-carousel__button {
        width: 14px;
        height: 14px;
        background: rgba(0, 153, 68, 1);
        border-radius: 50%;
    }
    .db_top {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 70px;
        img {
            width: 20%;
        }
    }
    .db_bottom {
        width: 80%;
        margin: 50px auto;
        .dbbox {
            position: relative;
            height: 180px;
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            .boxmiddle {
                width: 156px;
                height: 156px;
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                font-size: 18px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                top: 6%;
                left: 44%;
                background-image: url(../../assets/index/ty.png);
                background-size: 100% 100%;
                background-repeat: no-repeat;
            }
            .boxleft {
                h3 {
                    font-size: 18px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 1);
                }
                div {
                    font-size: 14px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #fff;
                }
                padding-left: 30px;
                padding-right: 78px;
                width: 39%;
                height: 180px;
                background-color: #009944;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
            }
            .boxright {
                h3 {
                    font-size: 18px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
                }
                div {
                    font-size: 14px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: rgba(153, 153, 153, 1);
                }
                padding-left: 78px;
                padding-right: 30px;
                width: 39%;
                height: 180px;
                background-color: #f6f6f6;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
            }
        }
    }
}
.xzwm {
    .el-carousel__indicators--vertical {
        right: 1%;
    }
    .el-carousel__button {
        width: 14px;
        height: 14px;
        border: 1px solid rgba(255, 255, 255, 1);
        border-radius: 50%;
    }
    margin-top: 50px;
    width: 100%;
    background-image: url(../../assets/index/xz_banner.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .xz_top {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 70px;
        img {
            width: 20%;
        }
    }
    .xz_bottom {
        width: 80%;
        margin: 50px auto;
        ul {
            list-style: none;
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 0;
            li {
                height: 400px;
                float: left;
                width: 23%;
                .top {
                    width: 100%;
                    height: 220px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .bottom {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    padding-left: 20px;
                    padding-right: 20px;
                    height: 180px;
                    background-color: #fff;
                    h3 {
                        font-size: 20px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: rgba(51, 51, 51, 1);
                    }
                    p {
                        font-size: 14px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: rgba(153, 153, 153, 1);
                    }
                    button {
                        width: 99px;
                        height: 28px;
                        background: rgba(0, 145, 64, 1);
                        border: none;
                        color: #fff;
                    }
                }
            }
        }
    }
}
.xwzx {
    width: 100%;
    .el-carousel__indicators--vertical {
        right: 1%;
    }
    .el-carousel__button {
        width: 14px;
        height: 14px;
        background: rgba(0, 153, 68, 1);
        border-radius: 50%;
    }
    .xw_top {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 70px;
        img {
            width: 15%;
        }
    }
    .xw_bottom {
        width: 80%;
        margin: 50px auto;
        display: flex;
        justify-content: space-between;
        .left {
            width: 48%;
            span {
                width: 90%;
                margin-top: 20px;
                padding-left: 30px;
                font-size: 24px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
            }
            h3 {
                margin-top: 20px;
                padding-left: 30px;
                font-size: 20px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
            }
            p {
                width: 90%;
                margin-top: 20px;
                padding-left: 30px;
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: rgba(102, 102, 102, 1);
            }
            button {
                margin-top: 20px;
                margin-left: 30px;
                width: 112px;
                height: 39px;
                background: rgba(0, 153, 68, 1);
                border: none;
                color: #fff;
            }
        }
        .right {
            width: 48%;
            .active::before {
                content: "";
                width: 0;
                height: 0;
                border: 18px solid;
                position: absolute;
                bottom: 35%;
                left: -6%;
                border-color: transparent #009944 transparent transparent;
            }
            .active {
                background: #009944 !important;
                position: relative;
                span {
                    color: #fff !important;
                }
                h3 {
                    color: #fff !important;
                }
                p {
                    color: #fff !important;
                }
            }
            .checkbox {
                cursor: pointer;
                margin-bottom: 10px;
                width: 98%;
                padding-left: 20px;
                padding-right: 20px;
                height: 160px;
                background: rgba(240, 240, 240, 1);
                border: 2px solid rgba(255, 255, 255, 0.26);
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                span {
                    font-size: 24px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: rgba(153, 153, 153, 1);
                }
                h3 {
                    font-size: 20px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: rgba(51, 51, 51, 1);
                }
                p {
                    font-size: 16px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: rgba(102, 102, 102, 1);
                }
            }
        }
    }
}
.khjz {
    .el-carousel__indicators--vertical {
        right: 1%;
    }
    .el-carousel__button {
        width: 14px;
        height: 14px;
        border: 1px solid rgba(255, 255, 255, 1);
        border-radius: 50%;
    }
    width: 100%;
    background-image: url(../../assets/index/khjz.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding-bottom: 50px;
    .kh_top {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 70px;
        img {
            width: 15%;
        }
    }
    .kh_bottom {
        width: 80%;
        margin: 50px auto;
        ul {
            width: 100%;
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li {
                margin-bottom: 20px;
                width: 32%;
                float: left;
                height: 300px;
                background-color: #fff;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                p {
                    margin-top: 10px;
                }
            }
        }
    }
}
.zxsc {
     .el-carousel__indicators--vertical {
        right: 1%;
    }
    .el-carousel__button {
        width: 14px;
        height: 14px;
        border: 1px solid rgba(255, 255, 255, 1);
        border-radius: 50%;
    }
    width: 100%;
    background: rgba(0, 145, 64, 1);
    .zx_top{
          width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 70px;
        img {
            width: 15%;
        }
    }
    .zx_bottom{
         width: 80%;
        margin: 50px auto;
        ul{
            width: 100%;
            display: flex;
            li{
                float: left;
                width: 33%;
                height: 300px;
                position: relative;
                img{
                    width: 100%;
                    height: 100%;
                }
                p{
                    position: absolute;
                    bottom: 20%;
                    left: 40%;
                }
            }
        }
    }
}
</style>