// 배열
let numArr:number[] = [1,2,3];
let strArr:string[] = ["hello","hi","안녕"]
let boolArr:Array<Boolean> = [true,false,true];

// 다양한 요소 타입 배열
let multiArr:(string|number)[] = [1,"hello",3];

// 다차원 배열
let doubleArr:(number|string)[][] = [
    [1,2,3],
    ["b"]
]

// 튜플(길이 타입 고정 배열)
let tup1:[number,number] = [1,2]
let tup2:[number,string,boolean] = [1,"2",true]

const users:[string,number][] = [
// const users:(string|number)[][] = [
    ["이지수",1],
    ["홍길동",2],
    ["장길산",3],
    ["일지매",4],
    // [5,"일지매"],
]