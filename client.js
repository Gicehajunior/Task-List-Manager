const { EventEmitter } = require("events");
const EvenEmmiter = require("events");
const readline = require('readline');

// prepare for an input from the client(user)
const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// instantiate an event emitter object
const client = new EventEmitter();

// import server object 
const server = require('./server')(client);

// receive the response from the server 
server.on('response', (resp) => {
    process.stdout.write('\u001B[2J\u001B[0;0f');
    process.stdout.write(resp);
    process.stdout.write('\n\>');
});

// sending the input from the client(user) to the server
readlineInterface.on('line', (input) => {
    client.emit('command', input);
});

