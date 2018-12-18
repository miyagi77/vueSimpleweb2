<template>
  <div class="navBar">
      <div style="border:3px solid red"></div>
      <ul  class="navList">
        <li v-for="(item,index) in navList" :key="index"  @mouseenter="mouseEnter(index)" @mouseleave="mouseLeave" :class="{active:index==isActive}">
            <router-link :key="index" :to="item.path" :class="{active:index==isActive}">
                {{item.name}}
            </router-link>
        </li>
        <div style="float:right">
            <span><i class="el-icon-search" style="position: absolute;top: 20px;left: 60.2%;"></i></span><input type="text" placeholder="搜索" style="height: 30px;margin: 4px;padding-left: 20px;">
            <el-button icon="el-icon-mobile-phone">登陆</el-button>
            <el-button icon="el-icon-edit">注册</el-button>
        </div>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: 0
    };
  },
  computed: {
    navList() {
      return this.$store.state.navList;
    }
  },
  methods: {
    //   鼠标移入
    mouseEnter(index) {
      this.isActive = index;
    },
    //   鼠标移除
    mouseLeave() {
      this.isActive = null;
    }
  },
  mounted() {
      
  }
};
</script>

<style>
.navBar {
  height: 50px;
  width: 100%;
  background-color: #fff;
  margin: 0 auto;
  border-bottom: 2px solid #ddd;
}
.navList {
  width: 60%;
  margin: 0 auto;
  height: 100%;
  padding: 0;
}
.navList li {
  list-style: none;
  float: left;
  height: 45px;
  width: 100px;
  line-height: 47px;
}
.navList li a {
  text-decoration: none;
  color: #333;
}
.active {
  background-color: #e7e7e7;
  color: #ffb86c !important;
}
.search {
  position: relative;
}
</style>

