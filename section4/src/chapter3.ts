/*
* 함수 오버로딩
* 하나의 함수를 매개변수의 개수나 타입에 따라
* 여러가지 버전으로 만드는 문법
* ->하나의 함수 func
* ->모든 매개변수 타입 number
* ->1개 매개변수 * 20
* ->3개 매개변수 -> 다 더한값
* */
function func(a:number):void;
function func(a:number,b:number,c:number):void;

function func(a:number,b?:number,c?:number){
    if(typeof b === 'number' && typeof c === 'number'){
        console.log(a + b + c)
    }else{
        console.log(a * 20)
    }
}
func(1)
func(1,2,3)

