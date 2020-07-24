import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		redirect: "/index"
	},
	{
		path: '/index',
		name: 'index',
		component: () => import("@/pages/index/index.vue")
	},
	// 关于我们
	{
		path: '/about',
		name: 'about',
		component: () => import("@/pages/about.vue"),
		children: [ // 嵌套子路由
			{
				path: '', // 公司文化
				component: () => import("@/pages/about/gsjj.vue")
			},
			{
				path: 'gswh', // 公司文化
				component: () => import("@/pages/about/gswh.vue")
			},
			{
				path: 'fzlc', // 发展历程
				component: () => import("@/pages/about/fzlc.vue")
			},
			{
				path: 'jdztd', // 金大洲团队
				component: () => import("@/pages/about/jdztd.vue")
			},
			{
				path: 'ryzt', // 荣誉展台
				component: () => import("@/pages/about/ryzt.vue")
			},
			{
				path: 'gsnk', // 公司内刊
				component: () => import("@/pages/about/gsnk.vue")
			},
			{
				path: 'jdzs', // 基地展示
				component: () => import("@/pages/about/jdzs.vue")
			},
		]

	},
	// 新闻资讯
	{
		path: '/news',
		name: 'news',
		component: () => import("@/pages/news.vue")
	},
	// 产品中心
	{
		path: '/product',
		name: 'product',
		component: () => import("@/pages/product.vue")
	},
	// 在线商城
	{
		path: '/store',
		name: 'store',
		component: () => import("@/pages/store.vue")
	},
	// 联系我们
	{
		path: '/connect',
		name: 'connect',
		component: () => import("@/pages/connect.vue")
	},
	// 详情
	{
		path: '/details',
		name: 'connect',
		component: () => import("@/pages/details.vue")
	},

]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
	routes,
})

export default router