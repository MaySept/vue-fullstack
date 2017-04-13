<template>
  <wl-content-module name="tag" class="demo-tag">
    <div class="p-xs bg--white">
      <h2>基础用法</h2>
      <div>
        <el-tag>标签一</el-tag>
        <el-tag type="gray">标签二</el-tag>
        <el-tag type="primary">标签三</el-tag>
        <el-tag type="success">标签四</el-tag>
        <el-tag type="warning">标签五</el-tag>
        <el-tag type="danger">标签六</el-tag>
      </div>
      <h2>可移除标签</h2>
      <div>
        <el-tag
          v-for="tag in tags"
          :key="tag.name"
          :closable="true"
          :type="tag.type"
        >
        {{tag.name}}
        </el-tag>
      </div>
    </div>
  </wl-content-module>
</template>

<script>
  export default {
    data () {
      return {
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'gray' },
          { name: '标签三', type: 'primary' },
          { name: '标签四', type: 'success' },
          { name: '标签五', type: 'warning' },
          { name: '标签六', type: 'danger' }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  .demo-tag
    padding 1rem
    .el-tag
      margin-right 10px
</style>
