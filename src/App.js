import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BooksList />} />
        <Route path="/:id" element={<BookDetails />} />
        <Route path="/book" element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default App;
