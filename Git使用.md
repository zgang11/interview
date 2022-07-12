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