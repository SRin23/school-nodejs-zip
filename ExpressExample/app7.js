//Express 기본 모듈 불러오기
var express = require('express');
var http = require('http');
var path = require('path');

//Express의 미들웨어 불러오기
var bodyParser = require('body-parser');
var static = require('serve-static');

//Express 객체 생성
var app = express();

app.set('port', process.env.PORT || 3000)

app.use(bodyParser.urlencoded({extended : false}))

app.use(bodyParser.json())
app.use('/public', static(path.join(__dirname, 'public')))


app.use(function(req, res, next){
    console.log('첫번째 미들웨어에서 요청을 처리함');  
    
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    res.writeHead('200', {'Content-Type' : 'text/html; charset=utf8'})
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>')
    res.write('<div><p>Param id : ' + paramId + '</p></div>')
    res.write('<div><p>Param password : ' + paramPassword + '</p></div>')
    res.end()

});

//Express 서버에서 시작
http.createServer(app).listen(3000, function(){
    console.log('Express 서버가 3000번 포트에서 시작됨');
})