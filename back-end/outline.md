# 后端部分课程提纲

---

## 2015~2016年课程提纲 ##
**时长: 1天**

|    章节    | 备注 |
| ---------- | --- |
| （1）MEAN简介、Node.js单线程模型 |   |
| （2）Node.JS安装+NPM用法       |   |
| （3）Simple Http server | 不明白这一节的意义，感觉该放到express开头讲 |
| （4）Node.js module机制       |   |
| （5）Node.js 异步编程风格 |   |
| （6）Node.js debug |   |
| （7）package.json  | 应该有专门一章讲项目结构 |
|  *//Express starts*  | *//Express starts* |
| （8）安装+简单示例（express、express-generator） |   |
| （9）Route  |   |
| （10）Middleware（定义、3rd-party lib、error handler） | 3rd-party lib可以专门拿出来讲，比如cookie、session |
| （11）view engine |   |
| （12）与MongoDB集成  | 感觉应该放到MongoDB课 |
 
## 2017年课程提纲（修改中） ##
**时长: 1~2天**

|    章节    | 备注 |
| ---------- | --- |
| （1）MEAN简介、Node.js单线程模型 |   |
| （2）Node.JS安装 + NPM用法 + 一些第三方工具 | npmjs.com、nrm（npm源管理工具）、[nvm-windows(node.js环境版本管理工具)](https://github.com/coreybutler/nvm-windows)、webstorm、chrome postman等等。是否需要预先准备文档？ @Lance说用MS VSCode代替Webstorm  |
| （3）ES6一些知识点 | 如果确定要加这个点，那后面的sample code都用ES6写吧 |
| （4）Helloword Demo与讲解项目结构 | 包括package.json等  |
| （5）Node.js module机制       |  详细讲require(如何把一个js wrap起来的)、module变量、exports、module.exports、 |
| （6）Node.js 异步编程风格 | 由单线程模型引出，只讲最基本的callback风格？ |
| （7）Node.js 标准库 | fs、Buffer、stream |
| （8）Node.js debug | 如果上面讲了webstorm，这里也提一下webstorm里怎样debug  |
|  *//Express starts*  | *//Express starts* |
| （9）安装+简单示例（express、express-generator） |   |
| （10）Route | 包括HTTP method、path匹配、res、req、next、app vs Router  |
| （11）Middleware | 定义、error handler |
| （12）cookie、session | 相当于3rd-party MiddleWare  |
| （13）静态资源 |  |
| （14）view engine | 挑最简单的EJS讲？ |
| （15）[Node.js Rest API 的 10 个最佳实践](https://zhuanlan.zhihu.com/p/25506654?utm_source=wechat_session&utm_medium=social) | ~如时间允许可选 |
| （16）log（winston） | ~~如时间允许可选~~ Lance说讲这个 |
| （17）常用library | ~~如时间允许可选~~ Lance说讲这个  |
| （18）Promise | ~如时间允许可选  |
| （19）测试（mocha、supertest等） | ~如时间允许可选  |

