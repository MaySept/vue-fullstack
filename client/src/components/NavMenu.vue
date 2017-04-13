<template>
  <transition name="menu">
    <div v-if="loggedIn" id="wl-menu">
      <div class="wl-menu-logo">
        <router-link class="wl-menu-logo__wrapper" to="/" exact>
          <img src="//fed.welian.com/common/web_logo_white.png?x-oss-process=image/resize,w_140,limit_0" width="70" alt="welian Inc.">
        </router-link>
      </div>
      <el-menu
        class="el-menu-vertical"
        theme="dark"
        :default-active="$route.path"
        :router="true"
        @open="handleOpen"
        @close="handleClose">

        <el-menu-item index="/vc/project-list"><i class="el-icon-message"></i><span>项目收件箱</span></el-menu-item>
        <el-menu-item index="/openplat/project-list"><i class="el-icon-message"></i><span>项目管理</span></el-menu-item>

        <el-submenu index="10">
          <template slot="title"><i class="el-icon-menu"></i><span>Basic</span></template>
          <el-menu-item index="/basic/layout">Layout</el-menu-item>
          <el-menu-item index="/basic/color">Color</el-menu-item>
          <el-menu-item index="/basic/typography">Typography</el-menu-item>
          <el-menu-item index="/basic/icon">Icon</el-menu-item>
          <el-menu-item index="/basic/button">Button</el-menu-item>
        </el-submenu>
        <el-submenu index="11">
          <template slot="title"><i class="el-icon-menu"></i><span>Form</span></template>
          <el-menu-item index="/form/basic">Basic</el-menu-item>
          <el-menu-item index="/form/radio">Radio</el-menu-item>
          <el-menu-item index="/form/select">Select</el-menu-item>
          <el-menu-item index="/form/cascader">Cascader</el-menu-item>
          <el-menu-item index="/form/switch">Switch</el-menu-item>
          <el-menu-item index="/form/slider">Slider</el-menu-item>
          <el-menu-item index="/form/time-picker">TimePicker</el-menu-item>
          <el-menu-item index="/form/date-picker">DatePicker</el-menu-item>
          <el-menu-item index="/form/date-time-picker">DateTimePicker</el-menu-item>
          <el-menu-item index="/form/upload">Upload</el-menu-item>
        </el-submenu>
        <el-submenu index="12">
          <template slot="title"><i class="el-icon-menu"></i><span>Data</span></template>
          <el-menu-item index="/data/tag">Tag</el-menu-item>
        </el-submenu>
        <el-menu-item index="/users"><i class="el-icon-menu"></i>{{$t('menu.users')}}</el-menu-item>
        <el-menu-item index="/things"><i class="el-icon-menu"></i>{{$t('menu.things')}}</el-menu-item>
      </el-menu>
    </div>
  </transition>
</template>
<script>
  import { mapGetters } from 'vuex'
  import locales from 'locales/menu'
  import { Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui'
  export default {
    locales,
    computed: {
      ...mapGetters(['loggedIn'])
    },
    components: {
      [Menu.name]: Menu,
      [Submenu.name]: Submenu,
      [MenuItem.name]: MenuItem,
      [MenuItemGroup.name]: MenuItemGroup
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
<style lang="stylus">
  @import "../assets/css/variable"
  .menu-enter-active
  .menu-leave-active
    transition all .5s
  .menu-enter
  .menu-leave-active
    margin-left -($menu-width)
  #wl-menu
    width $menu-width
    min-width @width
    background-color $menu-bg
    overflow auto
    .wl-menu-logo
      width $menu-width
      height $header-height
    .wl-menu-logo__wrapper
      position fixed
      z-index 1
      display block
      width $menu-width
      height $header-height
      line-height @height
      color #fff
      background-color #04A6E9
      font-size 18px
      text-align center
      img
        vertical-align middle
        font-size 12px
        line-height 1
    .el-menu--dark
      background-color $menu-bg
    .el-menu--dark .el-submenu .el-menu
      background-color $menu-bg
    .el-menu-item, .el-submenu__title
      height 2.812rem
      line-height 2.812rem
    .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active,
    .el-menu-item.is-active
      color #fff
      background-color #2a333c
    .el-menu--dark .el-menu-item:hover,
    .el-menu--dark .el-submenu__title:hover
      background-color #2a333c
</style>
