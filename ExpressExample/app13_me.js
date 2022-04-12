var express = require('express');
var http = require('http');
var path = require('path');

var bodyParser = require('body-parser');
var static = require('serve-static');
var cookieParser = require('cookie-parser');
var expressErrorHandler = require('express-error-handler');

//Session 미들웨어 블러오기
var expressSession = require('express-session')
var multer = require('multer');
var fs = require('fs');

var cors = require('cors');

var app = express();
app.set('port', process.env.PORT || 3000)

app.use(bodyParser.urlencoded({extended : false}))

app.use(bodyParser.json())

app.use('/public', static(path.join(__dirname, 'public')));

app.use('/uploads', static(path.join(__dirname, 'uploads')));

//cookie-parser 설정
app.use(cookieParser());

app.use(expressSession({
    secret:'my key', 
    resave: true,
    saveUninitialized: true
}));

app.use(cors());
//multer 미들웨어 사용 : 미들웨어 사용 순서 중요 body-parser-> multer-> router
//파일 제한 : 10개, 1G
var storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, 'uploads')
    },
    filename: function(req, file, callback){
        /*callback(null, file.originalname + Date.now())*/
        //callback(null, file.originalname)
        var extension = path.extname(file.originalname);
        var basename = path.basename(file.originalname);
        callback(null, basename + Date.now() + extension);
    }
});

var upload = multer({
    storage : storage,
    limits : {
        files : 12,
        fileSize : 1024*1024*1024
    }
});

// 라우터 사용하여 라우팅 함수 등록
var router = express.Router();

//파일 업로드 라우팅 함수 - 로그인 후 세션 저장함
router.route('/process/phote').post(upload.array('photo1', 1), function(req, res){
    console.log('/process/phote 호출됨.');

    try{
        var files = req.files;

        console.dir('#===== 업로드된 첫번째 파일 정보 =====#');
        console.dir(req.files[0]);
        console.dir('#=====#');

        //현재의 파일 정보를 저장할 변수 선언
        var originalname = '';
        var filename = '';
        var mimetype = '';
        var size = 0;

        if(Array.isArray(files)){ //배열에 들어간 경우 - 설정에서 1개의 파일도 배열에 넣게 함
            console.log('배열에 들어있는 팡리 갯수 : %d', files.length);

            for(var index = 0; index<files.length; index++){
                originalname = files[index].originalname;
                filename = files[index].filename;
                mimetype = files[index].mimetype;
                seze = files[index].size;
            }

        }else{  //배열에 들어가 있지 않은 경우(현재 설정에서는 해당 없음)
            console.log('파일 갯수 : 1');

            originalname = files[index].originalname;
            filename = files[index].name;
            mimetype = files[index].mimetype;
            size = files[index].size;
        }
        console.log('현재 파일 정보 : ' + originalname + ', ' + filename + ', ' + mimetype + ', ' + size);

        //클라이언트에 응답 전송
        res.writeHead('200', {'Content-Type' : 'text/html; charset=utf8'});
        res.write('<h3>파일 업로드 성공</h3>');
        res.write('<hr/>');
        res.write('<p>원본 파일 명 : ' + originalname + ' -> 저장 파일명 : ' + filename + '</p>');
        res.write('<p>MIME TYPE : ' + mimetype + '</p>')
        res.write('<p>파일 크기 : ' + size + '</p>');
        res.end();
    }catch(err){
        console.dir(err.stack);
    }   //try-catch end
}); //router.route('/process/photo') end

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