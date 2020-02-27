<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
    <recommend-view  :recommends="recommends"></recommend-view>
    <feature-view/>>
  </div>
</template>

<script>
// @ is an alias to /src

import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "views/home/childComps/HomeSwiper";
import RecommendView from "views/home/childComps/RecommendView";
import FeatureView from "views/home/childComps/FeatureView";

import {getHomeMultiData} from "network/home";

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView
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
    swiperImageLoad(){},

    getHomeMultiData() {
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;

      }).catch(err => {
        console.log(err)
      });
    }
  },

}
</script>
<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;

  }
</style>
