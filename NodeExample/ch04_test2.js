//event 사용하기 1 - exit

//event 생성
process.on('exit', function(){
    console.log('exit 이벤트 발생함');
})

//5초후 실행
setTimeout(function(){
    console.log('시스템 종료 시도함');
    process.exit(); //exit 이벤트 실행
}, 5000)

//container에 들어가있기에 setTimeout보다 먼저 실행
console.log("5초 후에 실행될 것임");