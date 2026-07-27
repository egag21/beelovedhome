import { Link } from 'react-router-dom';

export default function EditorialPortfolioHero({
  eyebrow,
  headline,
  descriptor,
  body,
  micro,
  imageSrc,
  imageSrcSet,
  imageSizes = '100vw',
  imageAlt = '',
  actions = [],
}) {
  return (
    <section className={`hero hero--fullwidth ${imageSrc ? 'hero--with-image' : ''}`}>
      {imageSrc && (
        <img
          className="hero__img"
          src={imageSrc}
          srcSet={imageSrcSet}
          sizes={imageSrcSet ? imageSizes : undefined}
          alt={imageAlt}
          width="1915"
          height="821"
          fetchPriority="high"
          decoding="async"
        />
      )}
      <div className="hero__content">
        <div className="hero__copy">
          {eyebrow && <p className="hero__eyebrow">{eyebrow}</p>}
          <h1 className="hero__heading">{headline}</h1>
          {descriptor && <p className="hero__descriptor">{descriptor}</p>}
          <p className="hero__body">{body}</p>
          <div className="button-row">
            {actions.map((action, index) => {
              const className = `button-link ${index === 0 ? 'button-link--primary' : 'button-link--secondary'}`;
              const isInternal = action.href.startsWith('/') && !action.href.toLowerCase().endsWith('.pdf');

              return isInternal ? (
                <Link className={className} to={action.href} key={`${action.label}-${action.href}`}>
                  {action.label}
                </Link>
              ) : (
                <a className={className} href={action.href} key={`${action.label}-${action.href}`}>
                  {action.label}
                </a>
              );
            })}
          </div>
          {micro && <p className="hero__micro">{micro}</p>}
        </div>
      </div>
    </section>
  );
}
