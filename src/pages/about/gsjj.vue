<template>
    <div class="about1">

      
        <!-- banner -->
        <div class="banner">
            <img src="../../assets/about/banner.png" alt="">
        </div>
        <!-- 内容 -->
        <div class="content">
            <div class="title">
                <h1>关于我们</h1>
                <p>ABOUT US</p>
            </div>
            <div class="check">
                <div class="" v-for="(item,index) of navList"  :key='index' @click="choosePage(index,item.path)" >
                    <h3>{{item.name}}</h3>
                    <p>{{item.name2}}</p>
                </div>
               
            </div>
        </div>

        <!-- 公司简介 -->
        <div class="gsjj">
            <div class="left">
                <h3>成都金大洲实业发展有限公司</h3>
                <div>

                    成都金大洲实业发展公司成立于2001年公司座落于美丽的郫县安德中国川菜产业化园区现有固定资产8000万公司占地面积45余亩建筑面积约24500平方米我们有完整的现代化厂区五条标准化流水生产线五套严格把关的品控班子 成都金大洲实业发展有限公司是一家专注川味零食16年的老品牌,专注于即食金针菇产品的研发、生产与销售。 2005年进军食用菌生产加工，历经十余年的专研发展成为四川省农业产业化企业，金大洲选用新鲜，绿色，口感饱满的好原料，结合传统四川风味，依托完善的生产流水线，成功研制出，色泽鲜美，脆嫩爽口的“香辣金针菇”等系列休闲食品。 品质稳定、健康美味的金大洲产品，被消费者评选为休闲食品满意度五颗星的品牌。
                </div>
            </div>
            <div class="right">
                <img src="../../assets/about/gstp.png" alt="">
            </div>
        </div>
        <!-- 公司图片 -->
        <div class="gstp">
            <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide><img src="../../assets/about/zs1.png" alt=""></swiper-slide>
               <swiper-slide><img src="../../assets/about/zs2.png" alt=""></swiper-slide>
                <swiper-slide><img src="../../assets/about/zs3.png" alt=""></swiper-slide>
                <swiper-slide><img src="../../assets/about/zs1.png" alt=""></swiper-slide>
                 <swiper-slide><img src="../../assets/about/zs2.png" alt=""></swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {

            navList: [
                 {
						name: '公司简介',
                        path: '/about',
                        name2:"COMPANY PROFILE"
					},
                    {
						name: '公司文化',
                        path: '/about/gswh',
                        name2:"COMPANY CULTURE"
					},
					{
						name: '发展历程',
                        path: '/about/fzlc',
                       name2:"DEVELOPMENT PROCESS"
					},
					{
						name: '金大州团队',
                        path: '/about/jdztd',
                        name2:"ICOMPANY TEAM"
					},
					{
						name: '荣誉展台',
                        path: '/about/ryzt',
                         name2:"INSIDE THE COMPANY"
					},
					{
						name: '公司内刊',
                        path: '/about/gsnk',
                        name2:"INSIDE THE COMPANY"
					},
					{
						name: '基地展示',
                        path: '/about/jdzs',
                        name2:"BASE SHOW"
					},
					
				],
            swiperOptions: {
                spaceBetween: 10,
                slidesPerView: 3.5,
                pagination: {
                    el: ".swiper-pagination",
                    
                }
               
            }
        };
    },
    methods:{
        	choosePage(index,path) {
				this.navIndex = index;
				this.$router.push({
					path
				})
			}
    }
};
</script>

<style lang="less">
.title_active {
    background: rgba(0, 153, 68, 1) !important;
    color: #ffffff;
}
h3 {
    margin: 0;
    padding: 0;
}
.about1 {
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
            flex-wrap: wrap;
            justify-content: flex-start;
            .active {
                background: rgba(0, 153, 68, 1);
                color: #ffffff;
            }
            div:hover {
                background: rgba(0, 153, 68, 1) !important;
                color: #ffffff;
            }
            div {
                margin-bottom: 30px;
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
                width: 200px;
                height: 65px;
                background: rgba(238, 238, 238, 1);
                border-radius: 10px;
                font-family: Microsoft YaHei;
                font-weight: 400;
            }
        }
    }
    .gsjj {
        width: 80%;
        margin: 80px auto;
        display: flex;
        justify-content: space-between;
        .left {
            width: 40%;
            h3 {
                font-size: 18px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: rgba(0, 153, 68, 1);
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
        }
        .right {
            width: 58%;
            img {
                width: 100%;
            }
        }
    }
    .gstp {
        cursor: pointer;
        width: 80%;
        margin: 0 auto;
        margin-top: 80px;
        margin-bottom: 80px;
        .swiper-slide{
            height: 250px;
            img{
                width: 98%;
            }
        }
    }
}
</style>