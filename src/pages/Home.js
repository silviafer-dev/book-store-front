import React from 'react'
import AuthorsList from '../components/AuthorsList';
import BooksList from '../components/BooksList';

export default function Home() {
  return (
    <div>
      <div>Home</div>
      <AuthorsList/>
      <BooksList/>
    </div>
  );
}

