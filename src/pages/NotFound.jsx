import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <main className="not-found-page">
      <div className="not-found-card">
        <h1>404</h1>
        <h2>Page Not Found</h2>

        <p>
          The page <strong>{location.pathname}</strong> does not exist.
        </p>

        <Link className="home-btn" to="/">
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;