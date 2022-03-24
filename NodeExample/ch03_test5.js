//객체의 속성(method)에 함수 할당 
//방법1)

var Person = {};

Person["age"] = 20;
Person["name"] = '방탄소년단';

//객체의 속성으로 함수 할당(익명함수)
Person.add = function(a, b){    
    return a+b;
}

console.log('나이 : %d', Person.age);
console.log('이름 : %s', Person["name"]);
console.log('더하기(12, 5) : %d', Person.add(12, 5));
