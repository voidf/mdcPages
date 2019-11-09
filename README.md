# 介绍

本工程基于axios和XHR编写，用文件打开的话可能会被浏览器因为*跨域问题*block掉。

第一次接触框架开发吧，目录结构有点丑，见谅。

# 引用框架

+ material design
+ axios

# 用法

1. 命令行运行[TestServer.py](TestServer.py),如果报错请尝试安装依赖库flask。

2. 在浏览器中以http的方式打开```index.htm```*直接文件打开会真的用不了*。

3. 在链接一栏中填写py服务器的链接，如果没有发生改动的话应该是```http://127.0.0.1:8086```

4. 选择请求方法，输入请求体，然后开搞 ~~自定义请求头在做了在做了~~ 

5. 返回信息里面应该会有服务器响应头及状态码，响应体。

# 二次开发

npm依赖包请参见[static/s手打草.txt](static/s手打草.txt)

在当前目录下运行```npm start```以启动本地服务器，这个项目的本体是[233.js](233.js)以及[233.scss](233.scss)。修改这两个文件后webserver会自行重新编译。

运行```npm run build```以编译上述两个文件，输出在dist文件夹中，把两个bundle直接复制到主目录即可脱离npm的服务器使用*但还是需要一个像apache,nginx这样的webserver*。