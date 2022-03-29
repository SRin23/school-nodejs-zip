//Express 기본 모듈 불러오기
var express = require('express');
var http = require('http');

//Express 객체 생성
var app = express();

//어떤것을 처리하는 함수 : 미들웨어
//미들웨어를 등록할땐 use()메서드 사용
//다음 미들웨어를 사용하고 싶을땐 next를 사용

//직접 미들웨어 객체를 만들어 설정
app.use(function(req, res, next){
    console.log('첫번째 미들웨어에서 요청을 처리함');
    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.end('<h1>Express 서버에서 응답한 결과입니다.</h1>');
});

//서버 3000시작
http.createServer(app).listen(3000, function(){
    console.log('Express 서버가 3000번 포트에서 시작됨');
})