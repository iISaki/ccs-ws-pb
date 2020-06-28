# ccs-ws-pb
creator+websocket+protobuf

接入protobuf
	安装protobufjs到全局
		npm install -g protobufjs
	下载protobuf.js
		直接拿安装好的protobuf，路径
		C:\Users\{Admin}\AppData\Roaming\npm\node_modules\protobufjs
		导入creator并作为插件
	在保存proto文件的目录下打开命令行执行如下命令
		pbjs -t static-module -w commonjs -o proto.js *.proto
	生存proto.js，然后把proto.js文件放入代码目录中，因为protobuf已经被	置为插件了，修改proto.js中protobuf的引用：
		// var $protobuf = require("protobufjs/minimal");
		var $protobuf = protobuf

 参考链接：https://www.jianshu.com/p/57736a8dbf9c

server文件夹为服务器
　安装WS  npm install ws
　安装protobufjs npm install protobufjs
　启动服务器    node .\index.js
