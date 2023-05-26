// unknown

function unknownExam(){
    let a:unknown = 1;
    let b:unknown = "a";
    let c:unknown = true
    let d:unknown = null
    let e:unknown = undefined

    let unknownVar:unknown;

    // let num:number = unknownVar;
}

//never
function neverExam(){
    function neverFunc():never{
        while (true){}
    }
    let num:number = neverFunc()
    let str:string = neverFunc()
    let bool:boolean = neverFunc()

    // let never1:never = 10;
}

//void
function voidExam(){
    function voidFunc():void{
        console.log('hi')
    }
    let voidVar:void = undefined;
}
//any
function anyExam(){
    function anyFunc():any{
    }
    let unKnownVar:unknown;
    let anyVar:any;
    let un:undefined;
    unKnownVar = anyVar
    unKnownVar = un
    anyVar = unKnownVar
    anyVar = un
    un = anyVar
    // un = unKnownVar
}