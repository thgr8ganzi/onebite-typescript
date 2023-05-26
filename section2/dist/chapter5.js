// enum 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "이지수",
    role: Role.ADMIN,
    language: Language.korean
};
const user2 = {
    name: "홍길동",
    role: Role.USER
};
const user3 = {
    name: "장길산",
    role: Role.GUEST
};
export {};
