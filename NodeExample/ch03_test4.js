//익명함수(함수문 자체가 add에 할당된것과 같음)
var add = function(a, b){
    return a+b;
}

//익명 함수 호출
var result = add(10, 10);
console.log('더하기 (10, 10) : %d', result);