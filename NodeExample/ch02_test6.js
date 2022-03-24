var nconf = require('nconf');   //철자 주의!!

nconf.env();
console.log('OS 환경 변수의 값 : %s', nconf.get('OS'));