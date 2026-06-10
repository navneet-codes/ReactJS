import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" bg-blue-900 text-white p-4 flex items-center justify-between text-base w-full h-15">
      <div className=" text-2xl">Nav-Code</div>
      <div className=" flex flex-wrap gap-4">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="Contact">Contact</Link>
      </div>
    </div>
  );
};

export default NavBar;
