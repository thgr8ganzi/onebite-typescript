/*
* 제네릭클래스
* */
class List<T>{
    constructor(private list:T[]) {
    }
    getList(){
        return this.list
    }
    push(data:T){
        this.list.push(data)
    }
    pop(){
        return this.list.pop()
    }
    print(){
        console.log(this.list)
    }
}
const numberList = new List([1,2,3])
numberList.pop()
numberList.push(4)
numberList.print()
