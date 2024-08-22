import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 rounded-lg mt-20">
      <div className="w-[1170px] h-[554px] flex items-center justify-center mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full">
          {/* Text Section */}
          <div className="max-w-lg mb-8 lg:mb-0 w-full h-full flex items-center">
            <div>
              <h1 className="text-5xl font-bold text-black mb-4 leading-tight">
                Books to freshen up <br />
                your bookshelf
              </h1>
              <Link
                to="/listedbook"
                className="inline-block bg-green-500 text-white text-lg font-semibold rounded px-6 py-3 mt-4 hover:bg-green-600"
              >
                View The List
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex w-full h-full items-center justify-end">
            <img
              src="https://i.ibb.co/jMTWM3F/13209950-5151818.png"
              alt="Book Cover"
              className="max-w-full max-h-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
