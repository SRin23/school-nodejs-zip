//Express 기본 모듈 불러오기
var express = require('express');
var http = require('http');

//Express 객체 생성
var app = express();

app.use(function(req, res, next){
    console.log('첫번째 미들웨어에서 요청을 처리함');
    res.redirect('http://naver.com');     //웹 페이지 경로를 google로 강제 이동
});

//Express 서버에서 시작
http.createServer(app).listen(3000, function(){
    console.log('Express 서버가 3000번 포트에서 시작됨');
})