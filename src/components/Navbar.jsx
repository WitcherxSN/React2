import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>BookNest</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/books">Browse Books</Link>
        <Link to="/add-book">Add Book</Link>
      </div>
    </nav>
  );
}

export default Navbar;