var http = require('http');

//웹서버 객체 생성
var server = http.createServer();

//웹서버를 시작하여 3000번 포트에서 대기
var port = 3000;
server.listen(port, function(){
    console.log('웹 서버가 시작되었습니다 : %d ', port);
});

//클라이언트 연결 이벤트 처리
//http://localhost:3000으로 접속할시, 아래 function 실행
server.on('connection', function(socket){
    console.log('클라이언트가 접속했습니다. : %s, %d', socket.remoteAddress, socket.remotePort);
});

//클라이언트 요청 이벤트 처리
server.on('request', function(req, res){
    console.log('클라이언트 요청이 들어왔습니다.');
    console.dir(req);   //req 객체의 내용 console창에 출력
});

//서버 종료 이벤트 처리
server.on('close', function(){
    console.log('서버가 종료됩니다.');
})