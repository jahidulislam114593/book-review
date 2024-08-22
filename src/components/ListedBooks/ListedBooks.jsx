import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import { getSavedReadedBooks, getWishListBooks } from "../Utility/localStorage";
import CardBook from "../CardBook/CardBook";
import Wishlisted from "../Wishlisted/Wishlisted";
const ListedBooks = () => {
  const [activeTab, setActiveTab] = useState("read");
  const [bookReaded, setBookReaded] = useState([]);
  const [wishList, setWishList] = useState([]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const books = useLoaderData();
  useEffect(() => {
    const storedBooks = getSavedReadedBooks();
    const wishlistBooks = getWishListBooks();
    if (books.length > 0) {
      const readedBooks = books.filter((book) =>
        storedBooks.includes(book.bookId)
      );
      const wishListed = books.filter((book) =>
        wishlistBooks.includes(book.bookId)
      );
      setBookReaded(readedBooks);
      setWishList(wishListed);
      // console.log(books, storedBooks, readedBooks);
    }
  }, []);
  return (
    <div>
      <div className="mt-10">
        <h2 className="text-3xl text-black text-center bg-gray-100 rounded-lg font-bold py-10">
          Books
        </h2>
      </div>
      <div className="flex justify-center pt-5">
        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="btn border-none bg-[#23BE0A] font-bold text-white m-1"
          >
            Sorted By
            <IoIosArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 text-white rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full border-b border-gray-300 ">
        <div className="flex ">
          <button
            onClick={() => handleTabChange("read")}
            className={`py-2 px-4 text-sm font-medium transition-all duration-200 ${
              activeTab === "read"
                ? "border border-gray-300 border-b-transparent rounded-t-md text-black"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Read Books
          </button>
          <button
            onClick={() => handleTabChange("wishlist")}
            className={`py-2 px-4 text-sm font-medium transition-all duration-200 ${
              activeTab === "wishlist"
                ? "border border-gray-300 border-b-transparent rounded-t-md text-black"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Wishlist Books
          </button>
        </div>
      </div>

      <div className="pt-4">
        {activeTab === "read" && (
          <div className="pb-10">
            {bookReaded.map((book) => (
              <CardBook book={book} key={book.bookId}></CardBook>
            ))}
          </div>
        )}
        {activeTab === "wishlist" && (
          <div className="pb-10">
            {wishList.map((wish) => (
              <Wishlisted wish={wish} key={wish.bookId}></Wishlisted>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListedBooks;
