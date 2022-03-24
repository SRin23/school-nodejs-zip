//객체의 속성(method)에 함수 할당 
//방법2)

var Person = {};

Person["age"] = 20;
Person["name"] = '방탄소년단';

//객체의 속성으로 함수 할당
//변수에 함수 할당 후, 할당된 함수를 가진 변수를 Person객체의 add속성값으로 저장
var oper = function(a, b){    
    return a+b;
}
Person["add"] = oper;
//Person.add = oper;

//console.log(Person);
console.log('나이 : %d', Person.age);
console.log('이름 : %s', Person["name"]);
console.log('더하기(12, 12) : %d', Person.add(12, 12));
