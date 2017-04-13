<template>
  <wl-content-module name="color" class="demo-color">
    <div class="p-xs bg--white">
      <el-row :gutter="20">
        <el-col :span="4" :offset="2">
          <div class="grid-content bg--primary">Primary <br>#04a6e9</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg--success">Success <br>#13ce66</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg--warning">Warning <br>#f7ba2a</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg--danger">Danger <br>#ff4949</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg--info">Info <br>#50bfff</div>
        </el-col>
      </el-row>
    </div>
  </wl-content-module>
</template>

<style lang="stylus" scoped>
  .grid-content {
    border-radius: 4px;
    padding: 20px;
    height: 74px;
    box-sizing: border-box;
    color: #fff;
    font-size: 14px;
  }
</style>
