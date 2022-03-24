var fs = require('fs');

//파일을 열고, 쓸것임을 명시
//fd = filesystem의 별칭?(어디에 쓸것인지 표시)
fs.open('./output.txt', 'w', function(err, fd){
    //오류 처리
    if(err) throw err;

    var buf = new Buffer.from('안녕!\n');
    //var buf = new Buffer('안녕!\n');  -> 버전 업그레이드로 인해 위와 같이 변경됨

    //buf의 0부터 buf길이까지
    fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer){
        //오류 처리
        if(err) throw err;

        //error가 없으므로 null이뜨고, 
        //null 8 <Buffer ec 95 88 eb 85 95 21 0a>
        //버퍼의 내용을 보여줌
        console.log(err, written, buffer);

        fs.close(fd, function(){
            console.log('파일 열고 데이터 쓰고 파일 닫기 완료.');
        });
    });
});