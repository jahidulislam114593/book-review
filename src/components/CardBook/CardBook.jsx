import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
const CardBook = ({ book }) => {
  const {
    bookId,
    bookName,
    image,
    author,
    review,
    totalPages,
    rating,
    category,
    publisher,
    tags,
    yearOfPublishing,
  } = book;

  return (
    <div className="flex p-6 bg-white rounded-lg border-2 mt-4">
      <div className="md:w-1/3 w-full flex items-center justify-center">
        <img src={image} alt={bookName} />
      </div>
      <div className="flex flex-col w-full">
        <div>
          <h2 className="text-xl font-bold text-black mb-2">{bookName}</h2>
          <p className="text-sm text-black font-bold">
            By: <span className="text-black">{author}</span>
          </p>
          <div className="flex items-center my-4 space-x-2">
            <p className="text-black font-bold">Tag </p>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-green-100 text-[#23BE0A] text-xs font-medium px-3 py-2 rounded"
              >
                #{tag}
              </span>
            ))}
            <IoLocationOutline className="text-black" />
            <span className="text-sm text-black">
              Year of Publishing: {yearOfPublishing}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-500 mt-2 border-b-2 pb-6">
            <GoPeople className="mr-2" />
            <span className="mr-2">Publisher: {publisher}</span>
            <HiOutlineDocumentChartBar />
            <span className="ml-2">Page {totalPages}</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <span className="text-[#328EFF] bg-[#328EFF] bg-opacity-15 font-semibold px-3 py-2 rounded-full">
              Category: {category}
            </span>
            <span className=" bg-[#FFAC33] bg-opacity-15 text-[#FFAC33] font-semibold px-3 py-2 rounded-full">
              Rating: {rating}
            </span>
            <button className="bg-[#23BE0A] rounded-full font-bold px-3 py-2 text-white hover:bg-green-700">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBook;
