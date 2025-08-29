import React, { useRef } from 'react';
// @ts-ignore
import LazyImage from './LazyImage';
import './LazyImage.css'; // 可选：添加样式

// 模拟图片列表数据类型
interface ImageItem {
  id: number;
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

const LazyImageDemo: React.FC = () => {
  // 模拟从接口获取的图片列表
  const imageList: ImageItem[] = [
    { id: 1, url: 'https://picsum.photos/800/600?random=1', alt: '山水风景 1', height: 300 },
    { id: 2, url: 'https://picsum.photos/800/600?random=2', alt: '城市夜景 2', height: 300 },
    { id: 3, url: 'https://picsum.photos/800/600?random=3', alt: '森林绿植 3', height: 300 },
    { id: 4, url: 'https://picsum.photos/800/600?random=4', alt: '海边日落 4', height: 300 },
    { id: 5, url: 'https://picsum.photos/800/600?random=5', alt: '雪山湖泊 5', height: 300 },
    // 可添加更多图片...
  ];

  // 父组件通过 ref 获取第一张图片的 DOM 元素
  const firstImageRef = useRef<HTMLImageElement>(null);

  // 图片加载完成回调
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.log(`图片加载完成：${e.currentTarget.alt}`);
    // 可在这里添加加载完成后的逻辑（如动画）
  };

  // 图片加载失败回调
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error(`图片加载失败：${e.currentTarget.alt}`);
  };

  return (
    <div className="lazy-image-demo">
      <h2>React TypeScript 图片懒加载示例</h2>

      {/* 单张懒加载图片（带 ref 转发） */}
      <div className="single-image">
        <h3>单张图片（支持 ref 操作）</h3>
        <LazyImage
          ref={firstImageRef}
          dataSrc="https://picsum.photos/1200/600?random=0"
          alt="首屏大图"
          className="single-image__item"
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ width: '100%', height: '400px', objectFit: 'cover' }}
        />
      </div>

      {/* 图片列表（批量懒加载） */}
      <div className="image-list">
        <h3>图片列表（滚动加载）</h3>
        <div className="image-grid">
          {imageList.map((image) => (
            <LazyImage
              key={image.id}
              dataSrc={image.url}
              alt={image.alt}
              className="image-grid__item"
              height={image.height}
              onLoad={handleImageLoad}
              // 自定义预加载距离（视口外 200px 开始加载）
              rootMargin="200px 0px"
              style={{ width: '100%', objectFit: 'cover' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LazyImageDemo;