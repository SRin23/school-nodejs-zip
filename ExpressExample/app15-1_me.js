var express = require('express');
var http = require('http');
var path = require('path');

var bodyParser = require('body-parser');
var static = require('serve-static');
var cookieParser = require('cookie-parser');
var expressErrorHandler = require('express-error-handler');

// Session 미들웨어 불러오기
var expressSession = require('express-session');

// 파일 업로드용 미들웨어
var multer = require('multer');
var fs = require('fs');

//클라이언트에서 ajax로 요청 시 CORS(다중 서버 접속) 지원
var cors = require('cors');

var app = express();

app.set('port', process.env.PORT || 3000)

app.use(bodyParser.urlencoded({extended : false}))

app.use(bodyParser.json())

app.use(static(path.join(__dirname, 'public')));
app.use(static(path.join(__dirname, 'uploads')));

//cookie-parser 설정
app.use(cookieParser());

app.use(expressSession({
    secret:'my key', 
    resave: true,
    saveUninitialized: true
}));

var router = express.Router();
router.route('/process/login').post(function(req, res){
    console.log('/process/login 호출됨');

    var paramId = req.body.id||req.query.id;
    var paramPassword = req.body.password||req.query.password;

    if(req.session.user){
        //이미 로그인된 상태이면 아래 내용 실행
        console.log('이미 로그인 되어 상풍페이지로 이동합니다.');
        res.redirect('/product.html');
    }else{
        //세션 저장
        req.session.user = {
            id: paramId,
            name: '소녀시대', 
            authorized: true
        };

        res.writeHead('200', {'Content-Type' : 'text/html; charset=utf8'});
        res.write('<h1>로그인 성공</h1>')
        res.write('<div><p>Param id : ' + paramId + '</p></div>');
        res.write('<div><p>Param password : ' + paramPassword + '</p></div>');
        res.write('<br><br><button type="submit"><a href="/process/product">상품페이지로 이동하기</a></button>');
        res.write('<button type="submit"><a href="/photomulti3204">파일업로드로 이동하기</a></button>');
        //'/process/product' 상품 => 106라인의 router.route('/process/product).get으로 연결됨
        res.end();
    }
});

//로그아웃 라우팅 함수 - 로그아웃 후 세션 삭제
router.route('/process/logout').get(function(req, res){
    console.log('/process/logout 호출됨');
    if(req.session.user){
        //로그인된 상태
        console.log('로그아웃 합니다.')
        req.session.destroy(function(err){
            if(err) {throw err;}

            console.log('세션을 삭제하고 로그아웃 되었습니다.')
            res.redirect('/login2.html');
        });
    }else{
        //로그인 안된 상태
        console.log('아직 로그인되어있지 않습니다.');
        res.redirect('/login2.html');
    }
})

router.route('/process/product').get(function(req, res){
    console.log('process/product 호출됨');
    if(req.session.user){
        res.redirect('/product.html');
    }else{
        res.redirect('/login2.html');
    }
})

//multer 미들웨어 사용 : 미들웨어 사용 순서 중요  body-parser -> multer -> router
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'uploads')
    },
    filename: function (req, file, callback) {
		var extension = path.extname(file.originalname);
		var basename = path.basename(file.originalname, extension);
		callback(null, basename + Date.now() + extension);
	 }
});

var upload = multer({ //=>upload라는 변수에 multer()를 할당하고 실행하여줌
    storage: storage,
    limits: {
		files: 12,
		fileSize: 1024 * 1024 * 1024
	}
});

 
// 라우터 사용하여 라우팅 함수 등록
var router = express.Router();

// 파일 업로드 라우팅 함수 - 로그인 후 세션 저장함
router.route('/process/photomulti3204').post(upload.array('photo', 12), function(req, res) {
	console.log('/process/photomulti3204 호출됨.');
	res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
	try {
		var files = req.files;
        
		// 현재의 파일 정보를 저장할 변수 선언
		var originalname = '',
			filename = '',
			mimetype = '',
			size = 0;
		
		if (Array.isArray(files)) {   // 배열에 들어가 있는 경우 (설정에서 1개의 파일도 배열에 넣게 했음)
	        console.log("배열에 들어있는 파일 갯수 : %d", files.length);
	        
	        for (var index = 0; index < files.length; index++) {
				console.log('#===== 업로드된 ' + (index+1) + '번째 파일 정보 =====#')
	        	originalname = files[index].originalname;
	        	filename = files[index].filename;
	        	mimetype = files[index].mimetype;
	        	size = files[index].size;
				console.log('현재 파일 정보 : ' + originalname + ', ' + filename + ', ' + mimetype + ', ' + size);

				// 클라이언트에 응답 전송
				
				res.write('<h3>파일 업로드 성공</h3>');
				res.write('<hr/>');
				res.write('<p>원본 파일명 : ' + originalname + ' -> 저장 파일명 : ' + filename + '</p>');
				res.write('<p>MIME TYPE : ' + mimetype + '</p>');
				res.write('<p>파일 크기 : ' + size + '</p>');
				res.end();
	        }
            res.write('<button type="submit"><a href="/process/product">상품 페이지로 이동하기</a></button>');
	    }
	} catch(err) {
		console.dir(err.stack);
	}	
		
});

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
    console.log('Express server listening on port 3000(3204 김세린)');
})