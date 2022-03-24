var Calc = require('./calc3');

//객체 생성
var calc = new Calc();
calc.emit('stop');  //stop이라는 EVENT 찾음

console.log(Calc.title + '에 stop 이벤트 전달함');