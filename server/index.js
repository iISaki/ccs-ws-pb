// var PBHelper = require('../assets/Script/common/pbhelper');
// var pbHelper = new PBHelper();
// var PB = pbHelper.loadFile('../assets/resources/proto', 'grace.proto.msg');
let protoAll = require("../server/proto/proto")
let PB = protoAll.grace.proto.msg //这里是proto文件的包名

const WebSocket = require('ws');
const ws = new WebSocket.Server({ port: 3000 }); 
let clients = [];

ws.on('connection', function(client){
    clients.push(client);
    client.on('message',function(data){
        let pbMessage = PB.PBMessage.decode(data);
        let msgData = null;
        if (pbMessage.actionCode === PB.ActionCode.SendMessage) {
            pbMessage.actionCode = PB.ActionCode.RecvMessage;    
            msgData = PB.ChatMsg.decode(pbMessage.data)
        }else if (pbMessage.actionCode === PB.ActionCode.EnterRoot) {
            pbMessage.actionCode = PB.ActionCode.EnterRoot;
            msgData = PB.ChatMsg.decode(pbMessage.data)
        }
        let sendData = PB.PBMessage.encode(pbMessage).finish();
        clients.forEach(function(c, index) {
            if (c === client) {
                c.send(data);
            } else {
                c.send(sendData);
            }
        });    
    });

    client.on('close', () => {
        let index = clients.indexOf(client);
        if (index !== -1) {
            clients.splice(index, 1);
            console.log('clinet closed');
        }
    });
});