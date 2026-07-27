import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="resume-page">
      <section className="section section--centered not-found-page">
        <p className="eyebrow">Page not found</p>
        <h1>This page is not available.</h1>
        <p>The address may have changed, or the page may no longer exist.</p>
        <Link className="button-link button-link--primary" to="/">
          Return home
        </Link>
      </section>
    </div>
  );
}
