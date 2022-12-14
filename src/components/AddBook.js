import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewBook } from "../services/api-books";
import { useNavigate, Link } from "react-router-dom";
import "../sass/addItem.scss";

export default function AddBook() {
  const [error, setError] = useState("");
  const [book, setBook] = useState({
    name: "",
    isbn: "",
    author: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.name === "" || book.isbn === "" || book.author === "") {
      setError('Empty lines');
     
    } else {
      dispatch(createNewBook(book));
      navigate("/");
      setError("");
    }
  };

  return (
    <div className="add">
      <div className="add__title">Add New Book</div>
      <form className="add__form ">
        <label htmlFor="name">
          Book Title:
          <input
          className="input-title"
            type="text"
            name="name"
            value={book.name}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="isbn">
          {" "}
          ISBN code:
          <input
          className="input-isbn"
            type="text"
            name="isbn"
            value={book.isbn}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="author">
          ID author:
          <input
          className="input-author"
            type="number"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
        </label>
        <div>
          <Link className="back-button" to="/">
            &#10229; Go Back
          </Link>
          <button className="add__button" onClick={handleSubmit}>
            Save
          </button>
          <p className="error">{error && error}</p>
        </div>
      </form>
    </div>
  );
}
