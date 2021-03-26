
var url ='https://www.google.com/';
const EventEmitter = require('events');
//const emitter = new EventEmitter();

// console.log(__filename);
// console.log(__dirname);

class Logger extends EventEmitter {
    log(message) {
        console.log(message);
    
        this.emit('messageLogged', {id: 1, url: 'http://'});
    }
}



module.exports = Logger;
// module.exports.url = url;
