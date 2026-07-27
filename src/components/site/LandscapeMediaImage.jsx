export default function LandscapeMediaImage({
  alt = '',
  aspectRatio = '3 / 2',
  className = '',
  decoding = 'async',
  height,
  loading = 'lazy',
  sizes,
  src,
  srcSet,
  subtitle,
  width,
}) {
  return (
    <figure className={`landscape-media-image ${className}`.trim()}>
      <div className="landscape-media-image__frame" style={{ aspectRatio }}>
        <img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          decoding={decoding}
        />
      </div>
      {subtitle && (
        <figcaption className="landscape-media-image__subtitle">
          {subtitle}
        </figcaption>
      )}
    </figure>
  );
}
