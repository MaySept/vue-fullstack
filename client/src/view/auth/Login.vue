<template>
  <div class="wl-login" v-show="!loggedIn">
    <div class="wl-account__wrapper">
      <!-- 登录方式 -->
      <div class="wl-account__header">
        <img src="//fed.welian.com/common/web_logo.png" width="50" :alt="$t('title')">
        <a v-if="loginModeQuick" class="login-mode-toggle static" href="javascript:" @click="loginModeQuick = !loginModeQuick"></a>
        <a v-else class="login-mode-toggle quick" href="javascript:" @click="loginModeQuick = !loginModeQuick"></a>
      </div>
      <!-- 扫码登录 -->
      <div v-if="loginModeQuick" class="wl-account__content mode-quick">
        <wl-qr-code val="https://github.com/" :size="160" level="H"></wl-qr-code>
        <div class="login-intro">
          <div class="login-scan">用<img src="../../assets/images/logo_50x50.png">微链APP扫一扫登录</div>
          <div class="login-tips">
            <span>还没有安装微链app？</span>
            <a href="//www.welian.com/" target="_bank">点击下载安装</a>
          </div>
          <el-button class="login-question">如何扫码登录</el-button>
        </div>
        <div class="login-guide">
          <img src="//fed.welian.com/1_my/index_guide.png" alt="如何扫码登录" />
        </div>
      </div>
      <!-- 账号登录 -->
      <div v-else class="wl-account__content">
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="0" @submit.native.prevent="onSubmit">
          <div style="height: 25px;"></div>
          <el-form-item label="" prop="username">
            <el-input v-model="loginForm.username" placeholder="请输入手机号码"></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="" prop="code" class="login-code">
            <el-input v-model="loginForm.code" placeholder="请输入短信验证码"></el-input>
            <el-button>获取验证码</el-button>
          </el-form-item>
          <el-button type="primary" style="width: 100%;" native-type="submit">登录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
  import WlQrCode from '../../components/QrCode'
  import { mapGetters, mapActions } from 'vuex'
  import locales from 'locales/login'
  export default {
    locales,
    data () {
      return {
        loginModeQuick: true,
        loginForm: {
          username: '',
          password: '',
          code: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入手机号码', trigger: 'blur' },
            { }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        },
        loading: false,
        loginError: false
      }
    },
    computed: {
      ...mapGetters(['loggedIn', 'globalConfig'])
    },
    components: {
      WlQrCode
    },
    methods: {
      ...mapActions(['login', 'changeLang']),
      onSubmit () {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.login({
              username: this.loginForm.username,
              password: this.loginForm.password
            }).then((data) => {
              this.loading = false
              this.$router.push(this.$route.query.redirect || '/')
            }).catch((err) => {
              this.$notify({
                title: this.$t('message.error'),
                message: err.message || this.$t('login.authFail'),
                type: 'error',
                duration: 1500
              })
              this.loading = false
              this.loginError = true
              setTimeout(() => {
                this.loginError = false
              }, 500)
            })
          }
        })
      }
    }
  }
</script>
<style lang="stylus">
  @import "../../assets/css/variable"
  @keyframes fadeIn
    0%
      right: -300px;
      opacity: 0;
    100%
      right: -250px;
      opacity: 1;
  .wl-login
    align-self center
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    overflow hidden
    background $color-primary url('//fed.welian.com/1_my/index_bg_1.png')
    .wl-account__wrapper
      position absolute
      left 50%
      top 50%
      transform translate3d(-50%,-50%,0)
      width 22.75rem
      height 23.125rem
      padding 1.875rem
      background-color #fff
    .wl-account__header
      text-align center
      margin-bottom 0.938rem
    .login-mode-toggle
      position absolute
      right 0
      top 0
      width 2.688rem
      height 2.688rem
    .login-mode-toggle.static
      background url('../../assets/images/login_static.png') no-repeat
    .login-mode-toggle.quick
      background url('../../assets/images/login_quick.png') no-repeat
    .mode-quick
      text-align center
    .login-scan
      img
        width 0.938rem
        height 0.938rem
        vertical-align middle
        margin 0 2px
    .login-tips
      font-size 12px
      color #999
      a
        color #04a6e9
    .login-question
      margin-top 15px
      border-radius 18px
    .mode-quick:hover .login-guide
      animation fadeIn .8s linear 1 forwards
    .login-guide
      position absolute
      top -2.5rem
      right -18.75rem
      opacity 0
      img
        width 15.0rem
    .login-code
      .el-form-item__content
        display flex !important
      .el-button
        margin-left 15px
</style>
