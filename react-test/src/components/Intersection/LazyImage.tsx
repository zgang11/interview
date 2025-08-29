import React, { useState, useEffect, useRef, forwardRef, ForwardedRef, useCallback } from 'react';

/**
 * 懒加载图片组件 Props 类型定义
 */
interface LazyImageProps {
  /** 图片真实地址（必传） */
  dataSrc: string;
  /** 占位图地址（默认灰色占位） */
  placeholder?: string;
  /** 加载失败时的替代图地址（默认错误提示图） */
  errorSrc?: string;
  /** 预加载距离（视口外多少像素开始加载，格式如 "100px 0px"） */
  rootMargin?: string;
  /** 图片 alt 文本（SEO 必备） */
  alt: string;
  /** 自定义 CSS 类名 */
  className?: string;
  /** 图片加载完成回调函数 */
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  /** 图片加载失败回调函数 */
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  /** 其他原生 img 标签属性（如 width、height、crossOrigin 等） */
  [key: string]: any;
}

/**
 * 懒加载图片组件（TypeScript 版）
 * 使用 Intersection Observer 监听图片与视口交集，延迟加载视口外图片
 */
const LazyImage = forwardRef(
  // @ts-ignore
  (props: LazyImageProps, ref: ForwardedRef<HTMLImageElement>) => {
    // 1. 解构 props 并设置默认值
    const {
      dataSrc,
      placeholder = 'https://via.placeholder.com/300x200?text=Loading...',
      errorSrc = 'https://via.placeholder.com/300x200?text=Error',
      rootMargin = '100px 0px', // 视口外 100px 开始预加载
      alt,
      className = '',
      onLoad,
      onError,
      ...rest // 收集其他原生 img 属性（如 width、height）
    } = props;

    // 2. 状态管理：加载状态、错误状态
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    // 3. 图片 DOM 元素 ref（用于 Intersection Observer 监听）
    const imageRef = useRef<HTMLImageElement>(null);

    // 4. Intersection Observer 实例 ref（避免重复创建）
    const observerRef = useRef<IntersectionObserver | null>(null);

    // 5. 图片加载成功处理
    const handleLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
      console.log(isLoaded)
      if(isLoaded) return
      setIsLoaded(true);
      // 触发父组件传入的 onLoad 回调
      if (onLoad) {
        onLoad(e);
      }
    }, [isLoaded]);

    // 6. 图片加载失败处理
    const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
      setIsError(true);
      // 加载失败时替换为 errorSrc
      if (imageRef.current) {
        // imageRef.current.src = errorSrc;
      }
      // 触发父组件传入的 onError 回调
      if (onError) {
        onError(e);
      }
    };

    // 7. 初始化 Intersection Observer，监听图片交集状态
    useEffect(() => {
      // 若图片已加载/加载失败，无需监听]
      console.log(isLoaded, isError)
      if (isLoaded || isError) return;
      

      // 创建 Intersection Observer 实例
      observerRef.current = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry) => {
            // 当图片进入视口（intersecting 为 true）
            console.log("isIntersecting", entry.isIntersecting)
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              // 将 dataSrc 赋值给 src，触发真实图片加载
              img.src = img.dataset.src || '';
              // 停止监听当前图片（避免重复触发）
              observerRef.current?.unobserve(img);
            }
          });
        },
        {
          root: null, // 监听视口（null 表示视口）
          rootMargin, // 预加载距离
          threshold: 0.01, // 交集比例达到 1% 即触发（避免边缘情况）
        }
      );

      // 监听图片元素（确保 DOM 已挂载）
      if (imageRef.current) {
        observerRef.current.observe(imageRef.current);
      }

      // 组件卸载时：销毁 Observer 实例、停止监听
      return () => {
        if (observerRef.current && imageRef.current) {
          observerRef.current.unobserve(imageRef.current);
        }
        observerRef.current = null;
      };
    }, [dataSrc, isLoaded, isError, rootMargin, errorSrc]);

    // 8. 转发 ref 到图片元素（支持父组件通过 ref 操作 DOM）
    useEffect(() => {
      if (!ref) return;

      if (typeof ref === 'function') {
        // 函数式 ref：直接调用传递 DOM 元素
        ref(imageRef.current);
      } else {
        // 对象式 ref：赋值给 current 属性
        ref.current = imageRef.current;
      }
    }, [ref]);

    // 9. 渲染逻辑：根据状态切换图片地址
    return (
      <img
        ref={imageRef}
        // 初始显示占位图，加载成功后显示真实图，失败显示错误图
        src={isError ? errorSrc : isLoaded ? dataSrc : placeholder}
        // 存储真实地址到 data-src（供 Observer 触发时使用）
        data-src={dataSrc}
        alt={alt}
        // 拼接类名：基础样式 + 加载状态类 + 自定义类
        className={`lazy-image ${isLoaded ? 'lazy-image--loaded' : ''} ${className}`}
        // 绑定加载/错误事件
        onLoad={handleLoad}
        onError={handleError}
        // 传递其他原生 img 属性（如 width、height、crossOrigin 等）
        {...rest}
      />
    );
  }
);

// 给组件命名（避免 React DevTools 显示 "ForwardRef"）
LazyImage.displayName = 'LazyImage';

export default LazyImage;