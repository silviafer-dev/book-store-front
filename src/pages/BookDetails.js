import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../sass/bookDetails.scss";
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
    <div className="book">
      <h1 className="book__title"> {book.name}</h1>
      <h3 className="book__author">
        {book.first_name} {book.last_name}
      </h3>
      <p className="book__isbn">isbn: {book.isbn}</p>
      <div>
        <hr />
        <UpdateBook book={book} />
      </div>
    </div>
  );
}
