const colyseus = require('colyseus');

class gameRoom extends colyseus.Room {
    onCreate(options) { 
        console.log('onCreate')
    }

    onAuth(client, options, request) {
        console.log('onAuth')
        return true;
    }

    onMessage(client, message) {
        console.log('onMessage')
    }

    onLeave(client, consented) {
        console.log('onLeave')
    }

    onDispose() {
        console.log('onDispose')
    }
}

module.exports = gameRoom;