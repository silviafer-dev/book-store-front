import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewAuthor } from "../services/api-authors";

export default function AddAuthor() {
  const [author, setAuthor] = useState({
    first_name: "",
    last_name: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setAuthor({ ...author, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewAuthor(author));
  };

  return (
    <div>
      <div>Add New Author</div>
      <form action="">
        <label htmlFor="first_name">
          <input
            type="text"
            name="first_name"
            value={author.first_name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="last_name">
          <input
            type="text"
            name="last_name"
            value={author.last_name}
            onChange={handleChange}
          />
        </label>

        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
}
