<template>
    <div class="about1">

         <router-view></router-view>
       
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