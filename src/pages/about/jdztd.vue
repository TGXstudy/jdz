<template>
    <div class="jdztd">
        <!-- banner -->
        <div class="banner">
            <img src="../../assets/about/jdztd/banner.png" alt="">
        </div>
        <!-- 内容 -->
        <div class="content">
            <div class="title">
                <h1>金大洲团队</h1>
                <p>ICOMPANY TEAM</p>
            </div>
            <div class="nav">
                <ul>
                    <li>
                        <div class="top">
                            <img src="../../assets/about/jdztd/11.png" alt="">
                        </div>
                        <p>普及之行</p>
                    </li>
                    <li>
                        <div class="top">
                            <img src="../../assets/about/jdztd/22.png" alt="">
                        </div>
                        <p>普及之行</p>
                    </li>
                    <li>
                        <div class="top">
                            <img src="../../assets/about/jdztd/11.png" alt="">
                        </div>
                        <p>普及之行</p>
                    </li>
                </ul>
                
            </div>
            <!-- 分页 -->
             <div class="block">
                        <el-pagination layout="prev, pager, next" :total="50">
                        </el-pagination>
                    </div>
        </div>

    </div>
</template>

<script>
export default {};
</script>

<style lang="less" >
h3 {
    margin: 0;
    padding: 0;
}
.jdztd {
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
            ul {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                li {
                    padding: 20px;
                    width: 29%;
                    height: 310px;
                    border: 1px solid rgba(227, 227, 227, 1);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    .top {
                        width: 100%;
                        img {
                            width: 100%;
                        }
                    }
                    p {
                        font-weight: 400;
                        text-align: center;
                        font-size: 18px;
                        font-family: Microsoft YaHei;
                        color: rgba(51, 51, 51, 1);
                      
                    }
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
</style>