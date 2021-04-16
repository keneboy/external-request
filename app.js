// const http = require('http');
// const externalApi = require('./external');
// const statusCode = 200;
// const fs = require('fs');
// const port = process.env.PORT || 1000

// const server = http.createServer((req,res)=>{
//     if(req.url === "/request"){
//         //consuming the callback....
//         externalApi.callApi((response)=>{
//             res.writeHead(statusCode, {"Content-Type":"application/json"});
//             res.write(response);
//             res.end();
//             fs.writeFile('result/post.json', response);
//           })
//     } 
// })

// server.listen(port)
// console.log(`connected at port ${port}`)
const http = require('http');
const statusCode = 200;
const port = process.env.PORT || 1000;
// const apiCallFromRequest = require('./request');
const apiCallFromHttp = require('./external');
const fs = require('fs')
http.createServer((req,res)=>{
    if(req.url === '/request'){
        apiCallFromHttp.callApi((response)=>{
            res.writeHead(statusCode, {"Content-Type":"application/json"});
            res.write(response);
            res.end()
            fs.writeFile('result/post.json', response, ()=>{
                console.log(`file created...`)
            })
        })
       
    }
    // if(req.url === '/request'){
    //     apiCallFromRequest.callApi((response)=>{
    //         res.writeHead(statusCode, {"Content-Type":"application/json"});
    //         res.write(response);
    //         res.end()
    //     })
    // }
})
.listen(port);
console.log(`listening at port ${port}`)
