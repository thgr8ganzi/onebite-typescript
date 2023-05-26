// 대수타입
//-> 여러개의 타입을 합성해 새롭운 타입 만들어냄

//합집합
let a : string | number | boolean;
a = 1;
a = "Hello";
a = true;

let arr:(number|string|boolean)[] = [1, 'hello',true]

type Dog = {
    name:string,
    color:string
}
type Person = {
    name:String,
    language:string
}
type Union1 = Dog | Person;

let union1:Union1 = {
    name : "",
    color : "",
}
let union2:Union1 = {
    name:"",
    language:"",
}
let union3:Union1 = {
    name:'',
    language:'',
    color:'',
}
// let union4:Union1 = {
//     name:'',
// }
// 교집합 - Intersection
let variable: number & string // typeof never
type Intersection = Dog & Person;
let inter1:Intersection = {
    name:'',
    language:'',
    color:''
}
