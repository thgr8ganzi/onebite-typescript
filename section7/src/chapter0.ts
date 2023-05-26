/*
* 제네릭
* */
// 제네릭함수
function func<T>(value:T):T{
    return value
}
let num = func(10)
let bool = func(true)
let str = func('str')
let arr = func([1,2,3] as [number,number,number])
let arr2 = func<[number,number,number]>([1,2,3])