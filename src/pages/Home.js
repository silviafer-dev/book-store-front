import React from "react";
import AuthorsList from "../components/AuthorsList";
import BooksList from "../components/BooksList";


export default function Home() {
  return (
    <>
    
      <div className="flex border-box box-content">
        <AuthorsList />
        <BooksList />
      </div>
    </>
  );
}
