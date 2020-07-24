<template>
    <div class="head">
        <div class="head_left">
            	<img  class="logo" src="../assets/index/logo.png"/>
                <p>中国金针菇产业持续领跑者</p>
        </div>
        <div class="head_middle">
            <div v-for="(item,index) of navList" :class='{active:index==navIndex}' :key='index' @click="choosePage(index,item.path)">{{item.name}}</div>
           
        </div>
        <div class="head_right">
            <img  class="logo" src="../assets/index/phone.png"/>
                <p>028-67517995</p>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                navIndex:0,
                navList: [{
						name: '官网首页',
                        path: '/index',
                      
					},
					{
						name: '关于我们',
                        path: '/about',
                       
					},
					{
						name: '新闻资讯',
                        path: '/news',
                        
					},
					{
						name: '产品中心',
                        path: '/product',
                         
					},
					{
						name: '在线商城',
                        path: '/store',
                        
					},
					{
						name: '联系我们',
                        path: '/connect',
                        
					},
					
				]
            }
        },
        methods:{
            	choosePage(index,path) {
				this.navIndex = index;
				this.$router.push({
					path
				})
			}
        },
        computed:{
			hash(){
				return this.$route.path
			}
        },
        watch: {
 
},
    }
</script>

<style lang="less" scoped>
.head{
    width: 80%;
    margin: 0 auto;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 5px;
    .head_left{
        img{
            width: 112px;
            height: 65px;
            margin-right: 10px;
        }
        display: flex;
        font-size: 16px;
        align-items: center;
        color:rgba(51,51,51,1);
    }
    .head_middle{
        display: flex;
    align-items: center;
      font-size: 16px;
      .active{
          border-bottom: 3px solid #009944;
      }
      div{
          margin-left: 20px;
          height: 100%;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
      }
    }
    .head_right{
        img{
            width: 17px;
            height: 17px;
            margin-right: 10px;
        }
        display: flex;
        align-items: center;
        color: #009944;
        font-size: 16px;
    }
}
</style>

