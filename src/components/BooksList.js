import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectStateBooks } from "../features/book/bookSlice";
import { fetchBooks } from "../services/api-books";


import UpdateBook from "./UpdateBook";

export default function BooksList() {
  const books = useSelector(selectStateBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <div>BooksList</div>
      <div>
     
      </div>
      <div>
       
        <div>
          {books.map((book) => (
            <div key={book.id}>
              <Link to={`/book/${book.id}`}>
                <div>{book.name}</div>
              </Link>
              <UpdateBook book={book} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
