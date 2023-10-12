const http=reqire('http');

const server = http.createServer((req, res)=>{

});

server.listen(3500, (err) => {
    if(!err) {
        console.error('서버 안돌아감')
    }else{
        console.log('3500 포트에 들어감 http://localhost:3500'); //꿀팁 이거 만들어두면 콘솔에서 그냥 클릭하면 된다고함!
    }
})
