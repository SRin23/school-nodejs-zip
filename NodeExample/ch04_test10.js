//버퍼 사용하기

var output = '안녕 1!';
var buffer1 = new Buffer.alloc(10); //버퍼의 크기를 10만큼 잡음
var len = buffer1.write(output, 'utf8');    //buffer1에 output내용을 utf8로 작성
console.log('첫 번째 버퍼의 문자열 : %s', buffer1.toString());  //버퍼 안의 내용을 문자열로 출력

//Test
var buffer2 = new Buffer.from('안녕 2!', 'utf8');   //'안녕2!'라는 문자를 utf8로 buffer2에 작성
console.log('두 번째 버퍼의 문자열 : %s', buffer2.toString());  //버퍼 안의 내용을 문자열로 출력

console.log('버퍼 객체의 타입 : %s', Buffer.isBuffer(buffer1)); //buffer1객체의 타입이 버퍼인지 확인

var byteLen = Buffer.byteLength(output);    //output의 byte길이 저장
var str1 = buffer1.toString('utf8', 0, byteLen);    //buffer1의 값을 utf8로 0~byteLen까지 str1에 저장
var str2 = buffer2.toString('utf8');    //buffer2의 값을 utf8문자열로 str2에 저장

//console.log("str1 : %s", str1);
//console.log("str2 : %s", str2);

buffer1.copy(buffer2, 0, 0, len);   //buffer2에 0인덱스부터 0~len크기만큼 buffer1복사
console.log('두 번째 버퍼에 복사한 후의 문자열 : %s', buffer2.toString('utf8'));