export default [{
  path: '/dashboard',
  component: (resolve) => {
    import('../view/Dashboard.vue').then(resolve)
  }
}, {
  path: '/users',
  component: (resolve) => {
    import('../view/UserList.vue').then(resolve)
  }
}, {
  path: '/things',
  component: (resolve) => {
    import('../view/ThingList.vue').then(resolve)
  }
}, {
  path: '/vc/project-list',
  meta: {
    name: '项目收件箱',
    icon: 'el-icon-message',
    hidden: false
  },
  component: (resolve) => {
    import('../view/vc/ProjectList.vue').then(resolve)
  }
}, {
  path: '/openplat/project-list',
  meta: {
    name: '项目收件箱',
    icon: 'el-icon-message',
    hidden: false
  },
  component: (resolve) => {
    import('../view/openplat/ProjectList.vue').then(resolve)
  }
}, {
  path: '/basic/layout',
  component: (resolve) => {
    import('../view/basic/Layout.vue').then(resolve)
  }
}, {
  path: '/basic/color',
  component: (resolve) => {
    import('../view/basic/Color.vue').then(resolve)
  }
}, {
  path: '/basic/typography',
  component: (resolve) => {
    import('../view/basic/Typography.vue').then(resolve)
  }
}, {
  path: '/basic/icon',
  component: (resolve) => {
    import('../view/basic/Icon.vue').then(resolve)
  }
}, {
  path: '/basic/button',
  component: (resolve) => {
    import('../view/basic/Button.vue').then(resolve)
  }
}, {
  path: '/form/basic',
  component: (resolve) => {
    import('../view/form/FormBasic.vue').then(resolve)
  }
}, {
  path: '/form/radio',
  component: (resolve) => {
    import('../view/form/Radio.vue').then(resolve)
  }
}, {
  path: '/form/select',
  component: (resolve) => {
    import('../view/form/Select.vue').then(resolve)
  }
}, {
  path: '/form/cascader',
  component: (resolve) => {
    import('../view/form/Cascader.vue').then(resolve)
  }
}, {
  path: '/form/switch',
  component: (resolve) => {
    import('../view/form/Switch.vue').then(resolve)
  }
}, {
  path: '/form/slider',
  component: (resolve) => {
    import('../view/form/Slider.vue').then(resolve)
  }
}, {
  path: '/form/time-picker',
  component: (resolve) => {
    import('../view/form/TimePicker.vue').then(resolve)
  }
}, {
  path: '/form/date-picker',
  component: (resolve) => {
    import('../view/form/DatePicker.vue').then(resolve)
  }
}, {
  path: '/form/date-time-picker',
  component: (resolve) => {
    import('../view/form/DateTimePicker.vue').then(resolve)
  }
}, {
  path: '/form/upload',
  component: (resolve) => {
    import('../view/form/Upload.vue').then(resolve)
  }
}, {
  path: '/data/tag',
  component: (resolve) => {
    import('../view/data/Tag.vue').then(resolve)
  }
}]
