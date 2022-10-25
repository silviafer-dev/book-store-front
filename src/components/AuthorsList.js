import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectStateAuthors } from "../features/author/authorSlice";
import { fetchAuthors } from "../services/api-authors";
import "../sass/authorList.scss";

export default function AuthorsList() {
  const authors = useSelector(selectStateAuthors);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthors());
  }, [dispatch]);
  console.log(authors);

  return (
    <div className="author">
      <h3 className="author__title">Authors</h3>
      {authors.map((author) => (
        <div key={author.id}>
          <Link to={`/author/${author.id}`} className='author__link'>
            <h4 className="author__name">
              {author.first_name} {author.last_name}
            </h4>
          </Link>
          <p className="author__name--id"> Id. number: {author.id}</p>
        </div>
      ))}
    </div>
  );
}
