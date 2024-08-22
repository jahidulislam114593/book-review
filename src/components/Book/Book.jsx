import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;
  return (
    <Link to={`/bookdetails/${bookId}`} className="block">
      <div className="card border-2 shadow-xl cursor-pointer">
        <div className="px-10 py-10 bg-gray-200  rounded-lg">
          <img src={image} alt="Shoes" className="rounded" />
        </div>
        <div className="card-body text-black">
          <div className="flex">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="rounded-md px-2 bg-[#23BE0A] bg-opacity-5 text-[#23BE0A]  mr-2"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="card-title text-2xl font-bold">{bookName}</h2>
          <p className="text-black border-b-2 border-dashed border-gray-300 pb-4 mb-4">
            By : {author}
          </p>
          <div className="card-actions flex justify-between">
            <div>
              <p>{category}</p>
            </div>
            <div className="flex items-center justify-center">
              <p className="pr-2">{rating}</p>
              <CiStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
