/**
 * @desc   千位分割方法
 * @param  {String,Number}  num
 * @param  {Number}  n
 * @param  {String}  symbol
 * @return {String}
 */
// (123456789.11).toLocaleString('en-US')  ie11+ 兼容性不好
// /(\d)(?=(\d{3})+\.)/g;
// 这里最难理解的就是(?=(\d{3})+\.)，且看语法：
// x(?=y)：正向肯定查找，匹配后面带有y的x项目
// 查找一个和“.”之间带有一个或多个连续3位数字的数字（x）
// symbol 不建议为'.'
const priceSubstr = (num = '0', n = 0, symbol = ',') => {
  if(parseInt(num) != num && n !== 0) {
    if (symbol === '.') throw new Error('symbol can not same as .')
  }
  num = (+num).toFixed(n === 0 ? 1 : n)
  num = num.toString().replace(/(\d)(?=(\d{3})+\.)/g, `$1${symbol}`)
  if (!!n) {
    return num
  } else {
    return num.substring(0, num.lastIndexOf('.'))
  }
}

module.exports = priceSubstr
