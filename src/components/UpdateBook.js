import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateBook } from "../services/api-books";
import "../sass/update.scss";

export default function UpdateBook({ book }) {
  const [edit, setEdit] = useState({
    name: "",
    isbn: "",
    author: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (book) {
      setEdit(book);
    } else {
      setEdit("");
    }
  }, [book]);

  const handleChange = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    console.log(edit, "edit");
    e.preventDefault();
    dispatch(updateBook({ id: edit.id, data: edit }));
  };

  return (
    <div className="update">
      <div className="update__title">Update Book</div>
      <form className="update__form">
        <label htmlFor="name">
          Title:
          <input
          className="input-name"
            type="text"
            name="name"
            value={edit.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="isbn">
          {" "}
          ISBN code:
          <input
          className="input-isbn"
            type="text"
            name="isbn"
            value={edit.isbn}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="author">
          ID number author:
          <input
          className="input-id"
            type="number"
            name="author"
            value={edit.author}
            onChange={handleChange}
          />
        </label>
        <button type='submit' className="update__button submit" onClick={handleSubmit}>
          Save
        </button>
      </form>
    </div>
  );
}
