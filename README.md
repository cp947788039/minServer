# minServer
nodejs模拟小型服务器，请求数据

# 文件介绍
index.html : 原生html界面 【其中调用ajax时，又通过promise进行第二次封装第一次封装的原生ajax】
ajax.js : 封装的原生ajax，异步请求数据
server.js : nodejs搭建的小型服务器代码

# 备注
解决浏览器跨域问题，若是使用谷歌浏览器，可以在扩展里面安装一个插件：Access-Control-Allow-Origin
即可解决跨域问题