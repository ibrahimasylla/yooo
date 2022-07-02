const hhtlp = require('http');
const { json } = require('stream/consumers');

const server = hhtlp.createServer((req,res)=>{
  if(req.url==='/'){
    res.write("hello");
    res.end();
  }

  if(req.url==='/api/courses'){

  res.write(JSON.stringify([1,2,3]));
  res.end();

  }
});

server.on('connection',(socket)=>{

console.log("new connection")
})
server.listen(2000)
console.log("connected")