import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import AddBook from "./pages/AddBook";
import BookDetails from "./pages/BookDetails";
import NotFound from "./pages/NotFound";
import { useLocation } from "react-router-dom";

function App() {

  const location = useLocation();

const validPaths = ["/", "/books", "/add-book"];

const isBookDetails = location.pathname.startsWith("/book/");
const isCategoryPage = location.pathname.startsWith("/books/");

const showNavbar =
  validPaths.includes(location.pathname) ||
  isBookDetails ||
  isCategoryPage;

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BrowseBooks />} />
        <Route path="/books/:category" element={<BrowseBooks />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;