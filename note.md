### gitHub上创建开源项目
- 知识点
    + 项目取名：一定要提前把名字在github和npm搜索一下，确认没有重名才行
    + 协议：licence: MIT
    + 创建项目仓库时选择`.gitignore`为node；协议licence为 MIT；
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
       ```
         # Summary

         * [项目介绍](README.md)
         * [使用文档](doc/use/README.md)
            * [使用1](doc/use/use1.md)
            * [使用2](doc/use/use2.md)
         * [二次开发](doc/dev/README.md)
            * [开发1](doc/dev/dev1.md)
            * [开发2](doc/dev/dev2.md)      
       ```
       + 步骤：
         + 1）在SUMMARY.md文件中第一行`* [项目介绍](README.md)`对应的目录下已经存在README.md文件
         + 2）运行`gitbook init`，会将SUMMARY.md中的文件创建出来；
         + 3）运行`gitbook build`可以将md文件发布为html文件；默认放在`_book`文件夹下；
         + 4) 运行html文件，即可看到导航；
         + 5) 注意提交时，要在`.gitignore`中添加`_book`；
    + 发布版本
       + 发布到github上，创建tag,并提交到远程代码如下
       ```
        git tag -a 'v0.0.1' -m 'first commit'
        git push origin v0.0.1
       ```
       + 发布到npm上，能让使用者通过npm进行安装
         + 运行`npm add user`安装插件
         + 运行`npm login`登录npm个人账户，输入username,password,email
         + 运行`npm publish .`发布当前版本
            + 出现的问题：报403错误
            + 原因：1）保证本地文件package.json中name名，不能在npm中存在;2）此项目之前已经提交了，所以需要修改package.json中的版本号
         + CDN: `http://unpkg.com/fast-cache-npm/目录/压缩js`,如`http://unpkg.com/fast-cache-npm/release/bundle.js`
    + 升级代码并提交
       + 升级代码步骤
          + 新建一个本地dev分支，不要在master分支上开发
          + 修改package.json版本号，按照之前既定的版本规则修改，不能乱改；
          + 修改代码、文档和测试用例
          + 自测
          + 将本地dev分支提交到远程
       + 代码开发完成后，提交的流程
          + 再次确认新版本号，版本号很重要
          + 将本地dev合并到本地master分支上，并提交到远程master分支上
          + 创建tag并提交到远程
          + 提交到npm
       
- 待学习知识
   + gitbook知识点学习