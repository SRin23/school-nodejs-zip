//Express 기본 모듈 불러오기
var express = require('express');
var http = require('http');

//Express 객체 생성
var app = express();

//첫번째 미들웨어에서 다음 미들웨어로 넘김(next이용)
app.use(function(req, res, next){
    console.log('첫번째 미들웨어에서 요청을 처리함');
    
    //실습1 / JSON 객체
    // Fail
    // var person = {name:'소녀시대', age:20};
    // res.writeHead('200', {'Content-Type':'application/json; charset=utf8'});
    // res.end(personStr);

    //실습2 / JSON 객체
    //OK
    // var person = {name:'소녀시대', age:20};
    // var personStr = JSON.stringify(person);  //person을 문자열로 변환후
    // res.writeHead('200', {'Content-Type':'application/json; charset=utf8'});
    // res.end(personStr);  //작성해야한다.

    //실습3 / JSON 객체
    //OK
    var person = {name:'소녀시대', age:20};
    var personStr = JSON.stringify(person); //person을 문자열로 변환후
    res.end(personStr);  //작성

    //실습4
    // UTF8이 깨져서 나옴 Fail
    // 데이터는 HTML 문자열
    // var person = {name:'소녀시대', age:20};
    // var personStr = JSON.stringify(person);
    // res.writeHead('200', {'Content-Type':'text/html; charset=utf8'});
    // res.end(personStr);

    //실습5
    //OK
    // var person = {name:'소녀시대', age:20};
    // var personStr = JSON.stringify(person);
    // res.send(personStr);

    //실습6
    // var person = {name:'소녀시대', age:20};
    // res.send(person);

    //실습7
    //OK
    // req.user='sunny';
    // res.writeHead('200', {'Content-Type':'text/html; charset=utf8'});
    // res.end('<h1>Express 서버에서 ' + req.user + '를 res, writeHeader와 end로 응답한 결과입니다. </h1>');

    //실습8
    //OK
    // req.user = 'sunny';
    // res.send('<h1>Express 서버에서 ' + req.user + '를 send로 응답한 결과입니다. </h1>')
});



//Express 서버에서 시작
http.createServer(app).listen(3000, function(){
    console.log('Express 서버가 3000번 포트에서 시작됨');
})