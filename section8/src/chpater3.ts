/*
* 맵드타입
* */
interface User{
    id:number;
    name:string;
    age:number;
}
type PartialUser = {
    [key in keyof User]?:User[key]
}
type BoolUser = {
    [key in "id"|"name"|"age"]:boolean
}
type ReadOnlyUser = {
    readonly [key in keyof User]:User[key]
}
// 한명의 유저 정보를 불러오는 기술
function fetchUser():User{
    return {
        id:1,
        name:'이지수',
        age:29,
    }
}
function updateUser(user:PartialUser) {
//     수정

}
updateUser({
    age:30,
})