// const https = require("https");
// const _externalUrl ='https://jsonplaceholder.typicode.com/posts';

// const externalApiWithHttp = (callback)=>{
//     https.get(_externalUrl, (resp)=>{
//         let data = "";
//         //A Chunk of data is received
//         resp.on('data', (chunk)=>{
//             data+=chunk;
//         })
//         resp.on('end', ()=>{
//             return callback(data)
//         })
//     })
//     .on('error', (err)=>{
//         console.log(`Error Message: ${err.message}`)
//     })
// }
// module.exports.callApi = externalApiWithHttp;
const https = require('https');
const _externalUrl ='https://jsonplaceholder.typicode.com/posts';

const ExternalApiUSingHttp = (callback)=>{
    https.get(_externalUrl, (resp)=>{
        let data = '';

        //A CHUNK OF DATA HAVE BEEN RECEIVED
        resp.on('data', (chunk)=>{
            data+=chunk;
        })
        resp.on('end', ()=>{
            return callback(data)
        })
    }).on('error', (err)=>{
        console.log(`error message: ${err.message}`)
    })
}
module.exports.callApi = ExternalApiUSingHttp;