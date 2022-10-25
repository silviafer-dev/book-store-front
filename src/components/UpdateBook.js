import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateBook } from "../services/api-books";

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
    dispatch(updateBook({id:edit.id, data:edit}));
  };

  return (
    <div>
      <div>UpdateBook</div>
      <form action="">
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            value={edit.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="isbn">
          <input
            type="text"
            name="isbn"
            value={edit.isbn}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="author">
          <input
            type="number"
            name="author"
            value={edit.author}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
}
