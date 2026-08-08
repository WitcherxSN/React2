import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function BrowseBooks() {
    
    const [search, setSearch] = useState("");
    const { category } = useParams();
    const books = useSelector((state) => state.books);
    

  const categoryBooks = category
  ? books.filter(
      (book) =>
        book.category.toLowerCase() === category.toLowerCase()
    )
  : books;

const filteredBooks = categoryBooks.filter((book) => {
  return (
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );
});

  return (
    <main>
      <h1>Browse Books</h1>

      <input className="search-box"
  type="text"
  placeholder="Search by title or author..."
  value={search}
  onChange={(event) => setSearch(event.target.value)}
/>

      <div className="book-grid">
        {filteredBooks.map((book) => (
          <div className="book-card" key={book.id}>
            <img
              src={book.image}
              alt={book.title}
             
            />

            <h3>{book.title}</h3>

            <p>by {book.author}</p>

            <p>{book.category}</p>

            <Link  className="details-link" 
            to={`/book/${book.id}`}>
                            View Details
                     </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default BrowseBooks;