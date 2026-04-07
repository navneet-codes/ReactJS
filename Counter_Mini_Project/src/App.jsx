import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [first, setfirst] = useState(0);

  function increment() {
    setfirst(first + 1);
  }

  function decrement() {
    setfirst(first - 1);
  }

  return (
    <div className=" p-20">
      <div className=" bg-gray-500 w-full h-[60vh] text-6xl text-white flex items-center  text-center justify-center rounded-2xl">
        {first}
      </div>
      <div className=" flex gap-2">
        <button
          onClick={increment}
          className=" bg-gray-900 text-white text-2xl items-center text-center  w-1/2 p-10 mt-10 rounded-4xl"
        >
          increment
        </button>
        <button
          onClick={decrement}
          className=" bg-gray-900 text-white text-2xl items-center text-center w-1/2 p-10 mt-10 rounded-4xl"
        >
          decreament
        </button>
      </div>
    </div>
  );
};

export default App;
