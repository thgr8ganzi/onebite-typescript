/*
* 사용자 정의 타입가드
* */

type Dog = {
    name:string,
    isBark:boolean
}
type Cat = {
    name:string,
    isScratch:Boolean
}
type Animal = Dog | Cat

function isCat(animal:Animal):animal is Cat{
    return (animal as Cat).isScratch !== undefined
}

function isDog(animal:Animal):animal is Dog{
    return (animal as Dog).isBark !== undefined
}
function warning(animal:Animal){
    if(isDog(animal)){

    }
}