import { Link } from "react-router-dom";
import books from "../data/books";

function BrowseBooks() {
  return (
    <main>
      <h1>Browse Books</h1>

      <div>
        {books.map((book) => (
          <div key={book.id}>
            <img
              src={book.image}
              alt={book.title}
              width="160"
            />

            <h3>{book.title}</h3>

            <p>by {book.author}</p>

            <p>{book.category}</p>

            <Link to={`/book/${book.id}`}>
                            View Details
                     </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default BrowseBooks;