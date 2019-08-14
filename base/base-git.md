# 安装配置
## 安装
>我也很服 不同linux也分这么多版本，可是为啥我非要用centos呢？最近的学习效率是真的高，看来写日记才是人生出路。
### linux
```
sudo apt-get install git
```
### centos
如果使用yum install xxxx，会找到安装包之后，询问你Is this OK[y/d/N]，需要你手动进行选择。但是如果加上参数-y，就会自动选择y，不需要你再手动选择！
yum比rpm高级一次安一套
>yum 包夜
>rpm 一次
```
yum -y install git
```
## 配置
```
git config --global user.name "along"
git config --global user.email "longgev596@"
ssh-keygen -t rsa -C "youremail@example.com"  //生成key
```

# 基础命令
```
git init                     // 初始化本地仓库
git add <file>               // 添加文件
git status                   // 查看状态
git commit -m"message"       // 提交
git push                     // 推送到仓库
git pull                     // 从远程仓库拉取
git clone                    // 从远程仓库复制
```
# 版本管理
```
git status                   // 查看状态
git diff <file>              // 查看修改内容
git reset --hard HEAD^       // 回到上一版本
git reset --hard <commitID>  // 回到指定版本
git push origin master       // 推送到github
git rm <file>/s              // 删除文件  
```
## 工作区和暂存区
[原理解释]([https://www.liaoxuefeng.com/wiki/896043488029600/897271968352576](https://www.liaoxuefeng.com/wiki/896043488029600/897271968352576)) 
## 
# 分支管理
```
git branch                     // 查看分支
git branch <name>              // 创建分支
git checkout <name>            // 切换分支
git checkout -b <name>         // 创建+切换分支
git merge <name>               // 合并某分支到当前分支
git branch -d <name>           // 删除分支
```
>git log --graph  看到分支合并图
