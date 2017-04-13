<template>
  <div class="wl-pagination text--center">
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="current"
      :page-size="globalConfig.pageLimit"
      layout="total, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { Pagination } from 'element-ui'
  import locales from 'locales/pagination'
  export default {
    locales,
    props: {
      current: {
        type: Number,
        default: 1
      },
      total: {
        type: Number,
        default: 1,
        required: true
      }
    },
    computed: {
      ...mapGetters(['globalConfig']),
      pages () {
        return Math.round(this.total / this.globalConfig.pageLimit + 0.5)
      }
    },
    components: {
      [Pagination.name]: Pagination
    },
    methods: {
      handleCurrentChange (val) {
        this.$emit('page-change', val)
      },
      reset () {
        this.$emit('page-change', 1)
      }
    }
  }
</script>
<style lang="stylus">
  @import "../assets/css/variable"
  .wl-pagination
    padding .75rem 1rem
    border 1px solid $color-border
    border-top none
    background-color #fff
</style>
