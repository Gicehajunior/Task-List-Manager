const EvenEmmiter = require("events");

// create a class that extends EventEmmiter class
class Server extends EvenEmmiter{
    constructor(client){
        super()
        process.nextTick(()=>{
            this.emit('response', "Type a command (help to list commands)");
        })
        
        // to listen from the client server
        client.on('command', (command) => {
            // console.log(`Command: ${command}`)
            // commands, add(), help(), ls(), delete()
            switch (command) {
                case 'help':
                    
                case 'add':
                    
                case 'ls':
                    
                case 'delete':
                    this[command]();
                    break;
                default:
                    this.emit('Response', 'Unknown Command Supplied!😢 ...');
            }
        });
    }
    help(){
        this.emit('response', 'help ...');
    }
    add(){
        this.emit('response', 'add ...');
    }
    ls(){
        this.emit('response', 'ls ...');
    }
    delete(){
        this.emit('response', 'delete ...');
    }
}

// then export the class module
module.exports = (client) => new Server(client);



