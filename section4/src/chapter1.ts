/*
* 함수 타입 표현식
* */

type Operation = (a:number, b:number) => number
const add:Operation = (a, b) => a + b;
const sub:Operation = (a, b) => a - b;
const multi:Operation = (a, b) => a * b;
const div:Operation = (a, b) => a / b;

/*
* 호출 시그니처
* 콜 시그니처
* */

type Operation2 = {
    (a:number,b:number) : number
}
const add2:Operation2 = (a, b) => a + b;
const sub2:Operation2 = (a, b) => a - b;
const multi2:Operation2 = (a, b) => a * b;
const div2:Operation2 = (a, b) => a / b;
