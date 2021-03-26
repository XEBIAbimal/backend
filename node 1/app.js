// function sayHello(name) {
//     console.log('Hello' + name);
// }
// sayHello('Bimal');
// console.log(window);

// var message = '';
// console.log(global.message);

// const logger = require('./logger');
// console.log('message');

// const path = require('path');

// var pathObj = path.parse(__filename);
// console.log(pathObj);

// const os = require('os');
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

// fs.readdir('$', function(err, files) {
//     if(err) console.log('error', err);
//     else console.log('result', files);
// })

// const EventEmitter = require('events');

// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('messageLogged', (arg) =>{
//     console.log('Listener called', arg);
// })


// logger.log('message');

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write(JSON.stringify([1, 2, 3, 4, 5]));
        res.end();
    }
});

// server.on('connection', (socket) => {
//     console.log('new connection... ');
// })
server.listen(3000);

console.log('Listening to port 3000... ')