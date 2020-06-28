import TypeUtils from "../Uitls/TypeUtils";








cc.Class({

    ctor(){
        //每个界面打开,都需要自增1
        this.m_viewZorder = 100; 

    },



    getScene(){
        return this.layouts["scene"]
    },


    //scene
    //bot
    //cen
    //top
    //award
    //alert
    //tips
    initScene(layouts) {
        this.viewQeuent = {};
        this.layouts = layouts;
    },

    getLayout(name) {
        let layout;
        if (name) {
            layout = this.layouts[name]
        }else{
            layout = this.layouts.cen
        }
        return layout
    },


    /*
    * data:界面参数
    * */
    showView: function (name, parent, data, callback) {

        console.log("尝试显示界面 ========> ",name)
        if (this.viewQeuent[name] != undefined && this.viewQeuent[name].isShow) {
            if (this.viewQeuent[name].view != undefined) {
                this.viewQeuent[name].view.zIndex = this.m_viewZorder;
                this.viewQeuent[name].zOder = this.m_viewZorder;
                this.m_viewZorder++;
                logger.warn("已存在界面,直接把层级提高,目前没有直接传参")
            } else {
                logger.warn("已存在界面已在加载中,目前没有直接传参")
            }
            return;
        }
        this.viewQeuent[name] = { isShow: true };
        this.viewQeuent[name].zOder = this.m_viewZorder;
        //我們先動態取得Canvas
        let self = this;


        const layout = this.getLayout(parent);
        if(!layout){
            logger.error("layout == null")
            return
        }
        this.viewQeuent[name].layout = parent || "cen";

        let config = ViewConfig[name];
        if(config["module"]){
            AppUtils.loadSubPackage(config.module,null,()=>{
                this.showViewReal(name, layout, data, config, callback)
            })
        }else{
            this.showViewReal(name, layout, data, config, callback)
        }
    },
    showViewReal: function (name, layout, data, config, callback) {
        let self = this;
        let res = "module/" + config.viewPath;

        let onResourceLoaded = function(error, loadedResource )
        {
            if( error ) { 
                console.log( 'Prefab error:' + error.errorMessage ); 
                delete self.viewQeuent[name]
                return; 
            }
            if( !( loadedResource instanceof cc.Prefab ) ) { 
                console.log( 'Prefab error', loadedResource); 
                delete self.viewQeuent[name]
                return; 
            }
            
            let newMyPrefab = cc.instantiate( loadedResource );

            //目前就用这种方法来传参,如果找到更好的,最好修改,我觉得很难受2020-1-13
            if(config.scriptName){
                let comScrip = newMyPrefab.getComponent(config.scriptName);//如果这样那,一个预制体只能获取一个脚本文件了...
                if(comScrip){
                    if(comScrip._onInitArgs){
                        comScrip._onInitArgs(data)
                    }
                    if (comScrip._setViewName) {
                        comScrip._setViewName(name)
                    }
                }else{
                    logger.error("showView ===> " ,name + ",comScrip === null")
                }
            }
            console.log("显示界面 ========> ",name)
            layout.addChild(newMyPrefab);
            newMyPrefab.setPosition( 0, 0 );
            newMyPrefab.zIndex = self.m_viewZorder;
            self.viewQeuent[name].zOder = self.m_viewZorder;
            self.m_viewZorder++;
            self.viewQeuent[name].view = newMyPrefab;
            if (TypeUtils.isFunction(callback)) {
                callback(newMyPrefab)
            }
        };
        LoadUtils.loadRes(res, onResourceLoaded);
        
    },

    showTipsView: function (view) {
        view.parent = this.getLayout("tips");
    },
    showAlertView: function (view) {
        view.parent = this.getLayout("alert");
    },

    closeView: function (nameOrObj) {
        if(typeof(nameOrObj) == "string"){
            this.closeViewByName(nameOrObj)
        }else if(typeof(nameOrObj) == "object"){
            this.closeViewByObj(nameOrObj)
        }else{
            logger.error("错误对象:",nameOrObj)
        }
    },

    isViewExist: function (viewName) {
        return this.viewQeuent[viewName]
    },

    getView: function (viewName) {
        if (this.viewQeuent[viewName] != undefined) {
            return this.viewQeuent[viewName].view
        }
        return
    },

    isTopView: function (viewName) {
        if (this.viewQeuent[viewName] != undefined && this.viewQeuent[viewName].view != undefined) {
            let zOder = this.viewQeuent[viewName].zOder;
            let layout = this.viewQeuent[viewName].layout;
            for (let name in this.viewQeuent) {
                if (layout == this.viewQeuent[name].layout && name !== viewName && this.viewQeuent[name].zOder > zOder) {
                    return false;
                }
            }
            return true
        }
        return false;
    },

    getTopView: function (layout = "cen") {
        let zOder = -1;
        let viewName;
        for (let name in this.viewQeuent) {
            if (layout == this.viewQeuent[name].layout && this.viewQeuent[name].zOder > zOder) {
                zOder = this.viewQeuent[name].zOder;
                viewName = name;
            }
        }
        return viewName;
    },


    clearAllViews: function () {
        for (var key in this.viewQeuent) {
            this.closeView(key)
        }
    },

    //=========================== 下面是私有方法 ============================================

    closeViewByObj: function (obj) {
        if (obj.node !== undefined && cc.isValid(obj.node)) {
            let name;
            for (let key in this.viewQeuent) {
                let viewObj = this.viewQeuent[key].view;
                if(viewObj === obj.node){
                    name = key;
                }
            }
            obj.node.destroy();

            if(name){
                console.log("closeViewByObj 关闭界面:",name)
                delete this.viewQeuent[name];
            }
        }
    },
//     destroy 和 removeFromParent 的区别
//     调用一个节点的 removeFromParent 后，它不一定就能完全从内存中释放，
//     因为有可能由于一些逻辑上的问题，导致程序中仍然引用到了这个对象。
//     因此如果一个节点不再使用了，请直接调用它的 destroy 而不是 removeFromParent。
//     destroy 不但会激活组件上的 onDestroy，还会降低内存泄露的几率，同时减轻内存泄露时的后果。
//     总之，如果一个节点不再使用，destroy 就对了，不需要 removeFromParent 也不需要设置 parent 为 null 哈。
    closeViewByName: function (name) {
        if(!this.viewQeuent[name]){
            return
        }
        let obj = this.viewQeuent[name].view;
        if (obj !== undefined && cc.isValid(obj)) {
            obj.destroy();
            delete this.viewQeuent[name];
            console.log("closeViewByName 关闭界面:",name)
        }
    },




});
