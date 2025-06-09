#### 修改最近提交的 commit 信息
```
$ git commit --amend --message="modify message by daodaotest" --author="jiangliheng <jiang_liheng@163.com>"

# 仅修改 message 信息
$ git commit --amend --message="modify message by daodaotest"

# 仅修改 author 信息
$ git commit --amend --author="jiangliheng <jiang_liheng@163.com>"

```

#### 修改历史提交 commit 的信息
```
1.使用 git rebase -i HEAD~n，进入编辑界面。其中的n为记录数

$ git rebase -i HEAD~9

2.找到你要修改的那条记录，然后将行开头的‘pick’替换成‘edit’，输入:wq保存并退出。

3.查看git log，要修改的那条记录，已经变成最新的提交记录了。

$ git log

4.修改最后一次提交的commit信息。

$ git commit --amend

出现有commit信息的界面（你的commit信息应该显示在第一行），按下键盘字母i进入修改模式，修改好commit信息后，按Esc键退出编辑模式，输入:wq保存并退出。

5.查看git log，commit信息已经改好了。

$ git log

6.结束rebase

$ git rebase --continue

7.查看git log，commit信息的顺序也恢复了。

$ git log

8.提交到远程库。
```