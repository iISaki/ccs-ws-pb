



let BaseComponent = require("BaseComponent")


window.ViewBase = cc.Class({
    extends: BaseComponent,
    properties: {
        // _eventMap:[],
    },



    /*
        释放纹理
    */
    releaseTextures:function(textureUrlArray){
        PlistTextureManager.deloadResource(textureUrlArray);
    },

    /*
        判断纹理是否已经加载
    */
    isTextureLoad:function(url){
        return PlistTextureManager.isResourceLoad(url)
    },

    _initBgm:function(){
    },

    //获取外部传进来的参数
    _setViewName: function (name) {
        this.viewName = name;
    },

    //获取外部传进来的参数
    getArgs:function(...args){
        return this._m_args;
    },

    //========================================= 下面是creator的原生方法

    ctor:function() {
    },


    onLoad:function(){
        BaseComponent.prototype.onLoad.call(this);
        this.onAdapt();
        this._initBgm();
        if(this._m_args){
            this.onCreate(...this._m_args);//这里的... 表示展开数组的意思,类似 lua的unpack
        }else{
            this.onCreate()
        }
    },

    start:function(){
        BaseComponent.prototype.start.call(this);
        this.onStart();
    },

    
    onDestroy:function(){
        BaseComponent.prototype.onDestroy.call(this);
        this.emit(AppEvent.GameRemoveView,{
            name:this.viewName
        })
    },
    
    onEnable:function(){
        BaseComponent.prototype.onEnable.call(this);
    },


    onDisable:function(){
        BaseComponent.prototype.onDisable.call(this);
    },


    //========================================= 下面是我们自己加的生命周期

    //为了实现传参
    _onInitArgs:function(...args){
        this._m_args = args;
    },

    setArgs: function (args) {
        
    },

    onCreate:function(){

        // console.log("viewbase onCreate " + this.name)
    },

    /*
    * 适配通用方法
    * */
    onAdapt:function(){

    },


    /*
    * */
    onStart:function(){

    },



    onExit:function(){
        // console.log("viewbase onExit" + this.name)
    },
});