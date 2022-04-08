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

//app.use('public') 추가
app.use('/public', static(path.join(__dirname, 'public')));

//라우터 객체 참조
var router = express.Router();

//라우팅 함수 등록(html의 action값과 같아야한다.)
//URL Parameter방식
router.route('/process/login/:name').post(function(req, res){
    console.log('.process/login/:name 처리함');

    var paramName = req.params.name;    //param의 :name 위치의 값을 paramName에 저장
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    //console.log(req.params.name); //값 확인
    res.writeHead('200', {'Content-Type' : 'text/html; charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>')
    res.write('<div><p>Param name : ' + paramName + '</p></div>');
    res.write('<div><p>Param id : ' + paramId + '</p></div>')
    res.write('<div><p>Param password : ' + paramPassword + '</p></div>')
    res.write("<br><a href='/public/login2.html'>로그인 페이지로 돌아가기</a>");
    res.end();
})
 
app.all('*', function(req, res){
    res.status(404).send('<h1>ERROR - 페이지를 찾을 수 없습니다..</h1>');
});

//라우터 객체를 app 객체에 등록
app.use('/', router);
//console.log(router);

//Express 서버에서 시작
http.createServer(app).listen(3000, function(){
    console.log('Express 서버가 3000번 포트에서 시작됨');
})