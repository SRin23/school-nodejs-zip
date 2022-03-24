var result = 0;


console.time('duration_sum');   //실행 소요시간을 측정하기 위한 시작시간 기록

for(var i = 1; i<=1000; i++){
    result+=i;
}

console.timeEnd('duration_sum');    //실행 소요시간을 측정하기 위한 끝 시간을 기록
//time_id : 소요시간 이 출력된다.


console.log('1부터 1000까지 더한 결과물 : %d', result); 

console.log('현재 실행한 파일의 이름 : %s', __filename);
console.log('현재 실행한 파일의 경로 : %s', __dirname);

var Person = {name : "방탄소년단", age:20};
console.dir(Person);
//console.log(Person); //console.log와 console.dir의 차이는?