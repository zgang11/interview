// @ts-nocheck
import React, { useState, useEffect, useRef, forwardRef } from 'react';

// 节流函数：限制事件触发频率（如 100ms 内只触发一次）
const throttle = (fn, delay = 100) => {
  let lastTime = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastTime > delay) {
      fn.apply(this, args);
      lastTime = now;
    }
  };
};

const LazyImage = forwardRef((props, ref) => {
  const {
    dataSrc,
    placeholder = 'https://via.placeholder.com/300x200?text=Loading...',
    errorSrc = 'https://via.placeholder.com/300x200?text=Error',
    preloadDistance = 100, // 预加载距离（像素）
    alt = 'lazy image',
    className = '',
    onLoad,
    ...rest
  } = props;

  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const imageRef = useRef(null);

  // 检查图片是否进入视口（含预加载距离）
  const checkInViewport = () => {
    if (!imageRef.current || isLoaded || isError) return;

    const rect = imageRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    // 条件：图片顶部 <= 视口底部 + 预加载距离，且图片底部 >= 视口顶部 - 预加载距离
    const isInViewport = (
      rect.top <= viewportHeight + preloadDistance &&
      rect.bottom >= -preloadDistance &&
      rect.left <= viewportWidth + preloadDistance &&
      rect.right >= -preloadDistance
    );

    if (isInViewport) {
      // 进入视口，加载真实图片
      imageRef.current.src = imageRef.current.dataset.src;
      // 移除监听（避免重复触发）
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll); // 窗口 resize 时也需检查
    }
  };

  // 节流后的滚动处理函数
  const handleScroll = throttle(checkInViewport);

  // 初始化监听：scroll + resize（窗口大小变化时重新检查）
  useEffect(() => {
    if (isLoaded || isError) return;

    // 初始检查一次（若图片在初始视口中，直接加载）
    checkInViewport();

    // 添加滚动和窗口 resize 监听
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // 组件卸载时移除监听
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [preloadDistance]);

  // 加载成功/失败处理（同方案一）
  const handleLoad = (e) => {
    setIsLoaded(true);
    if (typeof onLoad === 'function') onLoad(e);
  };

  const handleError = () => {
    setIsError(true);
    // if (imageRef.current) imageRef.current.src = errorSrc;
  };

  // ref 转发（同方案一）
  useEffect(() => {
    if (ref) {
      typeof ref === 'function' ? ref(imageRef.current) : (ref.current = imageRef.current);
    }
  }, [ref]);

  return (
    <img
      ref={imageRef}
      src={isLoaded ? dataSrc : placeholder}
      data-src={dataSrc}
      alt={alt}
      className={`lazy-image ${isLoaded ? 'lazy-image--loaded' : ''} ${className}`}
      onLoad={handleLoad}
      onError={handleError}
      {...rest}
    />
  );
});

LazyImage.displayName = 'LazyImage';

export default LazyImage;