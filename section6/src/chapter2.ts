/*
* 접근제어자
* access modifier
* -> public private protected
* */

class Employee{
    // private name;
    // protected age;
    // private position;
    constructor(private name:string,protected age:number,private position:string) {}
    work(){
        console.log("일함")
    };
    getName(){
        return this.name
    }
    setName(name:string){
        this.name = name
    }

}
class ExecutiveOfficer extends Employee{
    officeNumber;
    constructor(name:string,age:number,position:string,officeNumber:number) {
        super(name,age,position);
        this.officeNumber = officeNumber
    }
    func(){
        return this.age
    }
}
const employee:Employee = new Employee("이지수",29,'developer')
console.log(employee.getName())
employee.setName('지수')







