import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectStateOneBook } from "../features/book/bookSlice";
import { fetchBook } from "../services/api-books";
import UpdateBook from "../components/UpdateBook";

export default function BookDetails() {
  const { id } = useParams();
  const book = useSelector(selectStateOneBook);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook(id));
  }, [dispatch, id]);

  return (
    <div>
      <div>BookDetails</div>
      <h1> {book.name}</h1>
      <div>
        <h3>{book.first_name}</h3>
        <h3>{book.last_name}</h3>
      </div>
      <p>{book.isbn}</p>
      <UpdateBook book={book} />
      <button className="books__button">Update</button>
    </div>
  );
}
