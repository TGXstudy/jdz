<template>
    <div class="jdzs">
        <!-- banner -->
        <div class="banner">
            <img src="../../assets/about/jdzs/banner.png" alt="">
        </div>
        <!-- 内容 -->
        <div class="content">
            <div class="title">
                <h1>基地展示</h1>
                <p>BASE SHOW</p>
            </div>
            <div class="nav1">
                <div class="left">
                    <h3>优选材料</h3>
                    <div>

                        我们原料采购标准：金大洲原料采购必须符合国家相关法律法规要求，无腐烂、变质现象，无杂质、异物及时采摘、装袋、运输，确保原料新鲜度，运输过程不得与有毒有害物品共同运输，必须保证原料的安全卫生，源于天然，来自绿色。 我们的产品之所以有这么美味，因为它拥有独具一格的工艺，工艺的独特与生产设备密切相关，由于公司设备较多，用途不同，现下面将我公司部分设施设备做简单介绍。 桥式起重机是原料转运的好搭档，减少员工劳动力，避免人流和物流交叉污染；全自动杀青流水生产线，保证原料生熟一致，减少人力。 漂洗流水生产线，原料经过分段漂洗，清洗更彻底。 数十台离心机，严格控制半成品水分，保证产品口感更加脆嫩。 全自动罐装-包装一体机，采用自动下料的方式进行产品罐装，自动抽真空、封口，极大提高生产效率，减少操作人员数量。 全自动拉伸膜包装机，集罐装、抽真空、封口于一体，实现产品的连续生产包装。 全自动巴氏杀菌线，集杀菌、冷却、烘干于一体，实现产品的连续式灭菌操作。

                    </div>
                </div>
                <div class="right">
                    <div class="zz">

                    </div>
                    <ul>
                        <li> <img src="../../assets/about/jdzs/11.png" alt=""></li>
                        <li> <img src="../../assets/about/jdzs/11.png" alt=""></li>
                        <li> <img src="../../assets/about/jdzs/zs1.png" alt=""></li>
                        <li> <img src="../../assets/about/jdzs/11.png" alt=""></li>
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
        .nav1{
            margin-top: 80px;
            margin-bottom: 100px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            .left {
                width: 48%;
                font-size: 15px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
                line-height: 30px;
                h3 {
                    font-weight: 400;
                }
                div {
                    text-align: left;
                }
            }
            .right {
                width: 48%;
                position: relative;
                .zz {
                    z-index: -1;
                    position: absolute;
                    top: -22%;
                    left: 22%;
                    width: 500px;
                    height: 500px;
                    background: rgba(247, 247, 249, 1);
                }
                ul {
                    z-index: 999;
                    display: flex;
                    flex-wrap: wrap;
                    li {
                        width: 40%;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }
}
</style>