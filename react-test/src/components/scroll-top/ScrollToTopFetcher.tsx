import React, { useEffect, useRef, useState, useCallback } from 'react';

// 防抖函数：避免滚动事件频繁触发
const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number = 100
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, delay);
  };
};

interface ScrollToTopFetcherProps {
  /** 滚动到顶部时要调用的接口函数 */
  fetchData: () => Promise<void>;
  /** 子组件内容 */
  children: React.ReactNode;
  /** 距离顶部多少像素时触发（默认0） */
  threshold?: number;
  /** 加载状态文本 */
  loadingText?: string;
}

/**
 * 监听页面滚动，当滚动到顶部时获取接口数据的组件
 */
const ScrollToTopFetcher: React.FC<ScrollToTopFetcherProps> = ({
  fetchData,
  children,
  threshold = 0,
  loadingText = "加载中..."
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasFetched, setHasFetched] = useState<boolean>(false);
  const lastScrollTop = useRef<number>(0);
  const isFetching = useRef<boolean>(false); // 防止重复请求

  // 处理滚动事件
  const handleScroll = useCallback(debounce(() => {
    // 获取当前滚动距离（兼容不同浏览器）
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    // 判断是否滚动到顶部区域
    const isAtTop = scrollTop <= threshold;
    
    // 判断滚动方向（避免在顶部反复触发）
    const isScrollingUp = scrollTop <= lastScrollTop.current;
    
    // 更新上次滚动位置
    lastScrollTop.current = scrollTop;
    
    // 满足条件且不在加载中时，调用接口
    if (isAtTop && isScrollingUp && !isLoading && !isFetching.current) {
      // 防止重复请求
      isFetching.current = true;
      setIsLoading(true);
      
      // 调用接口并处理结果
      fetchData()
        .finally(() => {
          setIsLoading(false);
          setHasFetched(true);
          isFetching.current = false;
        });
    }
  }), [threshold, isLoading, fetchData]);

  // 初始化滚动监听
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // 组件卸载时移除监听
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="scroll-to-top-fetcher">
      {/* 加载状态指示器 */}
      {isLoading && (
        <div className="loading-indicator" style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          padding: '8px',
          backgroundColor: '#f0f9ff',
          color: '#0284c7',
          textAlign: 'center',
          borderBottom: '1px solid #bae6fd'
        }}>
          {loadingText}
        </div>
      )}
      
      {/* 子组件内容 */}
      {children}
      
      {/* 顶部提示（可选） */}
      {hasFetched && !isLoading && (
        <div style={{
          position: 'sticky',
          top: 0,
          zIndex: 99,
          padding: '8px',
          backgroundColor: '#ecfdf5',
          color: '#059669',
          textAlign: 'center',
          borderBottom: '1px solid #a7f3d0',
          display: lastScrollTop.current > threshold ? 'none' : 'block'
        }}>
          已更新最新内容
        </div>
      )}
    </div>
  );
};

export default ScrollToTopFetcher;
