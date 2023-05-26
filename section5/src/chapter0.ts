/*
* 인터페이스
* */
interface IPerson{
    readonly name:string,
    age?:number,
    // sayHi: () => void;
    sayHi():void;
    sayHi(a:number,b:number):void;
}
type Type1 = number|string|IPerson
type Type2 = number&string

const person:IPerson = {
    name:'이지수',
    age: 29,
    sayHi: () => console.log('say hi')
}
person.sayHi()
person.sayHi(1,2)