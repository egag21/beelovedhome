import { businessEmail, businessEmailHref } from '../content/site';

export default function HomePage() {
  return (
    <div className="bee-home">
      <section className="bee-hero" id="home">
        <div className="bee-hero__copy">
          <p className="bee-kicker">Handmade in Colorado Springs</p>
          <h1>Keep good bread<br /><em>good longer.</em></h1>
          <p className="bee-hero__intro">
            Small-batch beeswax wraps made by Carrie to help your sourdough stay
            fresh, naturally—without the plastic bag.
          </p>
          <div className="bee-actions">
            <a className="bee-button bee-button--dark" href="#find-us">Find us this Saturday</a>
            <a className="bee-text-link" href="#wraps">Meet the wraps <span aria-hidden="true">↓</span></a>
          </div>
          <div className="bee-hero__note">
            <span aria-hidden="true">✦</span>
            <p><strong>Made for the bread you made.</strong><br />Reusable · breathable · naturally protective</p>
          </div>
        </div>
        <div className="bee-hero__art" role="img" aria-label="A loaf of sourdough tucked into a cheerful beeswax wrap">
          <div className="sun-stitch" aria-hidden="true" />
          <div className="bread-illustration" aria-hidden="true">
            <span className="bread-score bread-score--one" />
            <span className="bread-score bread-score--two" />
            <span className="bread-score bread-score--three" />
          </div>
          <div className="wrap-illustration" aria-hidden="true">
            <span>✿</span><span>•</span><span>✿</span><span>•</span><span>✿</span>
          </div>
          <p className="art-caption">A soft fold, a warm hand,<br />a loaf loved a little longer.</p>
        </div>
      </section>

      <div className="marquee" aria-label="Product qualities">
        <div aria-hidden="true">BEESWAX <span>✦</span> COTTON <span>✦</span> TREE RESIN <span>✦</span> JOJOBA OIL <span>✦</span> MADE BY HAND</div>
      </div>

      <section className="bee-section product-section" id="wraps">
        <div className="section-heading section-heading--split">
          <div>
            <p className="bee-kicker">The first thing from our hive</p>
            <h2>A better little home<br />for your bread.</h2>
          </div>
          <p>Specially sized for a homemade boule, our reusable wraps warm in your hands, fold close, and let good bread breathe.</p>
        </div>

        <div className="product-showcase">
          <figure className="product-photo">
            <img src="/images/bee-loved-wraps.png" alt="A round sourdough loaf nestled in a handmade botanical beeswax wrap" width="1536" height="1024" />
            <figcaption>Made for daily bread—and the ritual around it.</figcaption>
          </figure>
          <article className="product-card">
            <span className="product-card__number">01</span>
            <p className="bee-kicker">Sourdough wrap</p>
            <h3>The Loaf Hug</h3>
            <p>A generous waxed-cotton wrap made for boules, batards, and the bread you worked all day to bake.</p>
            <ul>
              <li><span>◎</span> Keeps the crust from going soft too quickly</li>
              <li><span>◎</span> Helps hold moisture without sealing bread in plastic</li>
              <li><span>◎</span> Washable, reusable, and easy to refresh</li>
            </ul>
            <a className="bee-text-link" href="#find-us">See what’s at the market <span aria-hidden="true">→</span></a>
          </article>
        </div>
      </section>

      <section className="bee-section ritual-section" aria-labelledby="ritual-title">
        <div className="section-heading section-heading--center">
          <p className="bee-kicker">Warm · fold · keep</p>
          <h2 id="ritual-title">Simple as one, two, three.</h2>
        </div>
        <ol className="ritual-grid">
          <li><span>1</span><h3>Warm it</h3><p>Hold the wrap in your hands for a few seconds. Your warmth softens the wax.</p></li>
          <li><span>2</span><h3>Fold it</h3><p>Tuck it closely around your cooled loaf and press the folds into place.</p></li>
          <li><span>3</span><h3>Love it</h3><p>Unwrap, slice, and repeat. A little care gives your wrap a long, useful life.</p></li>
        </ol>
      </section>

      <section className="story-section" id="story">
        <div className="story-pattern" aria-hidden="true"><span>✿</span><span>✦</span><span>✿</span><span>✦</span><span>✿</span></div>
        <div className="story-copy">
          <p className="bee-kicker">Hello from Carrie</p>
          <h2>Made at home,<br /><em>for your home.</em></h2>
          <p className="story-lead">Bee Loved Home began with a simple question: how do you keep a beautiful homemade loaf fresh without hiding it in plastic?</p>
          <p>Carrie started making wraps in small batches here in Colorado Springs—choosing useful sizes, cheerful cottons, and natural wax-based ingredients. The sourdough wrap is first. More thoughtful goods for the kitchen and home are already buzzing around the worktable.</p>
          <div className="made-stamp" aria-label="Small batch, Colorado made"><span>SMALL BATCH</span><strong>♥</strong><span>COLORADO MADE</span></div>
        </div>
      </section>

      <section className="market-section" id="find-us">
        <div className="market-day" aria-hidden="true"><small>EVERY</small><strong>SAT</strong><span>UR<br />DAY</span></div>
        <div className="market-copy">
          <p className="bee-kicker">Come say hello</p>
          <h2>Find us up the road<br />in Monument.</h2>
          <p>Carrie brings Bee Loved Home to a farmers market in Monument, Colorado, every Saturday, with more Colorado Springs–area market visits along the way.</p>
          <p className="market-note"><span aria-hidden="true">☀</span> Market details and weekly inventory can change—check back soon for the latest stop.</p>
          <a className="market-email" href={businessEmailHref}>Ask about this week’s market <span aria-hidden="true">→</span></a>
        </div>
        <div className="market-map" aria-hidden="true">
          <span className="map-spring">Colorado Springs</span>
          <i />
          <span className="map-monument">Monument</span>
          <b>♥</b>
        </div>
      </section>

      <section className="bee-section care-section" id="care">
        <div className="section-heading section-heading--split">
          <div><p className="bee-kicker">Care for your wrap</p><h2>Cool water.<br />Kind hands.</h2></div>
          <p>A well-loved wrap will soften and crease over time. That patina is proof it’s doing its job.</p>
        </div>
        <div className="care-grid">
          <article><span aria-hidden="true">≈</span><h3>Rinse cool</h3><p>Use cool water and a little gentle dish soap.</p></article>
          <article><span aria-hidden="true">☼</span><h3>Air dry</h3><p>Drape or stand it up, then fold and store.</p></article>
          <article><span aria-hidden="true">♲</span><h3>Use again</h3><p>Warm, wrap, wash, repeat for months of use.</p></article>
          <article className="care-grid__avoid"><span aria-hidden="true">×</span><h3>Skip the heat</h3><p>No hot water, microwave, dishwasher, oven, or raw meat.</p></article>
        </div>
      </section>

      <section className="coming-section">
        <p className="bee-kicker">What’s buzzing next</p>
        <div className="coming-title"><h2>A home full of<br /><em>useful little things.</em></h2><span aria-hidden="true">↝</span></div>
        <p>We’re starting with bread wraps and dreaming up more wax-based kitchen and home goods—each one practical, cheerful, and made in small batches.</p>
        <div className="coming-tags" aria-label="Future product ideas"><span>Bread bags</span><span>Bowl covers</span><span>Wax fire starters</span><span>And whatever comes next</span></div>
      </section>

      <section className="bee-section faq-section" aria-labelledby="faq-title">
        <div><p className="bee-kicker">Good questions</p><h2 id="faq-title">A few things<br />to know.</h2></div>
        <div className="faq-list">
          <details><summary>How long will a wrap last?<span>+</span></summary><p>With regular use and gentle care, a beeswax wrap can serve your kitchen for many months. How often you use and wash it will shape its lifespan.</p></details>
          <details><summary>Can I use it on warm bread?<span>+</span></summary><p>Let your loaf cool completely first. Heat can soften the wax coating and trapped warmth can create unwanted moisture.</p></details>
          <details><summary>Are all the patterns the same?<span>+</span></summary><p>No—and that’s part of the fun. Carrie works in small batches, so fabrics and available patterns will vary from market to market.</p></details>
          <details><summary>Where can I buy one?<span>+</span></summary><p>For now, come find Bee Loved Home at the Saturday market in Monument or at select farmers markets around the Colorado Springs area.</p></details>
        </div>
      </section>

      <section className="closing-section">
        <span aria-hidden="true">✦</span>
        <p className="bee-kicker">From our hands to your table</p>
        <h2>Let your loaf<br /><em>bee loved.</em></h2>
        <p>Come meet Carrie, feel the wraps, and pick the pattern that belongs in your kitchen.</p>
        <div className="closing-actions">
          <a className="bee-button bee-button--light" href="#find-us">Find Bee Loved Home</a>
          <a className="closing-email" href={businessEmailHref}>Email {businessEmail}</a>
        </div>
      </section>
    </div>
  );
}
