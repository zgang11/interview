### 1.git查看远程分支
```
git branch -a 查看本地和远程仓库的所有分支
git branch -r 查看所有远程分支
git branch -v 查看一个分支的最后一次提交
git branch --merged  查看哪些分支已经合并到当前分支
git branch --no-merged 查看所有未合并工作的分支
```

### 2.git拉取远程分支
```
git fetch origin 远程仓库的分支名
git checkout -b 本地分支名称 origin/远程分支名称
```

### 3.修改远程分支名称
```
git branch -m 旧分支名 新分支名
git push --delete origin 旧分支名
git push origin 新分支名:将新分支名推到远程
git branch --set-upstream-to origin/新分支名：新本地分支和远程关系
```

### 4.git删除本地分支&远程分支
```
git branch -d xxx --删除本地分支
git branch -D xxx --强制删除本地分支

git push --delete origin xxx  --删除远程分支
git push origin :xxx  --删除远程分支
```

### 5.git切换分支不同步本地修改
+ git add和git commit提交修改，保证git status检查区和暂存为空
+ git stash
```
git stash | git stash save 'xxx': 加注解缓存 ---隐藏当前工作现场(git status查看工作区，隐藏后可以切换)
git stash list --查看缓存列表
git stash apply --恢复缓存 stash内容不删除 举例：git stash apply stash@{0}
git stash pop --恢复最新的缓存并删除缓存

git stash drop [名] --删除单个缓存 举例：git stash drop stash@{0}
git stash clear --缓存全清
```

### 6.git commit后，如何撤销commit
```
git reset --soft HEAD^
HEAD^ --表示上一个版本，即上一次的commit，也可以写成HEAD~
      --如果进行两次的commit，想要都撤回，可以使用HEAD~2
      --soft 不删除工作空间的改动代码 ，撤销commit，不撤销git add file
      --hard 删除工作空间的改动代码，撤销commit且撤销add
```


### 7.git tag使用
```
   git tag --列出已有的标签

   git tag -l "v1.8.5*" --列出和1.8.5相关的系列

   git tag -a [tagName] -m [message] --创建附注标签 例: git tag -a v1.4 -m "my version 1.4"

   git tag [tagName] -m [message] --创建轻量标签， 创建轻量标签，不需要使用 -a、-s 或 -m 选项，只需要
   提供标签名字 例: git tag  v1.4 -m "my version 1.4"

   git show [tagName] --查看标签信息和与之对应的提交信息

   git tag -a [tagName] [提交的hash] --给某次提交补上标签 例：git tag -a v1.2 9fceb02

   git push origin <tagname> --传送标签到远程仓库服务器上 例：git push origin v1.5

   git tag -d <tagname> --删除掉本地仓库上的标签 例： git tag -d v1.4-lw

   git push <remote> :refs/tags/<tagname> --变体一：远程仓库中移除这个标签 例：git push origin :refs/tags/v1.4-lw

   git push origin --delete <tagname> --变体二：远程仓库中移除这个标签 例：git push origin v1.4-lw
   
```