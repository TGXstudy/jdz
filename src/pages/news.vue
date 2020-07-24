<template>
    <div class="news">
        <!-- banner -->
        <div class="banner">
            <img src="../assets/news/banner.png" alt="">
        </div>
        <!-- 内容 -->
        <div class="content">
            <div class="title">
                <h1>新闻资讯</h1>
                <p>NEWS</p>
            </div>
            <div class="check">
                <div @click="cur=0" :class="{active:cur==0}">
                    <h3>公司新闻</h3>
                    <p>COMPANY NEWS</p>
                </div>
                <div @click="cur=1" :class="{active:cur==1}">
                    <h3>行业新闻</h3>
                    <p>INDUSTRY NEWS</p>
                </div>

            </div>
            <!-- 内容 -->
            <div class="check_nav">
                <div v-show="cur==0">
                    <div class="news_box">
                        <div class="left">
                            <img src="../assets/news/mr.png" alt="">
                        </div>
                        <div class="right">
                            <h3>食品生产经营日常监督检查要点培训</h3>
                            <div>2020年6月20日下午，由公司品管部郑经理为大家进行了食品生产经营日常监督检查要点培训。2020年6月20日下午，由公司品管部郑经理为大家进行了食品生产经营日常监督检查要点培训。</div>
                            <span>2020-06-23</span>
                            <button @click="to()">查看更多></button>
                        </div>
                    </div>
                    <div class="news_box">
                        <div class="left">
                            <img src="../assets/news/mr.png" alt="">
                        </div>
                        <div class="right">
                            <h3>食品生产经营日常监督检查要点培训</h3>
                            <div>2020年6月20日下午，由公司品管部郑经理为大家进行了食品生产经营日常监督检查要点培训。2020年6月20日下午，由公司品管部郑经理为大家进行了食品生产经营日常监督检查要点培训。</div>
                            <span>2020-06-23</span>
                            <button>查看更多></button>
                        </div>
                    </div>
                    <div class="block">
                        <el-pagination layout="prev, pager, next" :total="50">
                        </el-pagination>
                    </div>
                </div>
                <div v-show="cur==1">
                     <div class="news_box">
                        <div class="left">
                            <img src="../assets/news/mr.png" alt="">
                        </div>
                        <div class="right">
                            <h3>食品生产经营日常监督检查要点培训</h3>
                            <div>2020年6月20日下午，由公司品管部郑经理为大家进行了食品生产经营日常监督检查要点培训。2020年6月20日下午，由公司品管部郑经理为大家进行了食品生产经营日常监督检查要点培训。</div>
                            <span>2020-06-23</span>
                            <button>查看更多></button>
                        </div>
                    </div>
                    <div class="block">
                        <el-pagination layout="prev, pager, next" :total="50">
                        </el-pagination>
                    </div>
                </div>

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
    },
    methods:{
        to(){
           this.$router.push({path:'details',query:{id:123}})
        }
    }
};
</script>

<style lang="less" >
h3 {
    margin: 0;
    padding: 0;
}
.news {
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
                h3 {
                    margin: 0;
                    font-size: 17px;
                    font-weight: 400;
                }
                p {
                    font-size: 12px;
                    font-weight: 400;
                }
                cursor: pointer;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-right: 20px;
                width: 153px;
                height: 58px;
                background: rgba(238, 238, 238, 1);
                border-radius: 10px;
                font-family: Microsoft YaHei;
                font-weight: 400;
            }
        }
        .check_nav {
            width: 100%;
            .news_box {
                margin-bottom: 25px;
                padding: 20px;
                width: 96%;
                height: 210px;
                border: 1px solid rgba(227, 227, 227, 1);
                display: flex;
                justify-content: space-between;
                .left {
                    width: 30%;
                    overflow: hidden;
                    img {
                        width: 100%;
                        transform: scale(1);
                        transition: all linear 0.5s;
                    }
                }
                .right {
                    width: 66%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    h3 {
                        font-size: 20px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: rgba(51, 51, 51, 1);
                    }
                    div {
                        font-size: 14px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: rgba(102, 102, 102, 1);
                    }
                    span {
                        font-size: 14px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: rgba(153, 153, 153, 1);
                    }
                    button {
                        cursor: pointer;
                        border: none;
                        color: #ffffff;
                        width: 112px;
                        height: 39px;
                        background: rgba(0, 153, 68, 1);
                    }
                }
            }
            .news_box:hover {
                .left {
                    img {
                        transform: scale(1.2);
                        transition: all linear 0.5s;
                    }
                }
            }
            .block {
                margin-top: 40px;
                margin-bottom: 40px;
                display: flex;
                justify-content: center;
                .el-pagination .btn-next {
                    background-color: #009944;
                    padding: 0;
                    color: #ffffff;
                    border-radius: 3px;
                }
                .el-pagination .btn-prev {
                    background-color: #009944;
                    padding: 0;
                    color: #ffffff;
                    border-radius: 3px;
                    margin-right: 10px;
                }
                .el-pager li {
                    margin-right: 10px;
                    background: rgba(238, 238, 238, 1);
                    border-radius: 3px;
                }
                .el-pager li.active {
                    color: #009944;
                }
                .el-pager li:hover {
                    color: #009944;
                }
            }
        }
    }
}
</style>