// const http = require('http');
// const server = http.createServer((req,res)=>{
//     res.end('Hello from Node.js server!');
// });
// server.listen(3000, ()=>{
//     console.log('server is running at http://localhost:3000/')
// });

// const os =  require('os');
// console.log('os Platform:',os.platform());
// const moment = require('moment');
// console.log(moment().format('MMMM Do YYYY,h:mm:ss a'))

const fs = require("fs");
// fs.writeFileSync("index.html","<p>this is para</p>")
// console.log(fs.readFileSync("index.html","utf-8"))
// fs.appendFileSync("index.html","this is append text")
fs.unlinkSync("index.html")