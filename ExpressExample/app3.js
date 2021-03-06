//Express 기본 모듈 불러오기
var express = require('express');
var http = require('http');

//Express 객체 생성
var app = express();

//첫번째 미들웨어에서 다음 미들웨어로 넘김(next이용)
app.use(function(req, res, next){
    console.log('첫번째 미들웨어에서 요청을 처리함');
    req.user = 'sunny';
    next(); //다음 미들웨어로 이동
});

//두번째 미들웨어에서 응답 전송
app.use('/', function(req, res, next){
    console.log('두번째 미들웨어에서 요청을 처리함');
    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.end('<h1>Express 서버에서 ' + req.user + '가 응답한 결과입니다.</h1>');
});

//Express 서버에서 시작
http.createServer(app).listen(3000, function(){
    console.log('Express 서버가 3000번 포트에서 시작됨');
})