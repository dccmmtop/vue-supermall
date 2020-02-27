<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll :probe-type="3" @scroll="contentScroll" @pulliingUp="loadMore" :pull-up-load="true" class="content">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend-view  :recommends="recommends"></recommend-view>
      <feature-view/>

    </scroll>
  </div>
</template>

<script>
  // @ is an alias to /src

  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "views/home/childComps/HomeSwiper";
  import RecommendView from "views/home/childComps/RecommendView";
  import FeatureView from "views/home/childComps/FeatureView";

  import Scroll from "components/common/scroll/Scroll";

  import {getHomeMultiData} from "network/home";

  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      Scroll
    },
    data(){
      return{
        banners: [],
        recommends: []
      }
    },
    created() {
      //1.请求多个数据
      this.getHomeMultiData();
    },

    methods:{
      swiperImageLoad(){
        // this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      },

      getHomeMultiData() {
        getHomeMultiData().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;

        }).catch(err => {
          console.log(err)
        });
      },

      contentScroll(){

      },
      loadMore(){

      }
    },

  }
</script>
<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;

  }
  .content{
    overflow: hidden;
    position: absolute;
    bottom: 49px;
    top: 44px;
    left: 0;
    right: 0;
  }
</style>
