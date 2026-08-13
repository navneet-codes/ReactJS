import React from "react";

const Header = ({ data, handleLogout }) => {
  return (
    <div className=" flex flex-row justify-between items-center bg-[#1c3e50] p-3">
      <div className=" text-xl">
        Hello <br />
        <span className=" text-3xl font-semibold">{data.firstName}👋</span>
      </div>
      <div className=" pr-6">
        <button
          onClick={handleLogout}
          className=" bg-red-600 p-2 rounded-2xl active:scale-110 duration-100"
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Header;
