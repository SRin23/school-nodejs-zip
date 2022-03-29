//Express 기본 모듈 불러오기
var express = require('express');
var http = require('http');

//Express 객체 생성
var app = express();

//첫번째 미들웨어에서 다음 미들웨어로 넘김(next이용)
app.use(function(req, res, next){
    console.log('첫번째 미들웨어에서 요청을 처리함');
    
    var person = {name:'방탄소년단', age:20};
    //res.send(person); 

    var personStr = JSON.stringify(person);
    //res.send(sendpersonStr);

    res.writeHead('200', {"content-Type" : "application/json;   charset=utf8"});
    res.write(personStr);   //res.send와 비슷함
    res.end()
});

//Express 서버에서 시작
http.createServer(app).listen(3000, function(){
    console.log('Express 서버가 3000번 포트에서 시작됨');
})