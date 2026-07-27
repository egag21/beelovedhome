export default function PortfolioComparison({ comparisons = [] }) {
  return (
    <div className="comparison-list">
      {comparisons.map((comparison) => (
        <article
          className={`comparison-card${comparison.wide ? ' comparison-card--wide' : ''}`}
          id={`comparison-${comparison.title.toLowerCase().replaceAll(' ', '-')}`}
          key={comparison.title}
        >
          <header className="comparison-card__header">
            <h4>{comparison.title}</h4>
            <p>{comparison.description}</p>
          </header>
          <div className="comparison-grid">
            <ComparisonFrame
              label="Original redesign"
              number="01"
              href={comparison.redesign}
              src={comparison.redesignPreview || comparison.redesign}
              alt={comparison.redesignAlt}
              width={comparison.redesignWidth}
              height={comparison.redesignHeight}
              wide={comparison.wide}
              variant="redesign"
            />
            <ComparisonFrame
              label="Working prototype"
              number="02"
              href={comparison.prototype}
              src={comparison.prototypePreview || comparison.prototype}
              alt={comparison.prototypeAlt}
              width={comparison.prototypeWidth}
              height={comparison.prototypeHeight}
              wide={comparison.wide}
              variant="prototype"
            />
          </div>
        </article>
      ))}
    </div>
  );
}

function ComparisonFrame({ label, number, href, src, alt, width, height, wide, variant }) {
  return (
    <figure className={`comparison-frame comparison-frame--${variant}`}>
      <figcaption>
        <span>{number}</span>
        <strong>{label}</strong>
      </figcaption>
      <div className={`comparison-stage${wide ? ' comparison-stage--wide' : ''}`}>
        <a href={href}>
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>
    </figure>
  );
}
