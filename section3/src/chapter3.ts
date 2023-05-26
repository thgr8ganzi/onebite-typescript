// 기본타입간 호환
let num1:number = 10
let num2:10 = 10;
num1 = num2

// 객체타입간 호환성
type Animal={
    name:string,
    color:string
}
type Dog = {
    name:string,
    color:string,
    breed:string,
}
let animal:Animal = {
    name:"기린",
    color:"yellow",
}
let dog:Dog = {
    name:"멍멍이",
    color:"진도",
    breed:"똥개"
}
animal = dog
// dog = animal

type Book = {
    name:string,
    price:number
}
type ProgrammingBook={
    name:string,
    price:number,
    skill:string,
}
let book:Book;
let programmingBook:ProgrammingBook = {
    name:"적반하장",
    price:3000,
    skill:"아돈노"
}
book = programmingBook;
// programmingBook = book;

let book2:Book={
    name:"적반하장",
    price:3000,
    // skill:"아돈노"
}
let book3:Book = programmingBook

function func(book:Book):void{}
func({name:"적반하장",
    price:3000,})
    // skill:"아돈노"});
func(programmingBook)