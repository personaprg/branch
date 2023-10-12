const http = require('http');
const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": "text/plain"}); //html이 아니고 텍스트만 던져준다고 함!('plain'이 설명한다 라는 의미)
    //이렇게 적으면 텍스트 보내겠다는 의미라고 함
    res.write("향마루"); //쓴 텍스트
    res.end();
    //서버를 요청할때마다 "향마루가 출력 될 것"
});

server.listen(3500);
