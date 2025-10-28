const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

// 设置静态文件目录
app.use('/', express.static(path.join(__dirname, '../../dive-into-webpack')));

// 首页路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dive-into-webpack', 'index.html'));
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
