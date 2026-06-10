import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeDataContext } from "../context/ThemeProvider";

const NavBar2 = () => {
  let navigate = useNavigate();
  const [theme, setTheme] = useContext(ThemeDataContext);
  return (
    <div className=" bg-cyan-800 text-white p-4 flex items-center justify-center text-base w-full h-15 gap-10">
      <button
        onClick={() => {
          navigate("/");
        }}
        className=" bg-black px-10 py-2 rounded-2xl text-amber-500"
      >
        Home
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className=" bg-black px-10 py-2 rounded-2xl text-amber-500"
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className=" bg-black px-10 py-2 rounded-2xl text-amber-500"
      >
        Next
      </button>

      <button
        onClick={() => {
          if (theme === "dark") {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
        className=" bg-emerald-600 px-10 py-2 rounded-2xl text-amber-500"
      >
        {theme} theme
      </button>
    </div>
  );
};

export default NavBar2;
