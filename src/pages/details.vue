<template>
    <div class="details">
        <!-- banner -->
        <div class="banner">
            <img src="../assets/news/banner.png" alt="">
        </div>
        <!-- 内容 -->
        <div class="conten">
            <div class="mbx">
                <router-link to="">首页</router-link>
                <span>></span>
                <router-link to="">新闻资讯</router-link>
                <span>></span>
                <router-link to="">企业新闻</router-link>
            </div>
        </div>
        <div class="content2">
            <div class="top">
                <h3>食品生产经营日常监督检查要点培训</h3>
                <span>发布时间：2020-01-26 19:19:57  浏览：4957次</span>
            </div>
            <div class="bottom">
                111
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
.details {
    width: 100%;
    .banner {
        width: 100%;
        height: auto;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .conten {
        width: 80%;
        margin: 0 auto;
        .mbx {
            margin-top: 30px;
            margin-bottom: 30px;
            a {
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
                text-decoration: none;
                margin: 5px;
            }
            span {
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
                margin-right: 5px;
            }
        }
    }
    .content2 {
        width: 77%;
        margin: 0 auto;
        border: 1px solid rgba(227, 227, 227, 1);
        padding: 20px;
        padding-top: 40px;
        .top {
            height: 80px;
            border-bottom: 1px solid rgba(229, 229, 229, 1);
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            h3 {
                font-size: 30px;
                font-family: Microsoft YaHei;
                font-weight: bold;
                color: rgba(51, 51, 51, 1);
            }
            span {
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
            }
        }
        .bottom{
            padding-top: 20px;
        }
    }
}
</style>