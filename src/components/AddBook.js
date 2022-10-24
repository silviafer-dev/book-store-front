import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewBook } from "../services/api-books";

export default function AddBook() {
  const [book, setBook] = useState({
    name: "",
    isbn: "",
    author: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewBook(book));
  };
  console.log(book);

  return (
    <div>
      <div>Add New Book</div>
      <form action="">
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            value={book.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="isbn">
          <input
            type="text"
            name="isbn"
            value={book.isbn}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="name">
          <input
            type="number"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
}
