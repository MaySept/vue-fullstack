<template>
  <wl-content-module name="button" class="demo-button">
    <div class="p-xs bg--white">
      <h2>基本用法</h2>
      <el-row class="m-b-sm">
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="text">文字按钮</el-button>
        <el-button :plain="true" :disabled="true">主要按钮</el-button>
        <el-button type="primary" :disabled="true">主要按钮</el-button>
        <el-button type="text" :disabled="true">文字按钮</el-button>
      </el-row>
      <h2>有颜色倾向</h2>
      <el-row class="m-b-sm">
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
        <el-button type="info">信息按钮</el-button>
      </el-row>
      <el-row class="m-b-sm">
        <el-button>默认按钮</el-button>
        <el-button :plain="true" type="success">成功按钮</el-button>
        <el-button :plain="true" type="warning">警告按钮</el-button>
        <el-button :plain="true" type="danger">危险按钮</el-button>
        <el-button :plain="true" type="info">信息按钮</el-button>
      </el-row>
      <el-row class="m-b-sm">
        <el-button class="is-outline">默认按钮</el-button>
        <el-button class="is-outline" type="success">成功按钮</el-button>
        <el-button class="is-outline" type="warning">警告按钮</el-button>
        <el-button class="is-outline" type="danger">危险按钮</el-button>
        <el-button class="is-outline" type="info">信息按钮</el-button>
      </el-row>
      <h2>图标按钮</h2>
      <el-row class="m-b-sm">
        <el-button type="primary" icon="edit"></el-button>
        <el-button type="primary" icon="share"></el-button>
        <el-button type="primary" icon="delete"></el-button>
        <el-button type="primary" icon="search">搜索</el-button>
        <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        <el-button type="primary" :loading="true">加载中</el-button>
      </el-row>
      <h2>按钮组</h2>
      <el-row class="m-b-sm">
        <el-button-group>
          <el-button type="primary" icon="arrow-left">上一页</el-button>
          <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
        <el-button-group>
          <el-button type="primary" icon="edit"></el-button>
          <el-button type="primary" icon="share"></el-button>
          <el-button type="primary" icon="delete"></el-button>
        </el-button-group>
      </el-row>
      <h2>不同尺寸</h2>
      <el-row class="m-b-sm">
        <el-button type="primary" size="large">大型按钮</el-button>
        <el-button type="primary">正常按钮</el-button>
        <el-button type="primary" size="small">小型按钮</el-button>
        <el-button type="primary" size="mini">超小按钮</el-button>
      </el-row>
      <h2>下拉菜单</h2>
      <el-row class="m-b-sm">
        <el-col :span="3">
          <el-dropdown>
            <el-button type="primary">
              更多菜单<i class="el-icon-caret-bottom el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :span="3">
          <el-dropdown split-button type="primary" @click="handleClick">
            更多菜单
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :span="3">
          <el-dropdown>
            <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
      <h2>Tooltip</h2>
      <el-row class="m-b-lg">
        <div class="box">
          <div class="top">
            <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
              <el-button>上左</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
              <el-button>上边</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
              <el-button>上右</el-button>
            </el-tooltip>
          </div>
          <div class="left">
            <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
              <el-button>左上</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
              <el-button>左边</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
              <el-button>左下</el-button>
            </el-tooltip>
          </div>
          <div class="center">
            <el-tooltip placement="top">
              <div slot="content">多行信息<br/>第二行信息</div>
              <el-button>多行</el-button>
            </el-tooltip>
          </div>
          <div class="right">
            <el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
              <el-button>右上</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
              <el-button>右边</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
              <el-button>右下</el-button>
            </el-tooltip>
          </div>
          <div class="bottom">
            <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
              <el-button>下左</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
              <el-button>下边</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
              <el-button>下右</el-button>
            </el-tooltip>
          </div>
        </div>
      </el-row>
    </div>
  </wl-content-module>
</template>

<script>
  export default {
    methods: {
      handleClick () {
        window.alert('handleClick')
      }
    }
  }
</script>

<style lang="stylus">
  .demo-button
    padding 1rem
  .box
    width: 400px;
    .center
      float left
      text-align center
      width 270px
      padding-top 50px
    .top
      text-align: center;
    .left
      float: left;
      width: 60px;
    .right
      float: right;
      width: 60px;
    .bottom
      clear: both;
      text-align: center;
    .item
      margin: 4px;
    .left .el-tooltip__popper,
    .right .el-tooltip__popper
      padding: 8px 10px;
</style>
