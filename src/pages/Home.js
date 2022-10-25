import React from "react";
import AuthorsList from "../components/AuthorsList";
import BooksList from "../components/BooksList";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex border-box box-content">
        <AuthorsList />
        <BooksList />
      </div>
    </>
  );
}
