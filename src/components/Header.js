import React from "react";
import { Link } from "react-router-dom";
import "../sass/header.scss";

export default function Header() {
  return (
    <div>
      <div className="header">
        <Link className="link-home" to={"/"}>
          <h1 className="header__title">Good Reads</h1>
        </Link>
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
    </div>
  );
}
