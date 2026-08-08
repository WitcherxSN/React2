import { Link } from "react-router-dom";

import fictionImg from "../assets/books/fiction.jpg";
import scifiImg from "../assets/books/scifi.jpg";
import mysteryImg from "../assets/books/mystery.jpg";

function Home() {
  const categories = [
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "Mystery"
  ];

  const popularBooks = [
    {
      id: 1,
      title: "The Silent Forest",
      author: "Ava Morgan",
      category: "Fiction",
      image: fictionImg
    },
    {
      id: 2,
      title: "Beyond the Stars",
      author: "Liam Carter",
      category: "Sci-Fi",
      image: scifiImg
    },
    {
      id: 3,
      title: "Hidden Truth",
      author: "Noah Bennett",
      category: "Mystery",
      image: mysteryImg
    }
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
          {popularBooks.map((book) => (
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