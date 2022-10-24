import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectStateBooks } from "../features/book/bookSlice";
import { fetchBooks } from "../services/api-books";

function BooksList() {
  const books = useSelector(selectStateBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  console.log(books);
  return (
    <>
      <div>BooksList</div>
      <Link to={`/book`}>
        <button>New Book</button>
      </Link>
      <div>
        {books.map((book) => (
          <div key={book.id}>
            <Link to={`/${book.id}`}>
              <div>{book.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default BooksList;
