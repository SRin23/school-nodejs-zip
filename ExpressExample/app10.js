//Express 기본 모듈 불러오기
var express = require('express');
var http = require('http');
var path = require('path');

//Express의 미들웨어 불러오기
var bodyParser = require('body-parser');
var static = require('serve-static');
var expressErrorHandler = require('express-error-handler');

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
router.route('/process/users/:id').post(function(req, res){
    console.log('/process/users/:id처리함');

    var paramId = req.params.id;
    console.log('/process/users와 토큰 %s를 이용해 처리함.', paramId);
    var paramName = req.body.name || req.query.name;
    var paramPassword = req.body.password || req.query.password;

    //console.log(req.params.name); //값 확인
    res.writeHead('200', {'Content-Type' : 'text/html; charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>')
    res.write('<div><p>Param id : ' + paramId + '</p></div>')
    res.write('<div><p>Param Name : ' + paramName + '</p></div>')
    res.write('<div><p>Param password : ' + paramPassword + '</p></div>')
    res.write("<br><a href='/public/login4.html'>로그인 페이지로 돌아가기</a>");
    res.end();
})


//라우터 객체를 app 객체에 등록
app.use('/', router);
//console.log(router);

 //404 에러 페이지 처리
 var errorHandler = expressErrorHandler({
     static : {
         '404' : './public/404.html'
     }
 });
 
 app.use(expressErrorHandler.httpError(404));
 app.use(errorHandler);
 
//Express 서버에서 시작
http.createServer(app).listen(3000, function(){
    console.log('Express 서버가 3000번 포트에서 시작됨');
})