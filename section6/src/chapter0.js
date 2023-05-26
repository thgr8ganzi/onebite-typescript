/*
* 클래스
* */
let studentA = {
    name:'이지수',
    grade:'A+',
    age:29,
    study(){
        console.log('해적왕')
    },
    introduce(){
        console.log('안녕 하세요')
    }
}
class Student{
    name;
    grade;
    age;
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }
    study(){
        console.log('해적왕')
    }
    introduce(){
        console.log(`안녕 하세요 ${this.name} 입니다.`)
    }
}

class StudentDeveloper extends Student{
    favoriteSkill
    constructor(name, grade, age,favoriteSkill) {
        super(name,grade,age)
        this.name = name;
        this.grade = grade;
        this.age = age;
        this.favoriteSkill = favoriteSkill;
    }
    programming(){
        console.log(`${this.favoriteSkill}로 프로그래밍`)
    }
}


let studentB = new Student("이지수","A+",29)
console.log(studentB)
studentB.introduce()