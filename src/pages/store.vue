<template>
    <div class="store">
          <!-- banner -->
        <div class="banner">
            <img src="../assets/store/banner.png" alt="">
        </div>
        <!-- 内容 -->
        <div class="content">
             <div class="title">
                <h1>在线商城</h1>
                <p>Online shopping mall</p>
                <span>您可以多种渠道购买我们的产品</span>
            </div>
            <div class="content">
                <ul>
                                <li>
                                     <img src="../assets/index/wd1.png" alt="">
                                     <p>金大洲微店</p>
                                </li>
                                <li>
                                     <img src="../assets/index/jd1.png" alt="">
                                     <p>金大洲京东店</p>
                                </li>
                                <li>
                                     <img src="../assets/index/tm1.png" alt="">
                                     <p>金大洲天猫店</p>
                                </li>
                            </ul>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               data() {
                   return {
                       
                   }
               },
            }
        },
    }
</script>

<style lang="less" >
h3 {
    margin: 0;
    padding: 0;
}
.store{
    width: 100%;
     .banner {
        width: 100%;
        height: auto;
        img {
            width: 100%;
            height: 100%;
        }
    }
     .content{
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
            span{
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(94,181,131,1);
            font-size: 13px;
            }
        }
        .content{
            margin-top: 80px;
            margin-bottom: 100px;
            width: 100%;
            ul{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                li{
                float: left;
                width: 32%;
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

}
</style>