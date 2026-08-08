import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Home() {

    const books = useSelector((state) => state.books);
    
  const categories = [
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "Mystery"
  ];

  

  return (
    <main>

      <section className="hero">
    <h1>Welcome to BookNest</h1>
    <p>Discover stories. Explore ideas. Find your next great read.</p>
  </section>

  <section>
    <h2 className="section-title">Browse by Category</h2>

    <div className="categories">
      {categories.map((category) => (
        <Link
          className="category-card"
          key={category}
          to={`/books/${category.toLowerCase()}`}
        >
          {category}
        </Link>
      ))}
    </div>
  </section>

  <section>
    <h2 className="section-title">Popular Books</h2>

    <div className="book-grid">
      {books.map((book) => (
        <div className="book-card" key={book.id}>
          <img src={book.image} alt={book.title} />

          <h3>{book.title}</h3>
          <p>by {book.author}</p>
          <p>{book.category}</p>

          <Link
            className="details-link"
            to={`/book/${book.id}`}
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  </section>

    </main>
  );
}

export default Home;