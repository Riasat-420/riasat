// src/components/LazyImage.tsx
// Use this instead of <img> throughout the app.
// It adds lazy loading and supports optional width/height for layout stability.

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fallbackSrc?: string;
  className?: string;
  priority?: boolean;
}

const LazyImage = ({
  src,
  alt,
  width,
  height,
  fallbackSrc,
  className = "",
  priority = false,
}: LazyImageProps) => {
  if (fallbackSrc) {
    return (
      <picture>
        <source srcSet={src} type="image/webp" />
        <img
          src={fallbackSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={className}
        />
      </picture>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={className}
    />
  );
};

export default LazyImage;
