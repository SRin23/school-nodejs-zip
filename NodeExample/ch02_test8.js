var path = require('path');

//디렉토리 이름 합치기
var directories = ["users", "sunny", "docs"];
var docsDirectory = directories.join(path.sep); //directories에 있는 값들을 연결하여 하나의 파일 경로로 만듦
console.log('문서 디렉토리 : %s', docsDirectory);

//디레토리 이름과 파일명 합치기
var curPath = path.join('/Users/sunny', 'notepad.exe');
console.log('파일 패스 : %s', curPath);

//패스에서 디렉토리, 파일명, 확장자 구분하기
var filename = "C:\\Users\\sunny\\notepad.exe";
var dirname = path.dirname(filename);   //디렉토리
var basename = path.basename(filename); //파일 이름(확장자 포함)
var extname = path.extname(filename);   //확장자
console.log("디렉토리 : %s, 파일 이름 : %s, 확장자 : %s", dirname, basename, extname);