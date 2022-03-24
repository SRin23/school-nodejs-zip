//자바스크립트 객체형식
var Person = {};

//객체 메서드 추가 방법1)
Person['age'] = 20;
Person["name"] = '방탄소년단';
//객체 메서드 추가 방법2)
Person.mobile = '010-0000-1111';



//객체 메서드 호출 방법1)
console.log('나이 : %d', Person.age);
//객체 메서드 호출 방법2)
console.log('나이 : %d', Person['age']);

console.log('이름 : %s', Person.name);
console.log('이름 : %s', Person["name"]);

console.log('전화 : %s', Person.mobile);
console.log('전화 : %s', Person["mobile"]);
