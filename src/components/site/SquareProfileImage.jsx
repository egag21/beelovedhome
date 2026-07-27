export default function SquareProfileImage({
  alt,
  className = '',
  decoding = 'async',
  loading = 'lazy',
  sizes,
  src,
  srcSet,
}) {
  return (
    <figure className={`square-profile-image ${className}`.trim()}>
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width="1"
        height="1"
        loading={loading}
        decoding={decoding}
      />
    </figure>
  );
}
