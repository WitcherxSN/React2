#  BookNest - Online Library System

BookNest is an online library application built using React. It allows users to browse books, search by title or author, filter books by category, view detailed book information, and add new books to the library.

The application uses React Router for navigation and Redux Toolkit for managing the books collection.

##  Features

* Home page with book categories and popular books
* Browse all available books
* Filter books by category
* Search books by title or author
* View detailed information about each book
* Add new books to the library
* Form validation while adding books
* Book cover images
* Redux-based book state management
* Dynamic routing for categories and book details
* Custom 404 Page Not Found screen
* Responsive and user-friendly interface

##  Technologies Used

* React
* JavaScript
* Vite
* React Router DOM
* Redux Toolkit
* React Redux
* HTML
* CSS

##  Project Structure


src/
 assets/
  books/

 components/
    Navbar.jsx

data/
   books.js

pages/
   Home.jsx
   BrowseBooks.jsx
   BookDetails.jsx
   AddBook.jsx
   NotFound.jsx

 redux/
 booksSlice.js
   store.js

App.jsx
 App.css
index.css
main.jsx


##  Main Pages

### Home

The Home page displays a welcome section, book categories, and popular books. Users can select a category or open the details of a book.

### Browse Books

The Browse Books page displays the available books in card format. Users can search for books by title or author and filter books using dynamic category routes.

Example category route:


/books/fiction


### Book Details

Each book has its own dynamic details page displaying:

* Book cover
* Title
* Author
* Category
* Description
* Rating

Example:

/book/1


### Add Book

Users can add a new book by providing:

* Book title
* Author
* Category
* Description
* Rating
* Book cover URL

The form validates the entered information before adding the book.

Redux Toolkit is used to update the books collection. After successfully adding a book, the user is redirected to the Browse Books page, where the newly added book appears at the beginning of the list.

### 404 Page

Invalid routes display a custom Page Not Found screen.

The invalid URL is displayed and the user can navigate back to the Home page.



##  Dependencies

The project uses the following main dependencies:


react
react-dom
react-router-dom
@reduxjs/toolkit
react-redux




##  Author

Shravan Naik
