import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectStateAuthors } from "../features/author/authorSlice";
import { fetchAuthors } from "../services/api-authors";
import AuthorsList from "../components/AuthorsList";
import BooksList from "../components/BooksList";
import "../sass/home.scss";

export default function Home() {
  const authors = useSelector(selectStateAuthors);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleChange(value) {
    navigate(value);
  }

  useEffect(() => {
    dispatch(fetchAuthors());
  }, [dispatch]);
  return (
    <div className="home">
      <div className="select-author">
        <select onChange={(event) => handleChange(event.target.value)}>
          <option value="default">Search for Author</option>
          {authors.map((item) => {
            return (
              <option key={item.id} value={`/author/${item.id}`}>
                {item.first_name} {item.last_name}
              </option>
            );
          })}
        </select>
      </div>
      <AuthorsList />
      <BooksList />
    </div>
  );
}
