//비동기식으로 파일 쓰기
var fs = require('fs');

fs.writeFile('./output.txt', 'Hello World!', function(err){
    if(err){
        console.log("Error : " + err);
    }
    console.log('output.txt 파일에 데이터 쓰기 완료')
});