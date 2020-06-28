


//=========================== Enum ==============================


// let EnvEnum = require("EnvEnum");
// let GlobalEnum = require("GlobalEnum");
// let ManagerEnum = require("./Enum/ManagerEnum");

//=========================== Component ==============================


//=========================== Mananager ==============================




// let BaseManager = require("./Manager/BaseManager");
let ViewManager = require("./Manager/ViewManager");
// let RotationManager = require("./Manager/RotationManager");
// let EnumManager = require("./Manager/EnumManager");
// let AudioManager = require("./Manager/AudioManager");

// let KeyboardManager = require("./Manager/KeyboardManager");
// let PlistTextureManager = require("./Manager/PlistTextureManager");
// let JsonManager = require("./Manager/JsonManager");
// let NetWorkManager = require("./Manager/NetWorkManager");
// let UserDataManager = require("./Manager/UserDataManager");
// let ConfigManager = require("./Manager/ConfigManager");
// let TimeMgr = require("TimeMgr");
// let NodeCacheManager = require("./Manager/NodeCacheManager");//准备弃用
// let SingleTextureManager = require("./Manager/SingleTextureManager");
// let AdVideoManager = require("AdVideoManager");
// let AudioSoundManager = require("AudioSoundManager");
// let AudioMusicManager = require("AudioMusicManager");

// let GameManager = require("GameManager");
// let PopViewManager = require("PopViewManager");

// let Texture2DManager = require("Texture2DManager");
// let TextManager = require("TextManager");
// let CommonAssetsManager = require("CommonAssetsManager");


// //=========================== Mgr 短写管理器 ==============================
// let ConfigMgr = require("ConfigMgr");
// let UidMgr = require("UidMgr");
// let RecordDotMgr = require("RecordDotMgr");
// let HttpMgr = require("HttpMgr");
    


//=========================== Utils ==============================
// let Utils = require("./Uitls/Utils");
// let TestUtils = require("./Uitls/TestUtils");
// let HelpUtils = require("./Uitls/HelpUtils");

// let PrefabUtils = require("./Uitls/PrefabUtils");
// let JsonUtils = require("./Uitls/JsonUtils");
// let RandomUtils = require("./Uitls/RandomUtils");
// let LoggerUtils = require("./Uitls/LoggerUtils");
let LoadUtils = require("./Uitls/LoadUtils");
// let TipsUtils = require("./Uitls/TipsUtils");
// let AppUtils = require("./Uitls/AppUtils");
// let ArrayUtils = require("./Uitls/ArrayUtils");
// let TableUtils = require("./Uitls/TableUtils");
// let DicUtils = require("./Uitls/DicUtils");
// let RectUtils = require("./Uitls/RectUtils");
// let SpriteUtils = require("./Uitls/SpriteUtils");
// let TextureUtils = require("./Uitls/TextureUtils");
// let UserUtils = require("./Uitls/UserUtils");
// let NodeUtils = require("./Uitls/NodeUtils");
// let AdaptUtils = require("./Uitls/AdaptUtils");
// let SpineUtils = require("SpineUtils");
// let DragonBoneUtils = require("./Uitls/DragonBoneUtils");
// let Md5Utils = require("./Uitls/Md5Utils");
// let RoleUtils = require("./Uitls/RoleUtils");
let TypeUtils = require("./Uitls/TypeUtils");
// let NumberUtils = require("./Uitls/NumberUtils");
// let ItemUtils = require("./Uitls/ItemUtils");
// let TilemapUtils = require("./Uitls/TilemapUtils");
// let PointUtils = require("./Uitls/PointUtils");
// let ColorUtils = require("./Uitls/ColorUtils");
// let TimeUtils = require("./Uitls/TimeUtils");
// let ButtonUtils = require("./Uitls/ButtonUtils");
// let StringUtils = require("./Uitls/StringUtils");
// let AlignUtils = require("./Uitls/AlignUtils");
// let GlobalUtils = require("./Uitls/GlobalUtils");
// let ActionUtils = require("./Uitls/ActionUtils");
// let HttpUtils = require("./Uitls/HttpUtils");




cc.Class({
    // extends: cc.Component,

    properties: {
        name:"MyApp",
    },

    ctor:function(){
        this.initEnum();
        this.initUtils();
        this.initManager();
        this.initComponent();
        this.initUtilsLater();
    },

    initEnum:function(){
        // window.GlobalEnum = GlobalEnum;
        // window.ManagerEnum = ManagerEnum;
        // window.EnvEnum = EnvEnum;

    },



    initComponent:function(){
    },


    initManager:function(){


        window.ViewManager = new ViewManager();
        // window.RotationManager = new RotationManager();
        // window.EnumManager = new EnumManager();
        // window.AudioManager = new AudioManager();
        // window.KeyboardManager = new KeyboardManager();
        // window.PlistTextureManager = new PlistTextureManager();
        // window.JsonManager = new JsonManager();
        // window.TimeMgr = new TimeMgr();
        // window.NetWorkManager = new NetWorkManager();
        // window.UserDataManager = new UserDataManager().init();
        // window.ConfigManager = new ConfigManager();
        // window.NodeCacheManager = new NodeCacheManager();
        // window.SingleTextureManager = new SingleTextureManager();
        // window.AdVideoManager = new AdVideoManager();
        // window.AudioSoundManager = new AudioSoundManager();
        // window.AudioMusicManager = new AudioMusicManager();

        // window.GameManager = new GameManager();
        // window.PopViewManager = new PopViewManager();

        // window.Texture2DManager = new Texture2DManager();
        // window.TextManager = new TextManager();
        // window.CommonAssetsManager = new CommonAssetsManager();
        
        
        // // ------------------------- 短写 -------------------------
        // window.ConfigMgr                = new ConfigMgr();
        // window.UidMgr                   = new UidMgr();
        // window.RecordDotMgr             = new RecordDotMgr().init();
        // window.HttpMgr                  = new HttpMgr();
        
    },

    initUtils:function(){
        // window.ArrayUtils = ArrayUtils;
        // window.TableUtils = TableUtils;
        // window.RectUtils = RectUtils;
        // window.SpriteUtils = SpriteUtils;
        // window.TextureUtils = TextureUtils;
        // window.JsonUtils = JsonUtils;
        // window.UserUtils = UserUtils;
        // window.NodeUtils = NodeUtils;
        // window.AdaptUtils = AdaptUtils;
        // window.SpineUtils = SpineUtils;
        // window.DragonBoneUtils = DragonBoneUtils;
        // window.Md5Utils = Md5Utils;
        // window.RoleUtils = RoleUtils;
        window.TypeUtils = TypeUtils;//用于类型判断
        // window.NumberUtils = NumberUtils;//数字
        // window.ItemUtils = ItemUtils;//道具
        // window.TilemapUtils = TilemapUtils;
        // window.DicUtils = DicUtils;
        // window.PointUtils = PointUtils;
        // window.ColorUtils = ColorUtils;
        // window.TimeUtils = TimeUtils;
        // window.ButtonUtils = ButtonUtils;
        // window.StringUtils = StringUtils;
        // window.AlignUtils = AlignUtils;
        // window.GlobalUtils = GlobalUtils;
        // window.ActionUtils = ActionUtils;
        // window.HttpUtils = HttpUtils;
        
    },



    initUtilsLater:function(){
        // window.Utils = new Utils();
        // window.TestUtils = new TestUtils();
        // window.HelpUtils = new HelpUtils();
        // window.PrefabUtils = new PrefabUtils();
        // window.RandomUtils = new RandomUtils();
        // window.logger = new LoggerUtils();
        window.LoadUtils = new LoadUtils();
        // window.TipsUtils = new TipsUtils();
        // window.AppUtils = new AppUtils();
    },
    

});


