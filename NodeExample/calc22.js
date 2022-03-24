//객체 할당
var calc = {};
calc.add = function(a, b){
    return a+b;
}

calc.sub = function(a, b){
    return a-b;
}

calc.multiply = function(a, b){
    return a*b;
}

calc.devide = function(a, b){
    return a/b;
}
module.exports = calc;