//내부 모듈 처리
var fs = require('fs');
var http = require('http');

//웹서버 객체를 생성합니다ㅣ.
var server = http.createServer();

//웹서버를 시작하여 3000번 포트에서 대기하도록 합니다.
var port = 3000;

server.listen(port, function(){
    console.log('웹서버가 시작되었습니다 : %d'. port);
});

//클라이언트 연결 이벤트 처리
server.on('connection', function(socket){
    console.log('클라이언트가 접속했습니다. : %s, %d', socket.remoteAddress, socket.remotePort);
});

//클라이언트 요청 이벤트 처리
server.on('request', function(req, res){
    console.log('클라이언트 요청이 들어왔습니다.');

    //파일이 현재 폴더에 있어야한다.
    var filename = 'house.png';
    //파일을 읽음
    fs.readFile(filename, function(err, data){
        //이미지 파일을 보냄
        res.writeHead(200, {"Content-Type" : "image/png"});
        res.write(data);
        res.end();
    });
});

//서버 종료 이벤트 처리
server.on('close', function(){
    console.log('서버가 종료됩니다.');
})