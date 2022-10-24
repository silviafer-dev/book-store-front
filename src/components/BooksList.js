import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
      <div>
        {books.map((book) => (
          <div key={book.id}>
            <div>{book.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BooksList;
