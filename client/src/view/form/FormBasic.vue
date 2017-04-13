<template>
  <wl-content-module name="formBasic" class="form-basic">
    <div class="p-xs bg--white">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="禁用字段">
          <el-input :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="城市">
          <city-picker v-model="form.city" :value="form.city" name="city" placeholder="请选择您的城市"></city-picker>
        </el-form-item>
        <el-form-item label="多选">
          <el-select v-model="form.multSelect" multiple placeholder="请选择">
            <el-option
              v-for="item in multOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="禁用选择">
          <el-select disabled placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="text--center" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="数量">
          <el-input-number v-model="form.count" :min="1" :max="10" :step="1"></el-input-number>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type" disabled></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="二级选择">
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
          <div class="m-sm"></div>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="(city, index) in cities" :key="index" :label="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费" disabled></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input
            type="textarea"
            v-model="form.desc"
            :autosize="{ minRows: 2, maxRows: 4}">
          </el-input>
        </el-form-item>
        <el-form-item label="禁用">
          <el-input type="textarea" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </wl-content-module>
</template>
<script>
  import CityPicker from '../../components/CityPicker'
  const cityOptions = ['上海', '北京', '广州', '深圳']
  export default {
    name: 'FormBasic',
    data () {
      return {
        form: {
          name: '',
          region: '',
          city: 0,
          multSelect: [],
          date1: '',
          date2: '',
          delivery: false,
          count: 0,
          type: [],
          resource: '',
          desc: ''
        },
        multOptions: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        checkAll: true,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true
      }
    },
    components: {
      [CityPicker.name]: CityPicker
    },
    methods: {
      onSubmit () {
        console.log(this.form.city)
        console.log('submit!')
      },
      handleCheckAllChange (event) {
        this.checkedCities = event.target.checked ? cityOptions : []
        this.isIndeterminate = false
      },
      handleCheckedCitiesChange (value) {
        const checkedCount = value.length
        this.checkAll = checkedCount === this.cities.length
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
      }
    },
    created () {
      this.$on('v.city.picker', (id) => {
        console.log(id)
      })
    }
  }
</script>

<style lang="stylus">
  .form-basic {
    padding: 1rem;
  }
</style>
