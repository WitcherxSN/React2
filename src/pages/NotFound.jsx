import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <main>
      <h1>404 - Page Not Found</h1>

      <p>
        The page <strong>{location.pathname}</strong> does not exist.
      </p>

      <Link to="/">Back to Home</Link>
    </main>
  );
}

export default NotFound;