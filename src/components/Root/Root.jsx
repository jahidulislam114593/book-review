import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
