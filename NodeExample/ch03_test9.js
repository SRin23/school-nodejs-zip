//배열 만들고 함수 요소 추가하기

var Users = [{name : "방탄소년단", age : 20}, {name : "걸스데이", age : 22}];
console.log("추가 전 객체 요소의 개수 : %d", Users.length);

//변수에 함수 할당 후, 배열에 push하여 요소 추가
var add = function(a, b){
    return a+b;
}
Users.push(add);

console.log("추가 후 객체 요소의 개수 : %d", Users.length);
console.log('세번째 요소로 추가된 함수 실행 : %d', Users[2](10, 50));

console.log(Users[1], Users[2], Users[3]);  //error가 나지 않고, Users[3]은 undefined가 출력된다.
console.log(Users[0], Users[1], Users[2]);
