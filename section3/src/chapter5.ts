// 타입추론
let a = 10;
let b = 'hello'
let c = {
    id : 1,
    name : '이지수',
    profile : {
        nickame:'https://www.naver.com'
    }
}
let {id,name,profile} = c;
let [one, two, three] = [1, "hello", true]

function func(message = "hello"){
    return "Hello";
}
let d;
d = 10
d = "a"
d = true

const num = 10;
const str = "hello";
let arr = [1,"string"];