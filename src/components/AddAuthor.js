import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewAuthor } from "../services/api-authors";
import { Link, useNavigate } from "react-router-dom";
import "../sass/addItem.scss";

export default function AddAuthor() {
  const [error, setError] = useState("");
  const [author, setAuthor] = useState({
    first_name: "",
    last_name: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAuthor({ ...author, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (author.first_name === "" || author.last_name === "") {
      setError("Empty lines");
    } else {
      dispatch(createNewAuthor(author));
      navigate("/");
      setError("");
    }
  };

  return (
    <div className="add">
      <div className="add__title">Add New Author</div>
      <form className="add__form add__form--author">
        <label htmlFor="first_name">
          First Name:
          <input
            type="text"
            name="first_name"
            value={author.first_name}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="last_name">
          Last Name:
          <input
            type="text"
            name="last_name"
            value={author.last_name}
            onChange={handleChange}
            required
          />
        </label>
        <div>
          <Link className="back-button back-button--author" to="/">
            &#10229; Go Back
          </Link>
          <button
            className="add__button add__button--author"
            onClick={handleSubmit}
          >
            Save
          </button>
          <p className="error">{error && error}</p>
        </div>
      </form>
    </div>
  );
}
