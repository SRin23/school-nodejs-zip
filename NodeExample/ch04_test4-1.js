var Calc = require('./calc33');

//객체 생성
var calc = new Calc();
calc.emit('start'); 
calc.emit('subtitle', '계산기');
calc.emit('cal', 'a', 'b')

console.log(Calc.title + '에 이벤트 전달함');

var a = 10;
var b = 5;

console.log("a + b = " + Calc.prototype.add(a, b));
console.log("a - b = " + Calc.prototype.substract(a, b));
console.log("a * b = " + Calc.prototype.multiply(a, b));
console.log("a / b = " + Calc.prototype.devide(a, b));
