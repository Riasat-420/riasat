// src/components/LazyImage.tsx
// Use this instead of <img> throughout the app.
// It adds: loading="lazy", width/height (prevents CLS), alt enforcement, and
// an optional fallback src for browsers that don't support WebP.

interface LazyImageProps {
  src: string;              // path to WebP (preferred) or original image
  alt: string;              // REQUIRED — describes the image for SEO + a11y
  width: number;
  height: number;
  fallbackSrc?: string;     // original JPG/PNG for Safari < 14 (rare now)
  className?: string;
  priority?: boolean;       // set true for above-the-fold images (disables lazy)
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
