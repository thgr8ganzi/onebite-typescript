/*
* keyof 연산자
* */

type Person = typeof person
function getPropertyKey(person:Person,key:keyof typeof person){
    return person[key]
}
const person = {
    name:'이지수',
    age:29
}
getPropertyKey(person,"name")