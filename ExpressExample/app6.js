//Express 기본 모듈 불러오기
var express = require('express');
var http = require('http');

//Express 객체 생성
var app = express();

app.use(function(req, res, next){
    console.log('첫번째 미들웨어에서 요청을 처리함');

    //header(name) ->  헤더를 확인
    //query -> 클라이언트에서 GET 방식으로 전송한 요청 파라미터를 확인
    //http://localhost:3000/?name=abc 작성시, name에 abc가 출력됨
    //var userAgent = req.header('User-Agent');   //request header의 'user-agent'속성에 접근
    var accept = req.header('Accept');
    var paramName = req.query.name;

    res.writeHead('200', {'Content-Type':'text/html; charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    //res.write('<div><p>User-Agent : ' + userAgent + '</p></div>');
    res.write('<div><p>Accept : ' + accept + '</p></div>');
    res.write('<div><p>Param name : ' + paramName + '</p></div>');
    res.end();
});

//Express 서버에서 시작
http.createServer(app).listen(3000, function(){
    console.log('Express 서버가 3000번 포트에서 시작됨');
})