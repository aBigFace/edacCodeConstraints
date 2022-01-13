---
title: 如何在本地环境配置github
author: 罗润峰
date: '2021-12-31'
---

Git提交代码的两种常见的方式第一种是`账号密码`的形式，第二种是通过`ssh`的方式进行提交  

***

## 安装 Git
 首先需要去git官方网址下载自己电脑对应的版本进行下载安装，不做过于过多的解释
## 配置帐号信息
 在cmd或者终端下输入以下命令行：  
 ```json
 git config --global user.name yourUserName   //这里的yourUserName 更换成你自己的账号名
 git config --global user.email yourEmail //这里的yourEmail 更换成你自己的邮箱
 ```
## 创建本地ssh
1. 这是一种传输代码的方法，速度快又安全。`SSH` 是目前较可靠，专为远程登录会话和其他网络服务提供安全性的协议。  
2. 在终端或`cmd`输入以下命令行：
    ```
    ssh-keygen -t rsa -C "fleayun@gmail.com"   //更换成你自己的邮箱名
    ```
3. 在控制台输入以上代码进行生成`ssh-keygen`   

    ![如上图](https://s4.ax1x.com/2021/12/31/Thgjr6.jpg)

    **路径选择** : 使用该命令之后, 会出现提示选择`ssh-key`生成路径, 这里直接点回车默认即可, 生成的`ssh-key`在默认路径中;   
    **密码确认** : 这里我们不使用密码进行登录, 用密码太麻烦;就一路回车下去

## 将ssh配置到GitHub中
1. 在`mac os X` 下前往文件夹，`/Users/自己电脑用户名/.ssh`,`windows`应该是（`C:\Documents and Settings\Administrator\.ssh` （或者 `C:\Users\自己电脑用户名\.ssh`）中）, 然后用记事本打开`id_rsa.pub`，将里面的全部代码复制到github的SSH中。   

    ![如上图](https://s4.ax1x.com/2021/12/31/ThgXKx.png)

    `id_rsa.pub` 文件内容 :

    ``` js
    ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDS0qLtpontavr43AQntX4oBOsg2R3QlWubMYvfgJsIDX6NWd5RaIDLBLEMwIFLDcpvpQKvk5S/bTy4vTuWqeY6fkQ/tZBKksQn1WuYDcSfjLF8BuPMfdkboTh9NaKESKnsiWdranEVbmB5vOAHm8T+HFGdzG7Tz4ygzCnTwvdpBYrd/4jgeazws2d7CuMeuyb+FxdDTQy9YmJJm+82ypfR//bLyzRJo3SYadnPO3VdOAZCO1Isky+p/0nNN/obC4t2y2+oHBAqJV9h37f9S8UShgDmZoVLicRi4poni0i70xj+t/hnOsT8fmEc+vM9USyN+ndawz2oWjikKgln1jOB fleayun@gmail.com
    ```

2. 登陆`github`网站，点击`Settings`——`SSH and GPG keys`——点击右侧的`new SSH key` ,添加即可。  
![如上图](https://s4.ax1x.com/2021/12/31/ThWg8H.png)
3. **验证是否配置成功 :** 复制下面代码到cmd
    ```
    ssh -T git@github.com
    ```
    如果出现以下内容代表成功   
    ```
    Warning: Permanently added the RSA host key for IP address '192.30.252.131' to the list of known hosts.
    Hi hawx1993! You've successfully authenticated, but GitHub does not provide shell access.
    ```

    验证时可能让你输入**YES**，当出现以上信息时，说明配置成功，可以连接上**GitHub**;

## 创建版本库
1. 第一步，在本地创建一个版本库，代码如下：
   ```
    $ mkdir test   #test是你的文件夹的名字
    $ cd test     #进入test所在目录
    $ pwd        #pwd命令用于显示当前目录    
   ```
2. 第二步，通过git init命令把这个目录变成Git可以管理的仓库：
3. 第三部，接着，在github上创建一个你自己的new repository，然后下一步，
## 从现有仓库克隆
## 常见错误
## Git 命令详解
## git思维导图