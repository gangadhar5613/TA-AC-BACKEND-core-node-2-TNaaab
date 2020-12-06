const { rmdirSync } = require('fs');
let http =require('http');


let server = http.createServer(handleRequest);


function handleRequest(req,res){
    let store = '';

    req.on('data',(chunk) => {
        store = store + chunk;
    });

    req.on('end',() =>{
        res.write(store);
        console.log(store);
    })
}



server.listen(3456, () => {
    console.log('connected');
})