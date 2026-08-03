import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="bee-section">
      <section className="not-found-page">
        <p className="bee-kicker">Well, honey.</p>
        <h1>This page flew the hive.</h1>
        <p>Let’s get you back to the good stuff.</p>
        <Link className="bee-button bee-button--dark" to="/">
          Return to Bee Loved Home
        </Link>
      </section>
    </div>
  );
}
