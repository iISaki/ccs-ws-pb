# ccs-ws-pb
creator+websocket+protobuf

����protobuf
	��װprotobufjs��ȫ��
		npm install -g protobufjs
	����protobuf.js
		ֱ���ð�װ�õ�protobuf��·��
		C:\Users\{Admin}\AppData\Roaming\npm\node_modules\protobufjs
		����creator����Ϊ���
	�ڱ���proto�ļ���Ŀ¼�´�������ִ����������
		pbjs -t static-module -w commonjs -o proto.js *.proto
	����proto.js��Ȼ���proto.js�ļ��������Ŀ¼�У���Ϊprotobuf�Ѿ���	��Ϊ����ˣ��޸�proto.js��protobuf�����ã�
		// var $protobuf = require("protobufjs/minimal");
		var $protobuf = protobuf

 �ο����ӣ�https://www.jianshu.com/p/57736a8dbf9c

server�ļ���Ϊ������
����װWS  npm install ws
����װprotobufjs npm install protobufjs
������������    node .\index.js
