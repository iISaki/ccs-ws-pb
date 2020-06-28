







/*
* 资源加载工具
LoadUtils.loadRes()
* */

cc.Class({



    ctor:function(){
        // this.m_serverUrl = "https://mini-game-box.oss-cn-shenzhen.aliyuncs.com/assets/resources1/"
        this.m_serverUrl = ""

        this.m_loadTime = {}

    },


    subReloadTime:function(_url){
        this.m_loadTime[_url] = this.m_loadTime[_url] - 1;
        return  this.m_loadTime[_url]
    },

    isCanReload:function(_url){
        return this.m_loadTime[_url] > 0
    },

    //LoadUtils.loadRes()
    loadRes:function(_url,callback){
        let self = this
        this.m_loadTime[_url] = 5
        let _callback = function(err,res){
            if(err){
                if(self.isCanReload(_url)){
                    let time = self.subReloadTime(_url)
                    console.warn("loadRes 加载资源失败,再次尝试下载1| ",time,":",_url)
                    self.loadRes(_url,callback)
                }
                return
            }
            delete self.m_loadTime[_url];
            callback(err,res)
        }
        cc.loader.loadRes(this.m_serverUrl + _url,_callback);
    },

    /*
        当只有两个参数的时候,即dir+progressCallback的时候,progressCallback === completeCallback
    */
    loadResDir:function(dir,progressCallback,completeCallback){
        // logger.warn("loadResDir dir:",dir)
        cc.loader.loadResDir(this.m_serverUrl + dir,progressCallback,completeCallback);
    },

    loadResWithType:function(_url,_type,callback){
        let self = this
        let _callback = function(err,res){
            if(err){
                if(self.isCanReload(_url)){
                    let time = self.subReloadTime(_url)
                    console.warn("loadResWithType 加载资源失败,再次尝试下载2| ",time,":",_url)
                    self.loadResWithType(_url,_type,callback)
                }
                return
            }
            callback(err,res)
        }
        cc.loader.loadRes(_url,_type,_callback);
    },



});



