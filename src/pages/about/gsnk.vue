<template>
    <div class="gsnk">
        <!-- banner -->
        <div class="banner">
            <img src="../../assets/about/gsnk/banner.png" alt="">
        </div>
        <!-- 内容 -->
        <div class="content">
            <div class="title">
                <h1>公司内刊</h1>
                <p>INSIDE THE COMPANY</p>
            </div>
            <div class="nav">

                <div>
                    <viewer class="img" :images="images" >
                        <img v-for="item in images" :src="item.src" :key="item.index" height="100">
                    </viewer>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import Viewer from "v-viewer";
import "viewerjs/dist/viewer.css";
Vue.use(Viewer);
Viewer.setDefaults;
export default {
    data() {
        return {
            images: [
                {
                    src:
                        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3272199364,3404297250&fm=26&gp=0.jpg",
                    index: 1
                },
                {
                    src:
                        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3267295166,2381808815&fm=26&gp=0.jpg",
                    index: 2
                },
                {
                    src:
                        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3429654663,2972188411&fm=26&gp=0.jpg",
                    index: 3
                },
                {
                    src:
                        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3597323878,2962972725&fm=26&gp=0.jpg",
                    index: 4
                }
            ]
        };
    },
    mounted() {
        Viewer.setDefaults({
            inline: true,
            button: true, //右上角按钮
            navbar: true, //底部缩略图
            title: true, //当前图片标题
            toolbar: true, //底部工具栏
            tooltip: true, //显示缩放百分比
            movable: true, //是否可以移动
            zoomable: true, //是否可以缩放
            rotatable: true, //是否可旋转
            scalable: true, //是否可翻转
            transition: true, //使用 CSS3 过度
            fullscreen: true, //播放时是否全屏
            keyboard: true, //是否支持键盘
            url: "data-source",
            ready: function(e) {
                console.log(e.type, "组件以初始化");
            },
            show: function(e) {
                console.log(e.type, "图片显示开始");
            },
            shown: function(e) {
                console.log(e.type, "图片显示结束");
            },
            hide: function(e) {
                console.log(e.type, "图片隐藏完成");
            },
            hidden: function(e) {
                console.log(e.type, "图片隐藏结束");
            },
            view: function(e) {
                console.log(e.type, "视图开始");
            },
            viewed: function(e) {
                console.log(e.type, "视图结束");
                // 索引为 1 的图片旋转20度
                if (e.detail.index === 1) {
                    this.viewer.rotate(20);
                }
            },
            zoom: function(e) {
                console.log(e.type, "图片缩放开始");
            },
            zoomed: function(e) {
                console.log(e.type, "图片缩放结束");
            }
        });
    }
};
</script>

<style lang="less">
h3 {
    margin: 0;
    padding: 0;
}
.gsnk {
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
            .img{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                img{
                    width: 32%;
                    margin-bottom: 17px;
                    object-fit: cover;
                }
            }
        }
    }
}
</style>