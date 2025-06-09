要查看一个tag在哪个分支上，可以通过以下步骤：

1. 首先，使用命令`git tag`列出所有的tag。例如：`git tag`

2. 查找我们想要的tag，记下tag的名称。假设我们要查找的tag是`v1.0.0`。

3. 接下来，使用命令`git show-ref –tags`，将显示所有tag以及它们所对应的commit。例如：`git show-ref –tags`

4. 在输出结果中，找到我们想要的tag`v1.0.0`的行，它将类似于这样：`[commit hash] refs/tags/v1.0.0`。记下它所对应的commit hash。

5. 现在，使用命令`git branch –contains [commit hash]`来查找包含该commit的分支。例如：`git branch –contains [commit hash]`。

6. 在输出结果中，我们可以看到该commit所在的分支列表。

通过以上步骤，我们就可以找到tag`v1.0.0`所在的分支。注意，如果tag存在于多个分支上，则会在输出结果中显示多个分支。