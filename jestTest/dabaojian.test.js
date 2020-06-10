const dabaojian = require('./dabaojian.js')
const { baojian1 , baojian2 }  = dabaojian

test('保健1 300元',()=>{
    expect(baojian1(300)).toBe('至尊享受')
})
test('保健1 300元',()=>{
    expect(baojian1(100)).toBe('基本按摩')
})

test('保健2  2000元',()=>{
    expect(baojian2(2000)).toBe('双人服务')
})
test('保健2  2000元',()=>{
    expect(baojian2(500)).toBe('单人服务')
})