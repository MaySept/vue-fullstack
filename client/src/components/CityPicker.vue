<template>
  <div class="city-picker" @mouseout="endChoice" @mouseover="startMouseOver">
    <input
      class="input__inner"
      type="text"
      autocomplete="off"
      :name="name"
      :value="currCityName"
      :placeholder="placeholder"
      @focus="startChoice"
      @blur="endChoice"
      ref="input">
    <div class="city-picker-panel" v-show="cityPanelIsShow">
      <ul class="city-picker-tags">
        <li :class="{'z-on': item==tagKey}" v-for="item in tagsArr" @click="choiceTag(item)">{{ item }}</li>
      </ul>
      <div class="city-picker-list">
        <div v-for="(citys, initial) in cityList" v-show="currTagIncludes(initial)">
          <h6 v-if="initial != 'hot'">{{ initial }}</h6>
          <ul>
            <li v-for="v in citys" @click="choiceCity(v.id)" :title="v.name">{{ v.name }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import emitter from 'element-ui/src/mixins/emitter'
  import ChinaCityData from './china-city-data.json'
  export default {
    name: 'CityPicker',

    mixins: [emitter],

    props: {
      name: {
        type: String,
        default: ''
      },
      value: {
        default: '',
        twoWay: true
      },
      placeholder: {
        type: String,
        default: ''
      }
    },
    data () {
      const cityList = ChinaCityData
      const tagsArr = ['热门', 'ABCDE', 'FGHJ', 'KLMN', 'PQRST', 'WXYZ']
      const tags = []
      tagsArr.forEach((item) => {
        if (item === '热门') {
          tags[item] = ['hot']
        } else {
          tags[item] = item.split('')
        }
      })
      return {
        currentValue: this.value,
        cityPanelIsShow: false,
        isMouseOver: false,
        cityList,
        tagsArr,
        tags,
        tagKey: '热门'
      }
    },
    computed: {
      // 当前城市名字
      currCityName () {
        const {
          currentValue,
          cityList
        } = this
        let cityName = ''
        Object.keys(cityList).forEach((item) => {
          cityList[item].forEach((item) => {
            if (currentValue === item.id) {
              cityName = item.name
            }
          })
        })
        return cityName
      },
      currTag () {
        const { tagKey, tags } = this
        return tags[tagKey]
      }
    },
    methods: {
      // 列表是否属于当前标签
      currTagIncludes (ini) {
        const { currTag } = this
        return currTag.includes(ini)
      },
      // 选择标签
      choiceTag (key) {
        this.tagKey = key
      },
      // 开始城市选择
      startChoice (e) {
        if (e && e.type === 'keypress') {
          e.returnValue = false
        }
        this.cityPanelIsShow = true
      },
      // 选择城市
      choiceCity (id) {
        this.currentValue = id
        this.$emit('input', id)
        this.dispatch('ElFormItem', 'el.form.change', [id])
        this.immEndChoice()
      },
      // 鼠标离开城市选择区域时超过一定时间，关闭城市面板
      endChoice (e) {
        const self = this
        const inputEle = self.$refs.input
        if (e.type === 'mouseout') {
          self.isMouseOver = false
        }
        setTimeout(() => {
          if (!self.isMouseOver && inputEle !== document.activeElement) {
            self.cityPanelIsShow = false
          }
        }, 300)
      },
      startMouseOver () {
        this.isMouseOver = true
      },
      // 立即关闭城市面板
      immEndChoice () {
        this.isMouseOver = true
        this.cityPanelIsShow = false
      }
    }
  }
</script>

<style>
  @-webkit-keyframes cityPicker {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) scale(0);
      transform: translate(-50%, -50%) scale(0);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(0) scale(1);
      transform: translate(0) scale(1);
    }
  }

  @keyframes cityPicker {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) scale(0);
      transform: translate(-50%, -50%) scale(0);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(0) scale(1);
      transform: translate(0) scale(1);
    }
  }

  .city-picker {
    position: relative;
    margin: 0;
    padding: 0;
    color: #555;
  }

  .city-picker * {
    margin: 0;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    padding: 0;
  }

  .city-picker input {
    display: block;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    padding: 3px 10px;
    width: 100%;
    height: 36px;
    font-size: inherit;
    line-height: 1;
    color: #555;
    background-color: #fff;
    background-image: none;
    outline: none;
    -webkit-transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .city-picker li {
    list-style-type: none;
  }

  .city-picker .city-picker-panel {
    overflow: hidden;
    position: absolute;
    left: 0;
    z-index: 99999;
    border: 1px solid #ddd;
    padding: 10px 10px 0;
    width: 360px;
    font: 12px/1.5 "Microsoft YaHei", tahoma, arial, "Hiragino Sans GB", "\\5b8b\4f53", sans-serif;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .18);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .18);
    -webkit-animation: cityPicker .1s ease-out;
    animation: cityPicker .1s ease-out;
  }

  .city-picker .city-picker-panel h5 {
    margin-bottom: 5px;
    padding-left: 2px;
    font-weight: normal;
    line-height: 1.5;
    color: #aaa;
  }

  .city-picker .city-picker-tags {
    overflow: hidden;
    margin: 5px 0;
  }

  .city-picker .city-picker-tags li {
    display: block;
    float: left;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-left: 1px solid #fff;
    width: 60px;
    line-height: 20px;
    text-align: center;
    background-color: #f2f2f3;
    cursor: pointer;
  }

  .city-picker .city-picker-tags li:first-child {
    border-left: none;
  }

  .city-picker .city-picker-tags li:hover {
    color: #04a6e9;
  }

  .city-picker .city-picker-tags li.z-on {
    color: #fff;
    background-color: #04a6e9;
  }

  .city-picker .city-picker-list {
    overflow: hidden;
    border-bottom: 10px solid #fff;
  }

  .city-picker .city-picker-list > div {
    overflow: hidden;
    margin: 1px 0 -1px;
    border-bottom: 1px dashed #eee;
    padding: 5px 0;
    line-height: 24px;
  }

  .city-picker .city-picker-list > div h6 {
    float: left;
    padding-left: 5px;
    width: 30px;
    font-size: 13px;
    font-weight: normal;
    color: #ff4949;
  }

  .city-picker .city-picker-list > div ul {
    overflow: hidden;
  }

  .city-picker .city-picker-list > div ul li {
    float: left;
    overflow: hidden;
    padding-left: 4px;
    width: 60px;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
  }

  .city-picker .city-picker-list > div ul li:hover {
    color: #04a6e9;
    background-color: #f2f2f3;
  }

  .city-picker .city-picker-list > div:last-child {
    padding-left: 10px;
  }

  .city-picker .city-picker-list > div:last-child ul li {
    padding-left: 6px;
  }
</style>
