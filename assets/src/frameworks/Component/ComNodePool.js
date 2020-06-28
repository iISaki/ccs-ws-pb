





/*
    节电池组件
*/

cc.Class({
    extends: cc.Component,



    onLoad:function(){
        this.m_commonCache = {};//通用缓存池
    },


    //========================================= 通用缓存池
    tryInitCache:function(name){
        if(!this.m_commonCache[name]){
            // this.m_commonCache[name] = [];
            this.m_commonCache[name] = new cc.NodePool(name);
        }
    },
    pushCache:function(name,node){
        this.tryInitCache(name);
        node.active = false;
        // this.m_commonCache[name].push(node);
        this.m_commonCache[name].put(node);
    },
    /*
    * createFunc:创建节点函数,自行addChild
    * */
    popCache:function(name){
        this.tryInitCache(name);
        // let node = this.m_commonCache[name].pop();
        let node = this.m_commonCache[name].get();
        if(node){
            node.active = true;
            return node;
        }else{
            return null;
        }
    },


    onDestroy:function(){
        for (let key in this.m_commonCache) {
            let nodePool = this.m_commonCache[key];
            nodePool.clear()
        }
    },
});
