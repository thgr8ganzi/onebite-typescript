// 타입별칭
type User = {
    id:number,
    name:string,
    nickname:string,
    birth:string,
    location:string
}
let user:User = {
    id:1,
    name:"이지수",
    nickname : "간지",
    birth : "1993.02.25",
    location : "서울"
}
function func(){
    type User = {}
}

type CountryCode = {
    [key:string] : string
}
//인덱스 시그니처
let countryCodes:CountryCode = {
    Korea:'ko',
    UnitedState:'us',
    UnitedKingdom:'uk',
}
type CountryNumberCodes = {
    [key:string]:(number|string);
    Korea:number
}
let countryNumberCodes:CountryNumberCodes = {
    Korea : 410,
    UnitedState:"840",
    UnitedKingdom:826
}