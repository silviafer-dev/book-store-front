import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectStateBooks } from "../features/book/bookSlice";
import { fetchBooks } from "../services/api-books";
import "../sass/bookList.scss";



export default function BooksList() {
  const books = useSelector(selectStateBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="books">
      <div className="books__card-list">
        {books.map((book) => (
          <Link key={book.id} to={`/book/${book.id}`} className="books__card">
            <div className="books__name">{book.name}</div>
        
            
          </Link>
        ))}
      </div>
    </div>
  );
}
