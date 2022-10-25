import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import AddAuthor from "./components/AddAuthor";
import AddBook from "./components/AddBook";
import Header from "./components/Header";
import AuthorDetails from "./pages/AuthorDetails";
import BookDetails from "./pages/BookDetails";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/book" element={<AddBook />} />
        <Route path="/author/:id" element={<AuthorDetails />} />
        <Route path="/author" element={<AddAuthor />} />
      </Routes>
    </div>
  );
}

export default App;
