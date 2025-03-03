const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end("Welcome to our page")
    }
    else if(req.url == '/about'){
        res.end("short history")
    }
    else{
        res.end(`<h1>Not found </h1>`)
    }
    
})

server.listen(3000,()=>{
    console.log("Listenng")
})