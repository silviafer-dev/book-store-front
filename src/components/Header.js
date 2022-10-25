import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>Book Store</h1>
      <Link to={`/author`}>
        <button>Add New Author</button>
      </Link>
      <Link to={`/book`}>
        <button>Add New Book</button>
      </Link>
    </div>
  );
}
