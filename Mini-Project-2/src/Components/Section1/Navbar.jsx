import React from "react";

const Navbar = () => {
  return (
    <div className="h-[8vh] w-full bg-white flex items-center justify-between py-10 px-18">
      <h4 className="bg-black text-white px-7 py-2 rounded-full">
        Taget Audience
      </h4>
      <button className=" bg-gray-200 text-black px-6 py-2 uppercase rounded-full tracking-widest text-sm font-semibold">
        digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
