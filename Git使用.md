### 1.git查看远程分支
```
git branch -a: 查看本地和远程仓库的所有分支
git branch -r：查看所有远程分支
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