


//这个感觉不能这么设计,每个游戏应该有每个游戏的枚举,不应该放到Appevent上面
//从保卫萝卜开始,就要把事件开始分出去
window.AppEvent =  {
    TestEventType :"TestEventType",
    GameRemoveView :"GameRemoveView",


    // ================================= 游戏时间 ======================================
    GameEventEnterBackground:"GameEventEnterBackground",
    GameEventEnterForeground:"GameEventEnterForeground",

    // ================================= 角色数据变化 ======================================

    RoleEventItemChange:"RoleEventItemChange",//道具改变
    RoleEventGoldChange:"RoleEventGoldChange",//金币改变
    RoleEventBagChange:"RoleEventBagChange",//背包发生变化


    // ================================= 广告 ======================================

    PlayerSeedAdBegin:"PlayerSeedAdBegin",//玩家开始看广告
    PlayerSeedAdEnd:"PlayerSeedAdEnd",//玩家结束看广告
    
    ChangeRecordState:"ChangeRecordState",//录制状态改变

    // ================================= 游戏 全局 ======================================
    RestartGame:"RestartGame",//录制状态改变







};