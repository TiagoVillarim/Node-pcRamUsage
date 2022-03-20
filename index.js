const http = require("http");
const host = "http://localhost";
const port = 3000;
const stats = require("./pcRamUsage")



const server = http.createServer((req, res) => {
    let url = req.url;

    if(url == "/stats"){
        res.end(JSON.stringify(stats, null, 2));
    } else {
        res.end("<h1>seja bem vindo</h1>")
    }
});

server.listen(3000);
console.log(`server is running at ${host}:${port}`);