



/*
*
* 因为又有viewBase,又有BaseComponent
* 目前希望的是,BaseComponent有一些基本的方便的方法,其他深一点的方法,再说吧
*
*
* */


window.BaseComponent = cc.Class({
    extends: cc.Component,
    // properties: {
    //     _eventMap:[],
    // },



    //========================================= 声音管理加载相关

    /*public
        播放一个声音
    */
    playSound:function(url){
        // if(true){
        //     return
        // }
        let soundData = this._getSoundData(url)
        if(soundData && soundData.audio){
            AudioSoundManager.playClip(soundData.audio)
            soundData.status = "play"
        } else {
            this._loadSounds([url], function (url, audioClip) {
                let soundData = this._getSoundData(url)
                if (soundData.status === "stop") {
                    return;
                }
                let id = AudioSoundManager.playClip(audioClip, false)
                if(id){
                    soundData.audioId = id
                }
            }.bind(this))
        }
    },

    /*public
        暂停一个声音
    */
    pauseSoundByAudioId:function(audioId){
        cc.audioEngine.stop(audioId);
    },
    /*public
        暂停一个声音
    */
    stopSound:function(url){
        // if(true){
        //     return
        // }
        let soundData = this._getSoundData(url)
        if (soundData) {
            soundData.status = "stop"
            if (soundData.audioId) {
                cc.audioEngine.stop(soundData.audioId);
            }
        }
    },


    //private 获得声音数据
    _getSoundData:function(url){
        return this.m_soundUrls.find((data)=>data.url===url)
    },

    //private
    _loadSounds:function(urlArray,callback,finishCallback){
        let self = this;
        for (let i = 0; i < urlArray.length; i++) {
            if (!this._getSoundData(urlArray[i])) {
                this.m_soundUrls.push({
                    url: urlArray[i],
                    state:"loading",
                });
            }
        }

        let saveCallback = function(url,audio){
            if(!this.isValid){
                return
            }
            //todo 界面加载,关闭界面,精灵帧完成加载,然后回调,会调至精灵帧不能释放
            // this.m_soundUrls.push({
            //     url :url,
            //     audio:audio,
            // });
            let data = this._getSoundData(url);
            if (data) {
                // data.status = "loading_finish"
                data.audio = audio
            } else {
                this.m_soundUrls.push({
                    url: url,
                    audio:audio,
                    // status:"loading_finish",
                });
            }

            callback(url,audio)
        }.bind(this);

        AudioSoundManager.loadResource(urlArray,saveCallback,finishCallback)
    },
    //========================================= 大图加载相关

    _loadTexture:function(textureUrlArray,callback,finishCallback){
        let self = this;
        let saveCallback = function(url,atlas){
            if(self.isValid){
                self.m_spriteFrameUrls.push(url);
                if(callback){
                    callback(url,atlas)
                }
            }
        };

        PlistTextureManager.loadResource(textureUrlArray,saveCallback,finishCallback)
    },

    //如果是预加载的纹理,可以直接获取
    getSpriteFrameByShortUrl:function(atlasShortUrl,spriteUrl){
        return PlistTextureManager.getSpriteFrameByShortUrl(atlasShortUrl,spriteUrl)
    },

    //========================================= 单图纹理管理加载相关

    _loadSingleTexture:function(textureUrlArray,callback,finishCallback){
        let self = this;
        let saveCallback = function(url,frame){
            if(!this.isValid){
                return
            }
            //todo 界面加载,关闭界面,精灵帧完成加载,然后回调,会调至精灵帧不能释放
            this.m_SingleSpriteFrameUrls.push(url);
            callback(url,frame)
        }.bind(this);

        SingleTextureManager.loadResource(textureUrlArray,saveCallback,finishCallback)
    },
    
    _retainText:function(url){
        TextManager.retain(url)
    },
    //========================================= 下面是 Texture2D

    _loadTexture2D:function(textureUrlArray,callback,finishCallback){
        let self = this;
        let saveCallback = function(url,texture2D){
            if(!this.isValid){
                return
            }
            //todo 界面加载,关闭界面,精灵帧完成加载,然后回调,会调至精灵帧不能释放
            this.m_texture2DUrls.push(url);
            callback(url,texture2D)
        }.bind(this);

        Texture2DManager.loadResource(textureUrlArray,saveCallback,finishCallback)
    },

    _loadSingleTexture2D:function(textureUrl,finishCallback){
        let saveCallback = function(url,texture2D){
            if(!this.isValid){
                return
            }
            //todo 界面加载,关闭界面,精灵帧完成加载,然后回调,会调至精灵帧不能释放
            this.m_texture2DUrls.push(url);
            finishCallback(url,texture2D)
        }.bind(this);

        Texture2DManager.loadResource([textureUrl],saveCallback)
    },
    
    _retainTexture2D:function(url){
        Texture2DManager.retain(url)
    },

    //========================================= 下面是 Text 文本资源

    _loadText:function(urlArray,callback,finishCallback){
        let self = this;
        let saveCallback = function(url,text){
            if(!this.isValid){
                return
            }
            //todo 界面加载,关闭界面,精灵帧完成加载,然后回调,会调至精灵帧不能释放
            this.m_textUrls.push(url);
            callback(url,text)
        }.bind(this);

        TextManager.loadResource(urlArray,saveCallback,finishCallback)
    },

    _loadSingleText:function(_url,finishCallback){
        let saveCallback = function(url,file){
            if(!this.isValid){
                return
            }
            //todo 界面加载,关闭界面,精灵帧完成加载,然后回调,会调至精灵帧不能释放
            this.m_textUrls.push(url);
            finishCallback(url,file)
        }.bind(this);

        TextManager.loadResource([_url],saveCallback)
    },

    //========================================= 下面是 通用资源管理
    _loadAsset:function(urlArray,type,callback,finishCallback){
        let self = this;
        let saveCallback = function(url,asset){
            if(!this.isValid){
                return
            }
            //todo 界面加载,关闭界面,精灵帧完成加载,然后回调,会调至精灵帧不能释放
            this.m_commonAssetsUrls.push(url);
            callback(url,asset)
        }.bind(this);

        CommonAssetsManager.loadResource(urlArray,saveCallback,finishCallback,type)
    },
    _loadSingleAsset:function(_url,type,finishCallback){
        let saveCallback = function(url,asset){
            if(!this.isValid){
                return
            }
            //todo 界面加载,关闭界面,精灵帧完成加载,然后回调,会调至精灵帧不能释放
            this.m_commonAssetsUrls.push(url);
            finishCallback(url,asset)
        }.bind(this);

        CommonAssetsManager.loadResource([_url],saveCallback,null,type)
    },
    
    //========================================= 下面是 json


    // _loadJson:function(jsonArray,callback,finishCallback){
    //     logger.warn("弃用接口,现在会使用ConfigManager进行加载配置")
    //     let self = this;
    //     let saveCallback = function(url,json,index){
    //         self.m_jsonUrls.push(url);
    //         callback(url,json,index)
    //     };
    //     JsonManager.loadResource(jsonArray,saveCallback,finishCallback)
    // },

    //========================================= 下面是 节点相关
    getC:function(name){
        return this.seekC(this.node,name)
    },

    seekC:function(parent, name){
        if(!parent){
            return;
        }
    
        if(parent.name === name){
            return parent
        }
    
        let children = parent.children;
        for (let i = 0; i < children.length; ++i) {
            let node = this.seekC(children[i],name)
            if(node){
                return node
            }
        }
    },


    onClick:function(btn,func,isSound){
        let self = this;
        if(!btn){
            logger.error('btn == undefine');
            return
        }
        let onClickReal=function(self){
            // AudioManager.playDefaultEffect(btn);
            if (isSound !== false) {
                this.playSound("module/subgameRadishTower/miniGame/sound/tower_click")
            }
            func(btn)
        };
        let btnNode = null;
        if (btn instanceof cc.Button){
            btnNode = btn.node;
        }else if (btn instanceof cc.Node){
            btnNode = btn;
        }
        if (btnNode != null){
            btnNode.targetOff(this); //移除所有的事件
            // console.log(btnNode);
            // btn.node.on(cc.Node.EventType.TOUCH_END, onClickReal, this);
            btnNode.on("click", onClickReal, this);
        }
    },

    onLongClick: function (node, func, time = 1, isSwallow = false) {
        let startWPos = undefined;
        let callWithState = function (state) {
            if (TypeUtils.isFunction(func)) {
                if (!state || startWPos) {
                    func(state);
                }
            }
            startWPos = undefined;
        };
        node.on(cc.Node.EventType.TOUCH_START, (event) => {
            startWPos = event.getLocation();
            setTimeout(() => {
                callWithState(true);
            }, time * 1000)
        }, this);
        node.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            let worldPos = event.getLocation();
            let rectBox = node.getBoundingBoxToWorld();
            if (!rectBox.contains(worldPos)) {
                callWithState(false);
            }
        }, this);
        node.on(cc.Node.EventType.TOUCH_END, (event) => {
            callWithState(false);
        }, this);
        node.on(cc.Node.EventType.TOUCH_CANCEL, (event) => {
            callWithState(false);
        }, this);
        node._touchListener.setSwallowTouches(isSwallow);
    },

    //========================================= 下面是 事件

    eventOn:function(type, callback, target){
        this.notification.on(type, callback, target);
        this._eventMap.push({type:type, callback: callback, target: target});
    },

    eventOnce:function(type, callback, target){
        this.notification.once(type, callback, target);
    },

    emit:function(type, data){
        this.notification.emit(type, data)
    },


    // //========================================= 通用缓存池
    pushCache:function(name,node){
        this._m_ComNodePool.pushCache(name,node)
    },
    /*
    * createFunc:创建节点函数,自行addChild
    * */
    popCache:function(name){
        return this._m_ComNodePool.popCache(name)
    },

    //========================================= 下面是creator的原生方法

    ctor:function() {
        this._eventMap = [];//事件
        this.m_jsonUrls = [];
        this.m_SingleSpriteFrameUrls = [];
        this.m_soundUrls = [];
        this.m_spriteFrameUrls = [];
        this.m_texture2DUrls = [];
        this.m_textUrls = [];//文本
        this.m_commonAssetsUrls = [];//通用资源
        this.notification = new cc.EventTarget();
    },

    onDestroy:function(){
        if (this._eventMap != null && this._eventMap.length > 0){
            for (let i = 0; i < this._eventMap.length; i++) {
                let config = this._eventMap[i];
                this.notification.off(config.type, config.callback, config.target);
            }
            this._eventMap = null;
        }

        
        JsonManager.deloadResource(this.m_jsonUrls)
        SingleTextureManager.deloadResource(this.m_SingleSpriteFrameUrls);
        Texture2DManager.deloadResource(this.m_texture2DUrls)
        PlistTextureManager.deloadResource(this.m_spriteFrameUrls);
        TextManager.deloadResource(this.m_textUrls)


        let soundAudios = []
        for(let i = 0; i<this.m_soundUrls.length; i++){
            soundAudios.push(this.m_soundUrls[i].url)
        }

        AudioSoundManager.deloadResource(soundAudios);

        
    },

    // onDestroy事件有延迟，此函数在销毁节点时做提前删除事件监听处理
    destroyAfterEventOff:function(){
        if (this._eventMap != null && this._eventMap.length > 0){
            for (let i = 0; i < this._eventMap.length; i++) {
                let config = this._eventMap[i];
                this.notification.off(config.type, config.callback, config.target);
            }
            this._eventMap = null;
        }
        this.node.destroy()
    },

    onLoad:function(){
        this._m_ComNodePool = this.node.addComponent("ComNodePool")
    },

    start:function(){
    },

    onEnable:function(){
    },


    onDisable:function(){
    },



});