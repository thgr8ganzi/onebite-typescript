/*
* 인덱스드 엑세스
* */
type PostList = {
    title:string,
    content:string,
    author:{
        id:number,
        name:string,
        age:number,
    }
}[]
const key = "author"
function printAuthorInfo(author:PostList[number]["author"]){
    console.log(`${author.name} - ${author.id}`)
}
const post : PostList[number] = {
    title:'게시글제목',
    content:'내용',
    author:{
        id:1,
        name:'이지수',
        age:29
    }
}

type Tup = [number,string,boolean];
type tup0 = Tup[0]
type tup1 = Tup[1]
type tup2 = Tup[2]
type TupNum = Tup[number]