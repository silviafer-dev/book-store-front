import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import AddBook from "./components/AddBook";
import AuthorDetails from "./pages/AuthorDetails";
import BookDetails from "./pages/BookDetails";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/book" element={<AddBook />} />
        <Route path="/author/:id" element={<AuthorDetails />} />
      </Routes>
    </div>
  );
}

export default App;
