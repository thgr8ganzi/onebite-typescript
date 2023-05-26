/*
* 조건부 타입
* */
type A = number extends string ? string : number;

type ObjA = {
    a:number
}
type ObjB = {
    a:number,
    b:number
}
type B = ObjB extends ObjA ? number : string

/*
* 제네릭과 조건부 타입
* */
type StringNumberSwitch<T> = T extends number ? string : number

let a:StringNumberSwitch<number> = "a";

function removeSpace<T>(text:T):T extends string ? string : undefined
function removeSpace(text:string){
    return text.replaceAll(' ','');
}
let result = removeSpace('hi i am 지수')
console.log(result.toUpperCase())
