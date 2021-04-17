
const https = require('https');
const fs = require('fs');
const _externalUrl ='https://jsonplaceholder.typicode.com/posts';

let data = '';

const ExternalApiUSingHttp = (callback)=>{
    https.get(_externalUrl, (resp)=>{
        //A CHUNK OF DATA HAVE BEEN RECEIVED
        resp.on('data', (chunk)=>{
            data+=chunk;
        })

        //this data was handled asynchronously...
        resp.on('end', ()=>{
            fs.writeFile("./result/posts.json", data, (err) => {
                if (err) throw err;
            }
        })
    })
}
