const Mock = require('mockjs')

Mock.Random.extend({
    constellation: function(date) {
        var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        return this.pick(constellations)
    }
})

console.log(Mock.mock('@id'))
console.log(Mock.mock('@title'))
console.log(Mock.mock('@ip'))
console.log(Mock.mock('@image'))
console.log(Mock.mock('@url'))
console.log(Mock.mock('@cname'))
console.log(Mock.mock('@age'))


console.log(Mock.mock('@constellation'))
console.log(Mock.mock('@color'))
console.log(Mock.mock('@ctitle'))
console.log(Mock.mock('@area'))
console.log(Mock.mock('@region'))
console.log(Mock.mock('@pick'))


