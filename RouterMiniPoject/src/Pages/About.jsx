import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div
      className=" bg-black w-full h-full flex flex-col items-center justify-center text-4xl
   text-amber-300"
    >
      <div className=" flex flex-wrap justify-center gap-9 p-12">
        <Link to="/About/Men">Men</Link>
        <Link to="/About/Women">Women</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default About;
