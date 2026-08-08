import { Link } from "react-router-dom";
import books from "../data/books";


function Home() {
  const categories = [
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "Mystery"
  ];

  

  return (
    <main>

      <section>
        <h1>Welcome to BookNest</h1>
        <p>Discover stories. Explore ideas. Find your next great read.</p>
      </section>

      <section>
        <h2>Browse by Category</h2>

        <div>
          {categories.map((category) => (
            <Link
              key={category}
              to={`/books/${category.toLowerCase()}`}
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2>Popular Books</h2>

        <div>
          {books.map((book) => (
            <div key={book.id}>

              <img
                src={book.image}
                alt={book.title}
                width="180"
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

      </section>

    </main>
  );
}

export default Home;