//https://www.w3schools.com/nodejs/ref_buffer.asp
//buffer 참조 사이트 

var fs = require('fs');

//output.txt파일을 열고, 읽음
fs.open('./output.txt', 'r', function(err, fd){
    if(err) throw err;

    //Buffer - 문자열 저장소?
    //Buffer크기를 10으로 정함
    var buf = new Buffer.alloc(10);

    //buf가 버퍼가 맞는지 확인(맞으면 true, 아니면 false)
    console.log('버퍼 타입 : ', Buffer.isBuffer(buf));

    //output을 buf의 길이만큼 읽음
    fs.read(fd, buf, 0, buf.length, null, function(err, bytesRead, buffer){
        if(err) throw err;

        //16진수로 들어가있는 buffer를 utf8 문자열로 변환
        var inStr = buffer.toString('utf8', 0, bytesRead);

        //파일에서 읽은 데이터 출력
        console.log('파일에서 읽은 데이터 : %s', inStr);

        //출력
        console.log(err, bytesRead, buffer);

        //파일 닫음
        fs.close(fd, function(){
            console.log('output.txt파일을 열고 읽기 완료.');
        });
    });
});