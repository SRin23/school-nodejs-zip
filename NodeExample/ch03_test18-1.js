/*
3장 Test ch03_test18-1.js
프로토타입 객체 만들기 변형
*/

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.swim = function(way){
    console.log(way + '을 하며 빠른 속도로 수영합니다.');
}
Person.prototype.dance = function(song){
    console.log(song + " 노래에 맞추어 즐겁게 춤을 춥니다.");
}
Person.prototype.study = function(subject){
    console.log(subject + " 과목을 열심히 공부합니다.");
}
var p1 = new Person('3204김세린', 19);
var p2 = new Person('1101홍길동', 18);
var p3 = new Person('2202심청이', 17);

console.log(p1.name + ' 객체의 swim("배영")을 호출합니다.');
p1.swim("배영");
console.log(p2.name + ' 객체의 dance("Happy")을 호출합니다.');
p2.dance("Happy");
console.log(p3.name + ' 객체의 study("Node.js")을 호출합니다.');
p3.study("Node.js");
