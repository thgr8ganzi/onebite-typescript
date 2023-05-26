/*
* map 메서드
* */
import {log} from "util";

const arr = [1,2,3]
const newArr = arr.map((it)=> it * 2)

function map<T,K>(arr:T[],callback:(item:any)=>K){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]))
    }
    return result
}
let result = map(arr,(it)=>it*2)
map(['hi','hello'],(it)=>it.toUpperCase())
map(['hi','hello'],(it)=>parseInt(it))

/*
* forEach
* */
const arr2 = [1,2,3]
// arr.forEach((it) => console.log(it))
function forEach<T>(arr:T[], callback:(item:T)=>void){
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i])
    }
}
forEach(arr,it => {
    console.log(it.toFixed())
})
forEach(['123','456'], it=>{
    console.log(it)
})







