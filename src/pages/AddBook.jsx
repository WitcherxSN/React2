import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/booksSlice";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  function handleSubmit(event) {
  event.preventDefault();


  if (
    title.trim() === "" ||
    author.trim() === "" ||
    category === "" ||
    description.trim() === "" ||
    rating === "" ||
    image.trim() === ""
  ) {
    setError("Please fill in all fields.");
    return;
  }

  if (Number(rating) < 1 || Number(rating) > 5) {
    setError("Rating must be between 1 and 5.");
    return;
  }

  setError("");

  const newBook = {
    id: Date.now(),
    title: title,
    author: author,
    category: category,
    description: description,
    rating: Number(rating),
    image: image,
  };

  dispatch(addBook(newBook));
  navigate("/books");
}

  return (
    <main>
      <h1>Add a New Book</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Book Title</label>

          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Enter book title"
          />
        </div>

        <div>
          <label>Author</label>

          <input
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            placeholder="Enter author name"
          />
        </div>

        <div>
          <label>Category</label>

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">Select category</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Mystery">Mystery</option>
          </select>
        </div>

        <div>
          <label>Description</label>

          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Enter book description"
          />
        </div>

        <div>
          <label>Rating</label>

          <input
            type="number"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
            placeholder="Enter rating"
            min="1"
            max="5"
            step="0.1"
          />
        </div>
        <div>
  <label>Book Cover URL</label>

  <input
    type="text"
    value={image}
    onChange={(event) => setImage(event.target.value)}
    placeholder="Enter book cover image URL"
  />
</div>
       {error && <p>{error}</p>}

        <button type="submit">
          Add Book
        </button>
      </form>
    </main>
  );
}

export default AddBook;