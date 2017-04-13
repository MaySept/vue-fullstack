<template>
  <wl-content-module name="project-list" class="project-list">
    <data-table ref="projects" @page-change="fetch">
      <div slot="toolbar">
        <el-button type="primary">导出Excel</el-button>
      </div>
      <el-table :data="projects">
        <el-table-column property="orderid" label="序号" align="center" width="80"></el-table-column>
        <el-table-column label="项目" min-width="120">
          <template scope="scope">
            <div class="td-tpl-1">
              <h4>{{ scope.row.project.name }}</h4>
              <div>{{ scope.row.project.intro }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="创业者" min-width="120">
          <template scope="scope">
            <div class="td-tpl-1">
              <h4>{{ scope.row.project.project_create_user.name }}</h4>
              <div>
                <span class="m-r-xs">{{ scope.row.project.project_create_user.position }}</span>
                <span>{{ scope.row.project.project_create_user.company }}</span>
              </div>
              <div>{{ scope.row.project.project_create_user.mobile }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="融资需求" align="center" min-width="120">
          <template scope="scope">
            <div class="text--muted">
              <div>{{ scope.row.project.finance_info.stage }}</div>
              <div>{{ scope.row.project.finance_info.amount }}{{ scope.row.project.finance_info.amountunit.unitname }}</div>
              <div>{{ scope.row.project.finance_info.share + '%' }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="投资人回复" align="center" min-width="120">
          <template scope="scope">
            <div class="text--muted">{{ scope.row.comment.comment_content }}</div>
            <el-button type="text" size="small">全部回复</el-button>
          </template>
        </el-table-column>
        <el-table-column label="创业者备注" align="center" min-width="90">
          <template scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>{{ scope.row.project.remark }}</p>
              <div slot="reference" class="text--muted">
                {{ scope.row.project.remark }}
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="120">
          <template scope="scope">
            <el-button type="primary" size="small">下载BP</el-button>
          </template>
        </el-table-column>
      </el-table>
    </data-table>
  </wl-content-module>
</template>

<script>
import DataTable from 'components/DataTable'

export default {
  data () {
    return {
      search: {
      },
      projects: [{
        orderid: 1,
        project: {
          pid: 1,
          name: '微链',
          intro: '数据化创投服务商',
          remark: '备注备注备注',
          project_create_user: {
            uid: 101440,
            mobile: '15257150019',
            name: 'Cafe',
            company: '微链',
            position: 'FED'
          },
          finance_info: {
            stage: 1,
            amount: 1000,
            amountunit: {
              unitid: 1,
              unitname: '万人民币'
            },
            share: 20
          },
          bp: {
            bpid: 222,
            bpname: '微链2017计划书.pdf',
            url: 'http://www.welian.com/'
          }
        },
        comment: {
          comment_id: 1,
          comment_content: '我是这个项目的回复内容',
          comment_create_time: 1487928772613
        }
      }]
    }
  },
  components: {
    DataTable
  },
  methods: {
    fetch (current = 1) {
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.fetch()
    })
  }
}
</script>

<style lang="stylus">
@import "../../assets/css/variable"
.project-list
  padding 1rem
  .el-table tbody .cell
    font-size 12px
    line-height 18px
    padding-top 10px
    padding-bottom 10px
  .td-tpl-1
    text-align left
    font-size 12px
    line-height 18px
    h4
      margin 0
      color $color-black
      font-size 14px
</style>
