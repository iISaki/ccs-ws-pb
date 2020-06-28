



let BaseComponent = require("BaseComponent")

// onLoad
// start
// update
// lateUpdate
// onDestroy
// onEnable
// onDisable
/** 
 * 笔记
 *  
        this._super();就是调用跟自己这个方法同名的父类函数
 */


 /** 
  * onEnter
  * onExit
  * onExitClean
 */

window.ViewBase = cc.Class({
    extends: BaseComponent,
    properties: {
        // _eventMap:[],
    },



    //========================================= 管理加载相关  突然觉得写在基类的方法就应该前面加个横线,便于区分

    // _loadTexture:function(textureUrlArray,callback,finishCallback){
    //     let self = this;
    //     let saveCallback = function(url,atlas){
    //         if(self.isValid){
    //             self.m_spriteFrameUrls.push(url);
    //             if(callback){
    //                 callback(url,atlas)
    //             }
    //         }
    //     };

    //     PlistTextureManager.loadResource(textureUrlArray,saveCallback,finishCallback)
    // },


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



    // _loadJson:function(jsonArray,callback,finishCallback){
    //     let self = this;
    //     let saveCallback = function(url,json,index){
    //         self.m_jsonUrls.push(url);
    //         callback(url,json,index)
    //     };
    //     JsonManager.loadResource(jsonArray,saveCallback,finishCallback)
    // },
    //========================================= 组件方便的方法
    //设置我的组件,
    // setCom:function(name){
    //     this.m_defultComponent = this.node.getComponent(name)
    // },
    // getCom:function(){
    //     return this.m_defultComponent;
    // },

    // //========================================= 通用缓存池
    // tryInitCache:function(name){
    //     if(!this.m_commonCache[name]){
    //         // this.m_commonCache[name] = [];
    //         this.m_commonCache[name] = new cc.NodePool(name);
    //     }
    // },
    // pushCache:function(name,node){
    //     this.tryInitCache(name);
    //     node.active = false;
    //     // this.m_commonCache[name].push(node);
    //     this.m_commonCache[name].put(node);
    // },
    // /*
    // * createFunc:创建节点函数,自行addChild
    // * */
    // popCache:function(name){
    //     this.tryInitCache(name);
    //     // let node = this.m_commonCache[name].pop();
    //     let node = this.m_commonCache[name].get();
    //     if(node){
    //         node.active = true;
    //         return node;
    //     }else{
    //         return null;
    //     }
    // },

    _initBgm:function(){
        // let comAudioSource = this.node.getComponent(cc.AudioSource)
        // if(comAudioSource){
        //     AudioManager.playMusic(comAudioSource)
        // }
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
        // this.m_commonCache = {};//通用缓存池

        /**加载过的精灵帧连接都会保存在这里
         *
         * [url , url,]
         * */
        // this.m_spriteFrameUrls = [];
        // this.m_jsonUrls = [];

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