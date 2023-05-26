/*
* 선언합침
* */

interface Person{
    name:String
}
interface Person{
    age:number
}
interface Developer extends Person{
    name:'hello',
    age:number
}
const person:Person = {
    name:'',
    age:1
}
/*
* 모듈보강
* */
interface Lib{
    a:number,
    b:number
}
interface Lib{
    c:string
}
const lib:Lib = {
    a:1,
    b:2,
    c:""
}

