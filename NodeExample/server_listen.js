var http = require('http');

//req = 요청객체
//res = 응답객체
http.createServer(function(req, res){
    //브라우저로 응답하는 객체에 메소드 설정
    //content/type이 html임을 나타냄
    res.writeHead(200, {
        'Content-Type' : 'text/html'
    });

    //html의 내용을 작성
    res.write('<h1>Hello World!</h1>');

    //write - end
    res.end();
    
    //8080포트로 내용을 보냄
    //참고 : Node에서 사용하는 포트는 3000이 기본이다.
}).listen(8080, function(){
    console.log('서버가 시작됩니다.');
})

//ctrl+alt+del -> 작업관리자