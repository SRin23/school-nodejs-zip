//Express 기본 모듈 불러오기
var express = require('express');
var http = require('http');
var path = require('path');

//Express의 미들웨어 불러오기
var bodyParser = require('body-parser');
var static = require('serve-static');
const { emitWarning } = require('process');

//Express 객체 생성
var app = express();

//기본 속성 설정
app.set('port', process.env.PORT || 3000)

//body-parser를 이용해 application/x-222-form-urlencoded 파싱
app.use(bodyParser.urlencoded({extended : false}))

//body-parser를 이용해 application/json파싱
app.use(bodyParser.json())

//app.use('/public', static(path.join(__dirname, 'public')))  //주소창에 /public 기본 작성 -> http://localhost:3000/public/login.html
app.use('/', static(path.join(__dirname, 'public')))    //주소창에 / 기본 작성 -> http://localhost:3000/login.html

app.use(function(req, res, next){
    console.log('첫번째 미들웨어에서 요청을 처리함');  
    
    // console.log(req.body.id);   -> html에서 전달받은 값
    // console.log(req.query.id);
    // console.log(req.body.password);  -> html에서 전달받은 값
    // console.log(req.body.password);
    
    var paramId = req.body.id || req.query.id;  // ?name=test123 작성시, req.query.id가 paramId에 저장
    var paramPassword = req.body.password || req.query.password;    //?password=test123 작성시, req.query.password가 paramId에 저장

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