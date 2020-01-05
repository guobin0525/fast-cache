### gitHub上创建开源项目
- 知识点
    + 协议：licence: MIT
    + 版本号解析：xx.xx.xx
       + 一级：重构版本
       + 二级：重大功能改进
       + 三级：小升级或者bug修复
       + 开发潜规则：0.x.x认定为非正式版本，测试版本；1.x.x认定为正式版本
    + 规范一级目录
       + `src`- 源代码
       + `release` - 发布结果
       + `test` - 单元测试用例
       + `doc` - 文档
       + `example` - 示例
    + package.json知识
       + main: 
    + 插件：http-server
       + 下载到全局： `npm i -g http-server`;
       + 目的：配合package.json中的scripts使用，设置端口号，运行静态资源代码;`{"script": {"example": "http-server -p 5055"}}`
       + 参考链接：[http-server使用文档](https://www.npmjs.com/package/http-server)
    + 插件：gitbook
       + 全局安装：`npm i gitbook-cli -g`
       + 创建`SUMMARY.md`文件
       + 步骤：
         + 1）在SUMMARY.md文件中第一行`* [项目介绍](README.md)`对应的目录下已经存在README.md文件
         + 2）运行`gitbook init`，会将SUMMARY.md中的文件创建出来；
         + 3）运行`gitbook build`可以将md文件发布为html文件；默认放在`_book`文件夹下；
         + 4) 运行html文件，即可看到导航；

- 待学习知识
   + gitbook知识点学习