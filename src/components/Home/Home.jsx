import React from "react";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
  return (
    <div>
      {/* <h2 className="text-3xl text-black text-center font-bold py-10">Home</h2> */}
      <Banner></Banner>
      <Books></Books>
    </div>
  );
};

export default Home;
