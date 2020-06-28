let protoAll = require("proto")
let PB = protoAll.grace.proto.msg //这里是proto文件的包名

function Socket(host) {
    this.sequence = 0;
    this.queue = {};
    this.ws =  new WebSocket(host);
    this.ws.binaryType = "arraybuffer";
    this.ws.onmessage = this.message.bind(this);
    this.ws.onopen = this.connected.bind(this);
    // this.ws.on('connected', this.connected.bind(this));
    // this.ws.on('message', this.message.bind(this));
    this.notification = new cc.EventTarget();
}


Socket.prototype = {
    connected() {
        cc.log('connected');    
    },

    message(event) {
        // let pbMessage = PB.PBMessage.decode(event.data);
        var buf = new Uint8Array(event.data);
        let pbMessage = PB.PBMessage.decode(buf)
        let callback = this.queue[pbMessage.sequence];

        delete this.queue[pbMessage.sequence];
        try{
            if (callback) {
                callback(pbMessage.data);
            }
            this.notification.emit(pbMessage.actionCode.toString(), pbMessage.data);
        }catch(e) {

        }
        
    },

    on(actionCode, cb) {
        this.notification.on(actionCode.toString(), (event) => {
            if (cb) {
                cb(event.detail);
            }
        })    
    },

    send(actionCode, proto, callback) {
        let base = PB.PBMessage.create()
        base.actionCode = actionCode;
        base.sequence = this.sequence;
        base.data = proto;
        var buf = PB.PBMessage.encode(base).finish()
        this.ws.send(buf);
        this.queue[this.sequence++] = callback;
    },

}

let socket = null;

module.exports = function(host) {
    if (!socket) {
        socket = new Socket(host);
    }
    return socket;
}