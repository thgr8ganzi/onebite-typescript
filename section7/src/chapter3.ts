/*
* 제네릭 인터페이스
* */
interface KeyPair<K,V>{
    key:K,
    value:V
}
let keyPair:KeyPair<string, any> = {
    key : '1',
    value : 1,
}
let keyPair2:KeyPair<boolean, string[]> = {
    key:true,
    value : ["",""]
}

/*
* 인덱스 시그니처
* */
interface NumberMap{
    [key:string]:number,
}
let numberMap1:NumberMap = {
    "abc" : 1
}
interface Map<V>{
    [key:string]:V
}
let map:Map<string> = {
    key:"value"
}
/*
* 제네릭 타입 별칭
* */
type Map2<V> = {
    [key:string]:V;
}
let map2:Map2<string> = {
    key:'Hello'
}

/*
* 제네릭 인터페이스 활용 예시
* -> 유저 관리 프로그램
* -> 학생/개발자 2가지 유저분류
* */
interface Student{
    type:"student",
    school:string
}
interface Developer{
    type:"developer",
    skill:string
}
interface User<T>{
    name:string;
    profile:T
}
function gotoSchool(user:User<Student>){
    const school = user.profile.school
    console.log(`${school}로 등교 완료`)
}
const developerUser:User<Developer> = {
    name:'이지수',
    profile:{
        type:'developer',
        skill:'TypeScript'
    },
}
const studentUser:User<Student> = {
    name:'홍길동',
    profile:{
        type:'student',
        school:'카이스트'
    }
}
