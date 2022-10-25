/* eslint-disable eqeqeq */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectStateOneAuthor } from "../features/author/authorSlice";
import { fetchAuthor } from "../services/api-authors";
import "../sass/authorDetail.scss";

export default function AuthorDetails() {
  const { id } = useParams();
  const author = useSelector(selectStateOneAuthor);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthor(id));
  }, [dispatch, id]);

  return (
    <div className="author-detail">
      <div className="author-detail__title">List Book</div>
      <div className="book-container">
        {author.map((author, index) => (
          <div key={index} className='book__card'>
            <h3 className="book__name">{author.name}</h3>
            <h6 className="book__author-detail">
              {author.first_name} {author.last_name}
            </h6>

            <p className="book__isbn-detail">isbn: {author.isbn}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
