/*
* 함수타입의 호환성
* 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가
* 1. 반환값의 타입이 호환?
* 2. 매개변수 타입 호환?
* */
// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;
let a:A = () => 10;
let b:B = () => 10;
a = b
// b = a

// 기준2. 매개변수가 호환되는가
//2-1. 매개변수의 개수가 같을때

type C = (value:number) => void;
type D = (value:number) => void;

let c:C = (value) => {}
let d:D = (value) => {}

c = d;
d = c

type Animal = {
    name:string
}
type Dog = {
    name:string,
    color:string
}
let animalFunc = (animal:Animal) => {
    console.log(animal.name)
}
let dogFunc = (dog:Dog) => {
    console.log(dog.name)
    console.log(dog.color)
}
animalFunc = dogFunc
dogFunc = animalFunc

//2-2 매개변수의 개수가 다를때

type Func1 = (a:number) => void;
type Func2 = (a:number, b:number) => void;

let func1:Func1 = (a) => {}
let func2:Func2 = (a,b) => {}

func1 = func2
func2 = func1







