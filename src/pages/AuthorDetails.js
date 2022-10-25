import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectStateOneAuthor } from "../features/author/authorSlice";
import { fetchAuthor } from "../services/api-authors";

export default function AuthorDetails() {
  const { id } = useParams();
  const author = useSelector(selectStateOneAuthor);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthor(id));
  }, [dispatch, id]);
  console.log(author, "author");

  return (
    <div >
      <div>AuthorDetails</div>
      
      {author.map((author, index) => (
        <div key={index}>
          <h6>{author.first_name}</h6>
          <h6>{author.last_name}</h6>
          <h3>{author.name}</h3>
          <p>{author.isbn}</p>
        </div>
      ))}
     
    </div>
  );
}
