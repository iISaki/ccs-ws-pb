// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html


cc.Class({
    extends: ViewBase,




    /*
        data:{
            str:""

        }
    */
    pushData:function(data){
        if (this.m_strData.length >= 4) {
            return 
        }
        this.m_strData.push(data)
    },



    /*
        data:{
            str:""

        }
    */
    onCreate:function(data){
        this.initData(data)
        this.initUI()
    },


    initData:function(data){
        this.m_strData = []
        this.m_strData.push(data)
    },


    initUI:function(){

        this.nodeFly = this.getC("nodeFly")
        this.sprBg = this.getC("sprBg")
        this.labContent = this.getC("labContent")
        this.nodeFly.active = false;

        this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(0.5),cc.callFunc(function(){
            this.fly()
        }.bind(this)))))
    },


    syncSize:function(sprBg,lab){
        sprBg.width = lab.width + 40
    },

    fly:function(){
        if(this.m_strData.length <= 0){
            // console.log("fly return")
            return
        }

        let node = this.getNode()
        node.y = 0
        node.active = true;
        node.opacity = 0;
        let labContent = this.seekC(node,"labContent")
        let sprBg = this.seekC(node,"sprBg")
        labContent.getComponent(cc.Label).string = this.m_strData[0].str
        let showTime = this.m_strData[0].showTime || 0.5;
        node.parent = this.node

        let moveAc = cc.spawn(cc.moveBy(0.5,cc.v2(0,100)),cc.fadeOut(0.5))

        node.runAction(cc.sequence(cc.callFunc(function(){
            node.opacity = 255;
            this.syncSize(sprBg,labContent)
        }.bind(this)),cc.moveBy(showTime, cc.v2(0,100)),moveAc,cc.callFunc(function () {
            // node.destroy()
            this.save(node)
        }.bind(this))))

        ArrayUtils.remove(this.m_strData,0)
    },

    save:function(node){
        this.pushCache("nodeFly",node)
    },

    getNode:function(){
        let node = this.popCache("nodeFly")
        if(node){
            return node
        }else{
            return cc.instantiate(this.nodeFly)
        }
    },
});
