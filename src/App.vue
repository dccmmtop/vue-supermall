<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar>
    </main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from "components/contens/maintabbar/MainTabBar";
  export  default {
    name: "App",
    components:{
      MainTabBar
    }
  }

</script>

<style></style>
