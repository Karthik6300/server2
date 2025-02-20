const http =require("http");
const server = http.createServer((req,res)=>{
    res.write("Hello World");
    res.end("Response provided");

});

server.listen("3101",()=>{
    console.log("server running")
})