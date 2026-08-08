import { Link, useParams } from "react-router-dom";
import books from "../data/books";

function BookDetails() {
  const { id } = useParams();

  const selectedBook = books.find(
    (book) => book.id === Number(id)
  );

  if (!selectedBook) {
    return <h2>Book not found</h2>;
  }

  return (
    <main>
      <img
        src={selectedBook.image}
        alt={selectedBook.title}
        width="220"
      />

      <h1>{selectedBook.title}</h1>

      <p>Author: {selectedBook.author}</p>

      <p>Category: {selectedBook.category}</p>

      <p>{selectedBook.description}</p>

      <p>Rating: ⭐ {selectedBook.rating}</p>

      <Link to="/books">
        Back to Browse
      </Link>
    </main>
  );
}

export default BookDetails;