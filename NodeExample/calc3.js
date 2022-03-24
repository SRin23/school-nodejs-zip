//외부모듈 가져오기
var util = require('util');
var EventEmitter = require('events').EventEmitter;

//Calc에 'stop' 이벤트 생성
var Calc = function(){
    //var self = this;
    this.on('stop', function(){
        console.log('Calc에 stop event가 전달됨');
    });
};

//Calc가 EventEmitter를 상속받음
util.inherits(Calc, EventEmitter);
Calc.prototype.add = function(a, b){
    return a+b;
}

//모듈 내보내기
module.exports = Calc;
module.exports.title = 'calculator';