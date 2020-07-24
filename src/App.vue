<template>
  <div id="app">
    	<headerBar></headerBar>
      <router-view></router-view>
      <FooterBox></FooterBox>
  </div>
</template>

<script>
import headerBar from "@/components/headerBar.vue";
import FooterBox from "@/components/FooterBox.vue";
export default {
  components: {
      headerBar,
      FooterBox,
		},
		name: 'App',
		data() {
			return {
				hearderType:'main'
			}
		},
		
		
}

</script>



<style>
#app{
	margin: 0;
	padding: 0
}

p{
	margin: 0;
}
ul{
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>
