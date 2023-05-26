/*
* 인터페이스와 클래스
* */
interface characterInterface{
    name:string,
    moveSpeed:number,
    move():void
}
class Character implements characterInterface{
    constructor(public name:string,public moveSpeed:number, private extra:String) {
    }
    move(): void {
        console.log(`${this.moveSpeed}로 이동중...`)
    }

}