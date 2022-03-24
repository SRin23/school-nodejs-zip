var http = require("http");

var server = http.createServer();

var host = '10.96.123.47';  //IP주소
var port = 3000;

// server.listen(port, function(){
//     console.log('웹 서버가 시작되었습니다. : %d', port);
// })

//50000은 한꺼번에 접속할 수 있는 Client의 수를 말한다.
server.listen(port, host, '50000', function(){
    console.log('웹서버가 시작되었습니다->' + host + ' : ' + port);
})