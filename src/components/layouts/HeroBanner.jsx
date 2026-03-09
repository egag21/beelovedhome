import React, { useRef, useEffect } from 'react';

const OVERLAY_ALPHA = 0.45;

const toLinear = (channel) => {
  const s = channel / 255;
  return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};

const luminanceFromRgb = (r, g, b) => {
  const rl = toLinear(r);
  const gl = toLinear(g);
  const bl = toLinear(b);
  return 0.2126 * rl + 0.7152 * gl + 0.0722 * bl;
};

const contrastRatio = (l1, l2) => {
  const bright = Math.max(l1, l2);
  const dark = Math.min(l1, l2);
  return (bright + 0.05) / (dark + 0.05);
};

const applyHeroStyles = (el, textColor) => {
  const isDarkText = textColor === '#111111';
  const shadow = isDarkText ? '0 1px 2px rgba(255, 255, 255, 0.65)' : '0 1px 2px rgba(0, 0, 0, 0.65)';
  const bodyBg = isDarkText ? 'rgba(255, 255, 255, 0.26)' : 'rgba(0, 0, 0, 0.3)';

  el.style.setProperty('--hero-text-color', textColor);
  el.style.setProperty('--hero-text-shadow', shadow);
  el.style.setProperty('--hero-body-bg', bodyBg);
};

const computeAndSetImageContrast = (imgSrc, el) => {
  if (!imgSrc || !el || typeof window === 'undefined') return;
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = imgSrc;
  img.onload = () => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        applyHeroStyles(el, '#ffffff');
        return;
      }
      const w = 40;
      const h = Math.max(1, Math.round((img.height / img.width) * w));
      canvas.width = w;
      canvas.height = h;
      ctx.drawImage(img, 0, 0, w, h);
      const data = ctx.getImageData(0, 0, w, h).data;

      // Weight center pixels more heavily because hero text sits near the center-left.
      const cx = (w - 1) / 2;
      const cy = (h - 1) / 2;
      const maxDist = Math.hypot(cx, cy) || 1;

      let lumSum = 0;
      let weightSum = 0;
      for (let i = 0; i < data.length; i += 4) {
        const idx = i / 4;
        const x = idx % w;
        const y = Math.floor(idx / w);
        const dist = Math.hypot(x - cx, y - cy) / maxDist;
        const weight = 1.15 - dist;

        const lum = luminanceFromRgb(data[i], data[i + 1], data[i + 2]);
        lumSum += lum * weight;
        weightSum += weight;
      }

      const sampledLum = weightSum ? lumSum / weightSum : 0.2;
      const effectiveBgLum = sampledLum * (1 - OVERLAY_ALPHA); // overlay is black

      const whiteLum = luminanceFromRgb(255, 255, 255);
      const darkLum = luminanceFromRgb(17, 17, 17);
      const whiteContrast = contrastRatio(whiteLum, effectiveBgLum);
      const darkContrast = contrastRatio(darkLum, effectiveBgLum);
      const textColor = whiteContrast >= darkContrast ? '#ffffff' : '#111111';

      applyHeroStyles(el, textColor);
    } catch {
      // Canvas read can fail due CORS on some image hosts; keep a safe fallback.
      applyHeroStyles(el, '#ffffff');
    }
  };
  img.onerror = () => {
    applyHeroStyles(el, '#ffffff');
  };
};

export default function HeroBanner({
  headerStyle,
  bodyStyle,
  fullWidth = false,
  imageSrc,
  regions = {},
  ctaUrl,
}) {
  const heroRef = useRef(null);
  const src = imageSrc || 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3';

  const headline = regions.headline || 'Turn Your Website Into a Qualified-Lead Engine';
  const body = regions.body || 'Strategic consulting for service businesses that need clearer messaging and stronger conversion paths.';
  const ctaRegion = regions.cta === undefined
    ? { label: 'Schedule a Strategy Call', href: ctaUrl }
    : { ...regions.cta, href: regions.cta?.href ?? ctaUrl };

  useEffect(() => {
    computeAndSetImageContrast(src, heroRef.current);
  }, [src]);

  return (
    <div className={`hero ${fullWidth ? 'hero--fullwidth' : ''}`} ref={heroRef}>
      <img className="hero__img" src={src} alt="Sample hero" crossOrigin="anonymous" />
      <div className="hero__overlay" />
      <div className="hero__content" style={{ color: 'var(--hero-text-color, #fff)' }}>
        <h1 className="hero__heading" style={headerStyle}>{headline}</h1>
        <p className="hero__body" style={bodyStyle}>{body}</p>
        {ctaRegion && (
          ctaRegion.href ? (
            <a className="hero__cta" href={ctaRegion.href}>
              {ctaRegion.label}
            </a>
          ) : (
            <button type="button" className="hero__cta">
              {ctaRegion.label}
            </button>
          )
        )}
      </div>
    </div>
  );
}
