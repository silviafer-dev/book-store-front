import React from "react";
import AuthorsList from "../components/AuthorsList";
import BooksList from "../components/BooksList";
import "../sass/home.scss";

export default function Home() {
  return (
    <div className="home">
      <AuthorsList />
      <BooksList />
    </div>
  );
}
