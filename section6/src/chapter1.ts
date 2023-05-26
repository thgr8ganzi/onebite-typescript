/*
* 타입스크립트 클래스
* */
const employee = {
    name:'이지수',
    age:29,
    position:'developer',
    work(){
        console.log('일함')
    }
}
class Employee{
    name;
    age;
    position;
    constructor(name:string,age:number,position:string) {
        this.name = name
        this.age = age
        this.position = position
    }
    work(){
        console.log("일함")
    };
}
class ExecutiveOfficer extends Employee{
    officeNumber;
    constructor(name:string,age:number,position:string,officeNumber:number) {
        super(name,age,position);
        this.officeNumber = officeNumber
    }
}

const employeeB:Employee = new Employee("이지수",29,'developer')
console.log(employeeB)
const employeeC:Employee = {
    name:'',
    age:0,
    position:'',
    work() {
    }
}