//url모듈의 주요 메소드 실습

//url 모듈 연결
var url = require('url');

//문자열 주소를 url객체로 변환
var curURL = url.parse("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=popcorn");

//url객체를 문자열 주소로 변환
var curStr = url.format(curURL);

console.dir(curURL);
console.log('주소 문자열 : %s', curStr);

//querystring 모듈 연결
var querystring = require('querystring');

//요청 파라미터 문자열 파싱 -> queryString객체 생성
var param = querystring.parse(curURL.query);

//queryString형 param객체 속성 출력
console.log(param);

//param객체 중 query속성 출력
console.log('요청 파라미터 중 query의 값 : %s', param.query);
//querystring객체를 문자열로 변환
console.log('원본 요청 파라미터 : %s', querystring.stringify(param));

//Q> 요청 파라미터 : where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=popcorn