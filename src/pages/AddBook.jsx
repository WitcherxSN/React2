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
      <div className="add-book-container">

      <div className="add-book-header">
        <h1>Add a New Book</h1>
        <p>Expand the library with a new title.</p>
      </div>

      <form className="add-book-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Book Title</label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Enter book title"
          />
        </div>

        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            placeholder="Enter author name"
          />
        </div>

        <div className="form-group">
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

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Enter book description"
          />
        </div>

        <div className="form-group">
          <label>Rating</label>
          <input
            type="number"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
            min="1"
            max="5"
            step="0.1"
            placeholder="Example: 4.5"
          />
        </div>

        <div className="form-group">
          <label>Book Cover URL</label>
          <input
            type="text"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            placeholder="Paste image URL"
          />
        </div>

        {error && <p className="form-error">{error}</p>}

        <button className="submit-book-btn" type="submit">
          Add Book
        </button>

      </form>
    </div>
    </main>
  );
}

export default AddBook;