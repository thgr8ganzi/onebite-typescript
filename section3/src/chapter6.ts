// 타입단언
type Person = {
    name:string,
    age:string,
}
let person = {} as Person;
person.name = "이지수"
person.age = "29";

type Dog = {
    name:string,
    color:string
}
let dog= {
    name:"멍멍이",
    color:'brown',
    breed:'똥개'
} as Dog

/*
* 타입 단언 규칙
* 값 as 단언
* A as B
* A 가 B 의 슈퍼타입이거나
* A 가 B 의 서브타입
* */
let num1 = 10 as never;
let num2 = 10 as unknown;
let num3 = 10 as unknown as String;

/*
* const 단언
* */
let num4 = 10 as const
const num5 = 10;

let cat = {
    name:"야옹",
    color:"red"
}

/*
* Non Null 단언
* */
type Post = {
    title : string,
    author? : string,
};
let post:Post = {
    title:'게시글1',
    author:'이지수'
}
const len:number = post.author!.length








