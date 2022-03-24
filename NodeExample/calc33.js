//외부모듈 가져오기
var util = require('util');
var EventEmitter = require('events').EventEmitter;

//Calc에 'stop' 이벤트 생성
var Calc = function(){
    //var self = this;
    this.on('start', function(){
        console.log('Calc 실행');
    });
    this.on('subtitle', function(title){
        console.log("계산기 이벤트 발생함 : %s", title);
    })
    this.on('cal', function(a, b){
        console.log("계산기 이벤트 발생함 : %s, %s", a, b)
    })
};

//Calc가 EventEmitter를 상속받음
util.inherits(Calc, EventEmitter);

Calc.prototype.add = function(a, b){
    return a+b;
}
Calc.prototype.substract = function(a,b){
    return a-b;
}
Calc.prototype.multiply = function(a, b){
    return a*b;
}
Calc.prototype.devide = function(a, b){
    return a/b;
}

//모듈 내보내기
module.exports = Calc;
module.exports.title = 'calculator';