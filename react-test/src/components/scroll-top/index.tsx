import React, { useState } from 'react';
import ScrollToTopFetcher from './ScrollToTopFetcher';

const ScrollExample: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1);

  // 模拟接口请求：获取更多数据
  const fetchMoreData = async () => {
    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 模拟接口返回数据
    const newItems = Array.from({ length: 10 }, (_, i) => 
      `第 ${page} 页数据 - 条目 ${i + 1}`
    );
    
    // 将新数据添加到前面（因为是滚动到顶部加载，类似下拉刷新）
    setItems(prev => [...newItems, ...prev]);
    setPage(prev => prev + 1);
  };

  // 初始化数据
  React.useEffect(() => {
    fetchMoreData();
  }, []);

  return (
    <ScrollToTopFetcher
      fetchData={fetchMoreData}
      threshold={0} // 距离顶部50px时触发
      loadingText="正在加载最新内容..."
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h2>滚动到顶部加载示例</h2>
        <p>尝试向上滚动到页面顶部，会触发数据加载</p>
        
        <div style={{ border: '1px solid #e2e8f0', borderRadius: '6px', overflow: 'hidden' }}>
          {items.map((item, index) => (
            <div 
              key={index} 
              style={{ 
                padding: '16px', 
                borderBottom: '1px solid #e2e8f0',
                backgroundColor: index % 2 === 0 ? '#f8fafc' : '#ffffff'
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </ScrollToTopFetcher>
  );
};

export default ScrollExample;
