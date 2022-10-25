import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectStateAuthors } from "../features/author/authorSlice";
import { fetchAuthors } from "../services/api-authors";

export default function AuthorsList() {
  const authors = useSelector(selectStateAuthors);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthors());
  }, [dispatch]);
  console.log(authors);

  return (
    <div>
      <div>Author List</div>
      {authors.map((author) => (
        <div key={author.id}>
          <Link to={`/author/${author.id}`} style={{ display: "flex" }}>
            <h4>
              {author.first_name} {author.last_name}
            </h4>
          </Link>
        </div>
      ))}
    </div>
  );
}
