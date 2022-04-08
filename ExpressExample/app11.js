var express = require('express');
var http = require('http');
var path = require('path');

var bodyParser = require('body-parser');
var static = require('serve-static');
var cookieParser = require('cookie-parser');
var expressErrorHandler = require('express-error-handler');

var app = express();
app.set('port', process.env.PORT || 3000)

app.use(bodyParser.urlencoded({extended : false}))

app.use(bodyParser.json())

app.use('/public', static(path.join(__dirname, 'public')));

//cookie-parser 설정
app.use(cookieParser());

var router = express.Router();
router.route('/process/setUserCookie').get(function(req, res){
    console.log('/process/setUserCookie 호출됨');

    //쿠키 설정
    res.cookie('user', {
        id:'mike',
        name:'소녀시대',
        authorized:true
    });

    //redirect로 응답
    res.redirect('/process/showCookie');
})

router.route('/process/showCookie').get(function(req, res){
    console.log('/process/showCookie 호출됨');

    res.send(req.cookies);
})

//라우터 객체를 app 객체에 등록
app.use('/', router);

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