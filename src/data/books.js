import silentForest from "../assets/books/fiction.jpg";
import beyondStars from "../assets/books/scifi.jpg";
import hiddenTruth from "../assets/books/mystery.jpg";

const books = [
  {
    id: 1,
    title: "The Silent Forest",
    author: "Ava Morgan",
    category: "Fiction",
    description:
      "A mysterious journey through an ancient forest where secrets from the past begin to surface.",
    rating: 4.7,
    image: silentForest,
  },

  {
    id: 2,
    title: "Beyond the Stars",
    author: "Liam Carter",
    category: "Sci-Fi",
    description:
      "An interstellar adventure that follows a daring crew searching for answers beyond the known universe.",
    rating: 4.8,
    image: beyondStars,
  },

  {
    id: 3,
    title: "Hidden Truth",
    author: "Noah Bennett",
    category: "Mystery",
    description:
      "A gripping mystery where one investigator discovers that every answer leads to an even darker secret.",
    rating: 4.6,
    image: hiddenTruth,
  },
];

export default books;