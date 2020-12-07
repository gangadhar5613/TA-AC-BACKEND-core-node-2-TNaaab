let http = require('http');
let fs = require('fs');
let qs = require('querystring');

//absolute path to server.js

console.log('./server.js');

//absolute path of app.js

console.log('./app.js');

//relative path of index.html;
console.log(__dirname + '/index.html');



//create server

let server = http.createServer(handleRequest);

function reqHandler(req, res) {
    const conType = req.headers["content-type"];


      let store = "";
  
      req.on("data", (chunk) => {
          store =  store + chunk;
      });
  
      req.on("end", () => {
          if (req.method == "POST" && conType == "application/json") {
              res.writeHead(201, { "Content-Type": conType });
              res.end(store);
          } else {
              res.end(store);
          }
      });
  }

server.listen(3000,() => {
 console.log('connected server')
})

