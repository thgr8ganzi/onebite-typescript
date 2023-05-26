/*
* 인터페이스 확장
* */

interface Animal{
    name:string,
    age:number
}
interface Dog extends Animal{
    isBark:boolean
}
interface Cat extends Animal{
    isScratch:boolean
}
interface Chicken extends Animal{
    isFly:boolean
}
let dog:Dog = {
    name:"멍멍이",
    age:3,
    isBark:true
}
interface DogCat extends Dog,Cat{
    
}
