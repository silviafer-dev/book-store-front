import React from "react";
import AuthorsList from "../components/AuthorsList";
import BooksList from "../components/BooksList";
import Header from "../components/Header";
import "../sass/home.scss";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <AuthorsList />
        <BooksList />
      </div>
    </>
  );
}
