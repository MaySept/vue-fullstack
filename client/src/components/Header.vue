<template>
  <transition name="header">
    <header id="header" v-if="loggedIn">
      <div class="search">
        <el-input
          placeholder="请输入关键字"
          icon="search"
          style="width: 300px;">
        </el-input>
      </div>
      <div class="nav user-info">
        <el-dropdown trigger="click">
          <div class="el-dropdown-link">
            <img class="user-avatar" src="//fed.welian.com/app-icon72x72@2x.png?x-oss-process=image/resize,w_36,h_36,limit_0" alt="welian">
            <span>{{username}}</span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="showConfig">{{$t('header.settings')}}</el-dropdown-item>
            <el-dropdown-item @click.native="password.visible=true">{{$t('header.password')}}</el-dropdown-item>
            <el-dropdown-item @click.native="doLogout">{{$t('header.logout')}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <!-- user settings -->
      <el-dialog :title="$t('header.settings')" v-model="config.visible" size="small"
        top="4%" @close="cancelConfig">
        <el-form class="noline" ref="config" label-position="top"
          :model="config.form" :rules="config.rules">
          <el-form-item :label="$t('header.langSetting')" prop="lang">
            <el-select v-model="config.form.lang">
              <el-option v-for="lang in globalConfig.langs" :key="lang.id" :label="lang.label" :value="lang.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :label="$t('header.pageLimit')" prop="pageLimit">
            <el-slider v-model="config.form.pageLimit" :min="1" :max="100" show-input></el-slider>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click.native="config.visible=false">{{$t('confirm.cancel')}}</el-button>
          <el-button type="primary" @click.native="saveConfig">{{$t('confirm.ok')}}</el-button>
        </span>
      </el-dialog>
      <!-- change password -->
      <el-dialog :title="$t('header.password')" v-model="password.visible" size="small" @close="cancelPassword">
        <el-form label-position="top" :model="password.form"
          :rules="password.rules" ref="password">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item :label="$t('header._password.old')" prop="oldPassword">
                <el-input type="password" v-model="password.form.oldPassword"/>
              </el-form-item>
              <el-form-item :label="$t('header._password._new')" prop="password">
                <el-input type="password" v-model="password.form.password"/>
              </el-form-item>
              <el-form-item :label="$t('header._password.newConfirm')" prop="confirmPassword">
                <el-input type="password" v-model="password.form.confirmPassword"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('constant.desc')">
                <div>{{$t('header._password.description')}}</div>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click.native="password.visible=false">{{$t('confirm.cancel')}}</el-button>
          <el-button type="primary" @click.native="changePassword">{{$t('confirm.ok')}}</el-button>
        </span>
      </el-dialog>
    </header>
  </transition>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import { merge } from 'lodash'
  import { user as userResource } from 'resources'
  import locales from 'locales/header'
  export default {
    name: 'WlHeader',
    locales,
    data () {
      return {
        config: {
          visible: false,
          form: {
            lang: '',
            pageLimit: 10
          },
          rules: {
            lang: [{ required: true }],
            pageLimit: [{ type: 'number', required: true }]
          }
        },
        password: {
          visible: false,
          form: {
            oldPassword: '',
            password: '',
            confirmPassword: ''
          },
          rules: {
            oldPassword: [{
              required: true, message: this.$t('header._password.rules.old'), trigger: 'blur'
            }],
            password: [{
              required: true, message: this.$t('header._password.rules._new'), trigger: 'blur'
            }],
            confirmPassword: [{
              required: true, message: this.$t('header._password.rules.newConfirm'), trigger: 'blur'
            }, {
              trigger: 'blur', message: this.$t('header._password.rules.notMatch'), validator: (rule, value, callback) => {
                if (value !== this.password.form.password) {
                  callback(new Error(rule.message))
                } else {
                  callback()
                }
              }
            }]
          }
        }
      }
    },
    computed: {
      ...mapGetters([
        'username',
        'loggedIn',
        'userId',
        'globalConfig'
      ])
    },
    methods: {
      ...mapActions(['logout', 'updateGlobalConfig']),
      doLogout () {
        this.logout().then(() => {
          this.$router.push('/login')
        })
      },
      showConfig () {
        this.config.visible = true
      },
      cancelConfig () {
        this.config.form.lang = this.globalConfig.lang
        this.config.form.pageLimit = this.globalConfig.pageLimit
        this.config.visible = false
      },
      saveConfig () {
        this.updateGlobalConfig(this.config.form)
        this.config.visible = false
        this.$message.success(this.$t('message.save.ok'))
      },
      cancelPassword () {
        this.$refs.password.resetFields()
        merge(this.password.form, {
          oldPassword: '',
          password: '',
          confirmPassword: ''
        })
        this.password.visible = false
      },
      changePassword () {
        this.$refs.password.validate(valid => {
          if (valid) {
            userResource.changePassword({ id: this.userId }, this.password.form).then(res => {
              this.$notify.success(this.$t('header._password.afterChange'))
              this.password.visible = false
              setTimeout(() => {
                this.doLogout()
              }, 2000)
            }).catch(() => {})
          }
        })
      }
    },
    created () {
      this.cancelConfig()
    }
  }
</script>
<style lang="stylus">
  @import "../assets/css/variable"
  .header-enter-active
  .header-leave-active
    transition all .5s
  .header-enter
  .header-leave-active
    margin-top -($header-height)
  #header
    box-sizing: border-box;
    padding 0 1rem
    height 3.75rem
    line-height 3.75rem
    background-color $color-white
    .search
      float left
    .nav
      float right
      margin 0
      padding 0
      .el-dropdown-link
        position relative
        display inline-block
        padding-left 3.125rem
        color #333
        cursor pointer
        vertical-align middle
      .user-avatar
        position absolute
        left 0
        top 0.625rem
        width 2.5rem
        height 2.5rem
        border-radius 50%
</style>
