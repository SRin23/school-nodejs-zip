//객체의 속성(method)에 함수 할당 
//방법3)

//객체 선언시, 속성에 함수 할당
var Person = {
    age : 20,
    name : "방탄소년단",
    add : function(a, b){
        return a+b;
    }
};

//console.log(Person);
console.log('나이 : %d', Person.age);
console.log('이름 : %s', Person["name"]);
console.log('더하기(12, 10) : %d', Person.add(12, 10));
