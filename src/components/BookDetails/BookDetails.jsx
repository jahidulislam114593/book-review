import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getSavedReadedBooks, saveReadBooks } from "../Utility/localStorage";

const BookDetails = () => {
  const bookInfo = useLoaderData();
  const { bookid } = useParams(); // id is getting as string
  const intBookId = parseInt(bookid); // id is converted to int
  const book = bookInfo.find((book) => book.bookId === intBookId);

  const handleReadButton = () => {
    const savedReadedBooks = getSavedReadedBooks();
    const existsIdOnReaded = savedReadedBooks.find(
      (bookId) => bookId === intBookId
    );
    if (existsIdOnReaded) {
      toast.error("You have Already Read this Books");
    } else {
      saveReadBooks(intBookId);
      toast("Books Added to Read List");
    }
  };
  const handleWishlistButton = () => {
    const savedReadedBooks = getSavedReadedBooks();
    const existsIdOnReaded = savedReadedBooks.find(
      (bookId) => bookId === intBookId
    );
    if (existsIdOnReaded) {
      toast.error(
        "You have Already Read this Books and cannot add it to Wishlist"
      );
    } else {
      toast("Books Added to WishList");
    }
  };
  return (
    <div className="flex flex-col md:flex-row w-[1170px] h-[771px] bg-gray-100 p-6 rounded-lg shadow-lg">
      {/* Book Image */}
      <div className="md:w-2/3 w-full p-4 flex items-center justify-center">
        <img
          src={book.image}
          alt="Book Cover"
          className="rounded max-w-full h-auto"
        />
      </div>

      {/* Book Details */}
      <div className="md:w-2/3 w-full p-4 flex flex-col justify-between">
        {/* Book Title and Author */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800">{book.bookName}</h1>
          <p className="text-lg text-black mt-2">By : {book.author}</p>
          <p className="text-xl text-black mt-4 border-b-2 border-t-2 py-3">
            {book.category}
          </p>
        </div>

        {/* Review */}
        <div className="flex">
          {/* <h2 className="text-lg font-extrabold text-black"></h2> */}
          <p className="text-black">
            <span className="text-lg font-extrabold text-black">Review : </span>
            {book.review}
          </p>
        </div>

        {/* Tags */}
        <div className="flex items-center border-b-2 pb-4">
          <h3 className="text-lg font-semibold text-black mr-4">Tag :</h3>
          {book.tags.map((tag, idx) => (
            <div key={idx}>
              <span className="rounded-md px-2 font-medium bg-[#23BE0A] bg-opacity-5 text-[#23BE0A] mr-2">
                #{tag}
              </span>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div>
          <ul className=" text-black">
            <li>
              <strong>Number of Pages:</strong> {book.totalPages}
            </li>
            <li>
              <strong>Publisher:</strong> {book.publisher}
            </li>
            <li>
              <strong>Year of Publishing:</strong> {book.yearOfPublishing}
            </li>
            <li>
              <strong>Rating:</strong> {book.rating}
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mt-6">
          <button
            onClick={handleReadButton}
            className="px-6 py-3 btn btn-success text-white rounded-lg shadow hover:bg-blue-600"
          >
            Read
          </button>
          <button
            onClick={handleWishlistButton}
            className="px-6 py-3 btn btn-primary text-white rounded-lg shadow hover:bg-blue-600"
          >
            Wishlist
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
