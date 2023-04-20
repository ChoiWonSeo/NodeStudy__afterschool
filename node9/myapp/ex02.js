/*
app.use('/test', handler)
:/test으로 시작하는 모든 요청에 응답, 모든 method에 응답

app.get('/test')
:'test' 정확한 URL과 GET method에만 응답*/

// 모듈 추출
var express = require('express');

//서버 생성
var app = express();

// request 이벤트 리스너 설정
app.use(function(request, response){
  response.writeHead(200, { 'Content-Type': 'text/html'});
  response.end('<h1>Hello express</h1>');
});

//서버를 실행합니다
app.listen(3000, function(){
  console.log("Server Running at http://127.0.0.1:3000");
});