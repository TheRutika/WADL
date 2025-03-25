const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname,'public');

const server = http.createServer((req,res)=>
{
    let filepath = path.join(PUBLIC_DIR, req.url === '/' ? 'index.html' : req.url);

    fs.readFile(filepath,(err,data)=>
    {
        if(err)
        {
            res.writeHead(404,{"content-type" : 'text/plain'});
            res.end('404 not found');
        }
        else
        {
            res.writeHead(200,{"content-type" : 'text/html'});
            res.end(data);
        }
    });
});


server.listen(PORT,()=>
{
    console.log(`server running on http://localhost:${PORT}`);
})