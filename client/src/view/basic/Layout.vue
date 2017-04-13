<template>
  <wl-content-module name="layout" class="demo-layout">
    <div class="p-xs bg--white">
      <!-- 基础布局 -->
      <h2>基础布局</h2>
      <div>
        <el-row>
          <el-col :span="24"><div class="grid-content bg-purple-dark">:span="24"</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"><div class="grid-content bg-purple">:span="12"</div></el-col>
          <el-col :span="12"><div class="grid-content bg-purple-light">:span="12"</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"><div class="grid-content bg-purple">:span="8"</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple-light">:span="8"</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">:span="8"</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="6"><div class="grid-content bg-purple">:span="6"</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light">:span="6"</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">:span="6"</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light">:span="6"</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="4"><div class="grid-content bg-purple">:span="4"</div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple-light">:span="4"</div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple">:span="4"</div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple-light">:span="4"</div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple">:span="4"</div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple-light">:span="4"</div></el-col>
        </el-row>
      </div>
      <!-- 混合布局 -->
      <h2>混合布局</h2>
      <div>
        <el-row :gutter="20">
          <el-col :span="16"><div class="grid-content bg-purple">:span="16"</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">:span="8"</div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8"><div class="grid-content bg-purple">:span="8"</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">:span="8"</div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple">:span="4"</div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple">:span="4"</div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="4"><div class="grid-content bg-purple">:span="4"</div></el-col>
          <el-col :span="16"><div class="grid-content bg-purple">:span="16"</div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple">:span="4"</div></el-col>
        </el-row>
      </div>
      <!-- 分栏偏移 -->
      <h2>分栏偏移</h2>
      <div>
        <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content bg-purple">:span="6"</div></el-col>
          <el-col :span="6" :offset="6"><div class="grid-content bg-purple">:span="6" :offset="6"</div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6" :offset="6"><div class="grid-content bg-purple">:span="6" :offset="6"</div></el-col>
          <el-col :span="6" :offset="6"><div class="grid-content bg-purple">:span="6" :offset="6"</div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" :offset="6"><div class="grid-content bg-purple">:span="12" :offset="6"</div></el-col>
        </el-row>
      </div>
      <!-- 对齐方式 -->
      <h2>对齐方式</h2>
      <div>
        <el-row type="flex" class="row-bg">
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="end">
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </div>
    </div>
  </wl-content-module>
</template>

<style lang="stylus">
  .demo-layout
    padding 1rem
    .el-row
      margin-bottom 20px
    .grid-content
      border-radius 4px
      min-height 36px
      line-height 36px
      text-align center
    .bg-purple
      background #d3dce6
    .bg-purple-light
      background #e5e9f2
    .bg-purple-dark
      background #99a9bf
</style>
