import moment from 'moment'

const digitsRE = /(\d{3})(?=\d)/g

export default {

  /**
   * 时间戳转日期字符串
   * @author cafe
   * @date   2017-02-09T14:11:11+0800
   * @param  {int}                 timestamp [unix时间戳]
   * @param  {string}                 format [转换格式] 事例：YYYY年MM月DD日 HH时mm分ss秒 ／ dddd, MMMM Do, YYYY ／ h:mm A
   * @return {string}                        [日期字符串]
   */
  timestampFormat: (timestamp, format) => {
    let result = ''
    timestamp = window.parseInt(timestamp, 10)
    if (!timestamp) {
      result = '-'
    } else if (format) {
      result = moment(timestamp).format(format)
    } else {
      result = moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
    }
    return result
  },
  /**
   * 货币格式化
   * @author cafe
   * @date   2017-03-21T21:14:03+0800
   * @param  {float}                  value    [待转换值]
   * @param  {string}                 currency [货币符号]
   * @param  {int}                    decimals [小数]
   * @return {string}                          [已转换值]
   */
  currency: (value, currency, decimals) => {
    value = parseFloat(value)
    if (!isFinite(value) || (!value && value !== 0)) return ''
    currency = currency != null ? currency : '$'
    decimals = decimals != null ? decimals : 2
    var stringified = Math.abs(value).toFixed(decimals)
    var _int = decimals
      ? stringified.slice(0, -1 - decimals)
      : stringified
    var i = _int.length % 3
    var head = i > 0
      ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
      : ''
    var _float = decimals
      ? stringified.slice(-1 - decimals)
      : ''
    var sign = value < 0 ? '-' : ''
    return sign + currency + head +
      _int.slice(i).replace(digitsRE, '$1,') +
      _float
  }
}
