<template>
  <div class="app-content" style="width: 100%;">
    <div :class="'m-'+name">
      <template v-if="contentIf!==undefined">
        <transition name="fade" v-if="contentIf">
          <slot></slot>
        </transition>
        <transition name="fade" v-else>
          <content-loading class="spinner" :show="!contentIf"></content-loading>
        </transition>
      </template>
      <template v-if="contentIf===undefined && contentShow!==undefined">
        <transition name="fade" v-show="contentShow">
          <slot></slot>
        </transition>
        <transition name="fade" v-show="!contentShow">
          <content-loading class="spinner" :show="!contentIf"></content-loading>
        </transition>
      </template>
      <template v-if="contentIf===undefined && contentShow===undefined">
        <slot></slot>
      </template>
    </div>
  </div>
</template>
<script>
  import ContentLoading from 'components/ContentLoading'
  export default {
    name: 'WlContentModule',
    props: {
      name: {
        type: String,
        required: true
      },
      contentShow: {
        type: Boolean,
        default: undefined
      },
      contentIf: {
        type: Boolean,
        default: undefined
      },
      flexColumn: {
        type: Boolean,
        default: true
      }
    },
    components: {
      ContentLoading
    }
  }
</script>
