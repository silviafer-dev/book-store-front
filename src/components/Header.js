import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectStateAuthors } from "../features/author/authorSlice";
import "../sass/header.scss";
import { fetchAuthors } from "../services/api-authors";

export default function Header() {
  const authors = useSelector(selectStateAuthors);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleChange(value) {
    navigate(value);
  }

  useEffect(() => {
    dispatch(fetchAuthors());
  }, [dispatch]);

  return (
    <div>
      <div className="header">
        <h1 className="header__title">Good Reads</h1>
        <nav className="header__nav-bar">
          <label htmlFor="hamburger">&#9776;</label>
          <input type="checkbox" id="hamburger" />
          <div className="hamburger-items">
            <Link to={`/author`}>
              <button className="header__button-nav ">Add New Author</button>
            </Link>
            <Link to={`/book`}>
              <button className="header__button-nav ">Add New Book</button>
            </Link>
          </div>
        </nav>
      </div>
      <div className="select-author">
        <select onChange={(event) => handleChange(event.target.value)}>
          <option value="default">Search for Author</option>
          {authors.map((item) => {
            return (
              <option key={item.id} value={`/author/${item.id}`}>
                {item.first_name} {item.last_name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
