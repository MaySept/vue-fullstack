<template>
  <div id="wl-layout__main">
    <nav-menu></nav-menu>
    <div class="wl-layout__wrapper">
      <wl-header></wl-header>
      <div class="wl-layout__container" :class="{active: loggedIn}">
        <!-- <router-loading></router-loading> -->
        <router-view></router-view>
      </div>
      <div v-if="loggedIn" class="wl-copyright">Copyright ©weLian.com.All rights reserved.浙ICP备14032648号</div>
      <n-progress parent=".wl-layout__wrapper"></n-progress>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Header from './components/Header'
  import NavMenu from './components/NavMenu'
  import NProgress from './components/NProgress'
  import ContentModule from './components/ContentModule'
  import { mapGetters } from 'vuex'
  Vue.component(ContentModule.name, ContentModule)
  export default {
    computed: {
      ...mapGetters(['loggedIn'])
    },
    components: {
      [Header.name]: Header,
      NavMenu,
      NProgress
    }
  }
</script>
<style lang="stylus">
  @import "assets/css/variable"
  @import "assets/css/reset.css"
  @import "assets/css/animate"
  @import "assets/css/flex"
  @import "assets/css/common"

  ::-webkit-scrollbar
    display none
    width 4px
    height 4px
    background-color $color-gray
  ::-webkit-scrollbar-button
  ::-webkit-scrollbar-track
    display none
    background-color transparent
  ::-webkit-scrollbar-thumb
    border-radius: 2px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    background-color #999
  ::-webkit-scrollbar-thumb:hover
    background-color #999

  *
    box-sizing border-box

  :after,
  :before
    box-sizing border-box

  a
    text-decoration none
  #wl-layout__main
    display flex
    width 100%
    height 100vh
    .wl-layout__wrapper
      flex 1
      display flex
      flex-flow column
      overflow-x hidden
      .wl-layout__container
        position relative
        flex 1
        display flex
        justify-content center
        margin 0
        padding 0
        overflow auto
        &.active
          // margin-top 1rem
    .wl-copyright
      text-align center
      line-height 3
      color #adadad
</style>
