const http = require('http');

// 1. 보통 생성자 함수는 파스칼 케이스 방식, 첫 글자를 대문자로 작성하는 편이다.
// * 최근의 VSCODE 에디터는 생성자 함수와 파라미터로 포트 번호를 받는다.
class SimpleServer{
    //2. 인스턴스를 받을 때 생성자 함수의 파라미터롤 포트 번호를 받는다.
    //* '인자를 받는다' 라고 표현 하기도 한다.
    constructor(port){ 
        this.port = port;
    }
    //3. 만들어질 인스턴스 (객체)에 메서드로 사용 될 start()함수 이다.
    //* 리터럴로 작성해왔던 creatServer()가 작성 되어있는 것을 확인 할 수 있다.
    start(){
        const server = http.createServer((req,res) => {
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end('생성자 함수로 가동 된 서버입니다.');
    });
    //4. this.port는 생성자 함수에서 받은 파라미터 값이다.
    //* 'port' 정보는, 추후, 생성 될 때 결정되기 때문에 인자를 전달 받는 형태이다.
    server.listen(this.port,()=>{
        console.log(`http://loacalhost:${this.port}`);
        });
    }
}

// SimpleServer 인스턴스 생성 및 시작
const simpleApp = new SimpleServer(3000);
simpleApp.start();
const portRange= {
    min : 3001,
    max : 3005,
}

// 3001,3002,3003,3004,3005 port가 모두 열렸다.
// 각각의 역할을 하는 포트를 만들어서 사용 할 수 있다.

for(let i = portRange.min; i <portRange.max; i++){
    const app = new SimpleServer(i);
    app.start();
}