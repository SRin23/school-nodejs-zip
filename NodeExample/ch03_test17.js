//클로저 : 리턴된 함수에서 자신을 만들어준 함수 내의 변수 접근
function add(a, b, callback){
    var result = a+b;
    callback(result);
    var count = 0;
    var history = function(){
        //0으로 초기화 되지 않고, 계속해서 증가한다.
        //내부함수(function)에서 외부에 있는 count에 접근할 수 있다 -> 클로저
        count++;
        return count + ' : ' + a + ' + ' + b + ' = ' + result;
    };
    return history;
}

//add의 반환값인 history 함수가 history변수에 저장된다.
var history = add(10, 10, function(result){
    console.log('파라미터로 전달된 콜백 함수 호출됨.');
    console.log('더하기 (10, 10)의 결과 : %d', result);
});


console.log('결과값으로 받은 함수 실행 결과 : ' + history());
console.log('결과값으로 받은 함수 실행 결과 : ' + history());
console.log('결과값으로 받은 함수 실행 결과 : ' + history());
