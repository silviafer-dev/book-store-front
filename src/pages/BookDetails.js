import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectStateOneBook } from "../features/book/bookSlice";
import { fetchBook } from "../services/api-books";

function BookDetails() {
  const { id } = useParams();
  const book = useSelector(selectStateOneBook);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook(id));
  }, [dispatch, id]);

  return <div>BookDetails</div>;
}

export default BookDetails;
