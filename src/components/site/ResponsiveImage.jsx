export default function ResponsiveImage({
  alt = '',
  caption,
  className = '',
  decoding = 'async',
  height,
  loading = 'lazy',
  sizes,
  src,
  srcSet,
  width,
}) {
  return (
    <figure className={className}>
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
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
