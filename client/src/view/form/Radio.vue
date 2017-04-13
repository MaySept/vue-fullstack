<template>
  <wl-content-module name="radio" class="demo-radio">
    <div class="bg--white p-xs">
      <h2>基本用法</h2>
      <el-row class="m-b-sm">
        <el-radio-group v-model="radio1">
          <el-radio :label="1">备选项</el-radio>
          <el-radio :label="2">备选项</el-radio>
          <el-radio :label="3">备选项</el-radio>
          <el-radio disabled :label="4">备选项</el-radio>
        </el-radio-group>
      </el-row>
      <h2>按钮样式</h2>
      <el-row class="m-b-sm">
        <el-radio-group v-model="radio2">
          <el-radio-button label="杭州"></el-radio-button>
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京" :disabled="true"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </el-row>
      <h2>Switch 开关</h2>
      <el-row class="m-b-sm">
        <el-switch
          v-model="switch1"
          on-text=""
          off-text="">
        </el-switch>
        <el-switch
          v-model="switch2"
          on-color="#13ce66"
          off-color="#ff4949">
        </el-switch>
      </el-row>
    </div>
  </wl-content-module>
</template>

<script>
  export default {
    data () {
      return {
        radio1: 1,
        radio2: '杭州',
        switch1: true,
        switch2: true
      }
    }
  }
</script>

<style lang="stylus">
  .demo-radio
    padding 1rem
</style>
