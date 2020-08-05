import {test1,test2,test3} from './demo'
test('test',()=>{
    const key = 19
    expect(test1(key)).toBe(10)
})
test('test',()=>{
    const key = 6
    expect(test1(key)).toBe(key)
})

test('test2',()=>{
    expect(test2(12)).toBe(12)
})
test('test2',()=>{
    expect(test2(1000)).toBe(100)
})
test('test3',()=>{
    expect(test3({age:3})).toMatchObject({name:'yao',age:3})
})