<template>
  <wl-content-module name="dashboard" id="dashboard">
    Dashboard
    <el-button type="info" @click.native="sendMessage">Send hello</el-button>
  </wl-content-module>
</template>
<script>
  export default {
    methods: {
      sendMessage () {
        // this.$socket.emit('client:hello', 'client hello')
      }
    },
    mounted () {
      // this.$socket.on('server:hello', data => {
      //   this.$message.info(`Received from server: ${data}`)
      // })
    }
  }
</script>
<style lang="stylus">
  #dashboard
    padding 1rem
</style>
