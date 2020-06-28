






var MyApp = require("MyApp")




cc.Class({
    extends: ViewBase,

    properties: {
        sceneLayer: {
            default: null,
            type: cc.Node
        },
        viewLayerBot: {
            default: null,
            type: cc.Node
        },
        viewLayerCen: {
            default: null,
            type: cc.Node
        },
        viewLayerTop: {
            default: null,
            type: cc.Node
        },
        awardLayer: {
            default: null,
            type: cc.Node
        },
        alertLayer: {
            default: null,
            type: cc.Node
        },
        tipsLayer: {
            default: null,
            type: cc.Node
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad :function() {
        this.layouts = [];
        this.layouts["scene"] = this.sceneLayer;
        this.layouts["bot"] = this.viewLayerBot;
        this.layouts["cen"] = this.viewLayerCen;
        this.layouts["top"] = this.viewLayerTop;
        this.layouts["award"] = this.awardLayer;
        this.layouts["alert"] = this.alertLayer;
        this.layouts["tips"] = this.tipsLayer;

    },



    start :function() {
        let myApp = new MyApp();
        ViewManager.initScene(this.layouts);
        // ViewManager.showView("TOWER_FLASH_VIEW");
        
        ViewManager.showView("TEST_VIEW");
    },


    getLayouts:function() {
        return this.nodes
    },

    update :function(dt) {
        // TimeMgr.update(dt)
    },

    
    getLayouts:function() {


    },

});
