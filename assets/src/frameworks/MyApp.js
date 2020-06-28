
let ViewManager = require("./Manager/ViewManager");
let LoadUtils = require("./Uitls/LoadUtils");
let TypeUtils = require("./Uitls/TypeUtils");



cc.Class({
    // extends: cc.Component,

    properties: {
        name:"MyApp",
    },

    ctor:function(){
        this.initUtils();
        this.initManager();
        this.initUtilsLater();
    },

    initManager:function(){
        window.ViewManager = new ViewManager();
    },

    initUtils:function(){
        window.TypeUtils = TypeUtils;//用于类型判断
        
    },

    initUtilsLater:function(){
        window.LoadUtils = new LoadUtils();
    },
    

});


