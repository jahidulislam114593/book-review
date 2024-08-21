import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [booksItem, setBooksItem] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooksItem(data));
  }, []);
  return (
    <div className="py-20 my-10">
      <h1 className="text-black font-extrabold text-4xl text-center pb-20">
        Books
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {booksItem.map((book) => (
          <Book book={book} key={book.bookId}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
