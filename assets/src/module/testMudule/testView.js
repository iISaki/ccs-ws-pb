
let Socket = require('socket')
let protoAll = require("proto")
let PB = protoAll.grace.proto.msg //这里是proto文件的包名

cc.Class({


    extends: ViewBase,

    onCreate(){
        ViewBase.prototype.onCreate.call(this)
        this.initUI()
    },


    initUI(){
        this.ComListViewP = this.getC("ComListViewP")
        this.initSocket();
    },

    initSocket() {
        this.socket = Socket('ws://localhost:3000');

        this.socket.on(PB.ActionCode.EnterRoot, (protoData) => {
            let chatMsg = PB.ChatMsg.decode(protoData);
            // this._onPlayEnter(chatMsg);    
        });

        this.socket.on(PB.ActionCode.RecvMessage, (protoData) => {
            let chatMsg = PB.ChatMsg.decode(protoData);
            // this._onRecvMessage(chatMsg);   
        });
        setTimeout(() => {
            this.sendMsg()
        }, 1000)
    },

    sendMsg() {
        var chatMsg = PB.ChatMsg.create();
        chatMsg.playerInfo = PB.Player.create();
        chatMsg.playerInfo.name = "playerName";
        chatMsg.message = "editBox.string";
        let proto = PB.ChatMsg.encode(chatMsg).finish()
        this.socket.send(PB.ActionCode.SendMessage, proto, (protoData) => {
            cc.log('发送成功');
            let msg = PB.ChatMsg.decode(protoData);
        });
    },






});









