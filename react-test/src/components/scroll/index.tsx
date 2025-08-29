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
    { id: 6, url: 'https://picsum.photos/800/600?random=6', alt: '山水风景 6', height: 300 },
    { id: 7, url: 'https://picsum.photos/800/600?random=7', alt: '城市夜景 7', height: 300 },
    { id: 8, url: 'https://picsum.photos/800/600?random=8', alt: '森林绿植 8', height: 300 },
    { id: 9, url: 'https://picsum.photos/800/600?random=9', alt: '海边日落 9', height: 300 },
    { id: 10, url: 'https://picsum.photos/800/600?random=10', alt: '雪山湖泊 10', height: 300 },
    { id: 11, url: 'https://picsum.photos/800/600?random=11', alt: '山水风景 11', height: 300 },
    { id: 12, url: 'https://picsum.photos/800/600?random=12', alt: '城市夜景 12', height: 300 },
    { id: 13, url: 'https://picsum.photos/800/600?random=13', alt: '森林绿植 13', height: 300 },
    { id: 14, url: 'https://picsum.photos/800/600?random=14', alt: '海边日落 14', height: 300 },
    { id: 15, url: 'https://picsum.photos/800/600?random=15', alt: '雪山湖泊 15', height: 300 },
    { id: 16, url: 'https://picsum.photos/800/600?random=16', alt: '山水风景 16', height: 300 },
    { id: 17, url: 'https://picsum.photos/800/600?random=17', alt: '城市夜景 17', height: 300 },
    { id: 18, url: 'https://picsum.photos/800/600?random=18', alt: '森林绿植 18', height: 300 },
    { id: 19, url: 'https://picsum.photos/800/600?random=19', alt: '海边日落 19', height: 300 },
    { id: 20, url: 'https://picsum.photos/800/600?random=20', alt: '雪山湖泊 20', height: 300 },
    { id: 21, url: 'https://picsum.photos/800/600?random=21', alt: '山水风景 21', height: 300 },
    { id: 22, url: 'https://picsum.photos/800/600?random=22', alt: '城市夜景 22', height: 300 },
    { id: 23, url: 'https://picsum.photos/800/600?random=23', alt: '森林绿植 23', height: 300 },
    { id: 24, url: 'https://picsum.photos/800/600?random=24', alt: '海边日落 24', height: 300 },
    { id: 25, url: 'https://picsum.photos/800/600?random=25', alt: '雪山湖泊 25', height: 300 },
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
          // @ts-ignore
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
              // @ts-ignore
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