import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {

  const books = useSelector((state) => state.books);

  const { id } = useParams();

  const selectedBook = books.find(
    (book) => book.id === Number(id)
  );

  if (!selectedBook) {
    return <h2>Book not found</h2>;
  }

  return (
    <main>
     <div className="book-details">

      <div className="details-image">
        <img
          src={selectedBook.image}
          alt={selectedBook.title}
        />
      </div>

      <div className="details-content">
        <span className="details-category">
          {selectedBook.category}
        </span>

        <h1>{selectedBook.title}</h1>

        <h3>by {selectedBook.author}</h3>

        <p className="details-description">
          {selectedBook.description}
        </p>

        <p className="details-rating">
          ⭐ {selectedBook.rating} / 5
        </p>

        <Link className="back-btn" to="/books">
          ← Back to Browse
        </Link>
      </div>

    </div>
    </main>
  );
}

export default BookDetails;