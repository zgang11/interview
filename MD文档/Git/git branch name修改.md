#### 1. 本地分支重命名(还没有推送到远程)

```
# 本地分支重命名(还没有推送到远程)
$ git branch -m oldName newName

# 远程分支重命名 (已经推送远程-假设本地分支和远程对应分支名称相同)
  a. 重命名远程分支对应的本地分支
  $  git branch -m oldName newName

  b. 删除远程分支
  $  git push --delete origin oldName

  a. 上传新命名的本地分支
  $  git push origin newName

  d. 把修改后的本地分支与远程分支关联
  $  git branch --set-upstream-to origin/newName
  
```