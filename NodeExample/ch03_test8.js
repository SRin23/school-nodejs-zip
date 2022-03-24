//배열 만들고 객체 요소 추가하기

var Users = [{name : "방탄소년단", age : 20}, {name : "걸스데이", age : 22}];
console.log("추가 전 객체 요소의 개수 : %d", Users.length);

Users.push({name : "티아라", age : 23});    //배열 맨 뒤에 값 추가

console.log("추가 후 객체 요소의 개수 : %d", Users.length);
console.log('첫번째 사용자 이름 : %s', Users[0].name);