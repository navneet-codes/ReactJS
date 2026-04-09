import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    setData([]);
    let response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=30`,
    );
    setData(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [index],
  );

  let printUserData = (
    <h3 className=" absolute top-1/2 translate-y-1/2 text-gray-400 text-5xl">
      {" "}
      Loading...
    </h3>
  );

  if (data.length > 0) {
    {
      printUserData = data.map((elem) => {
        return (
          <div key={elem.id}>
            <Card elem={elem} />
          </div>
        );
      });
    }
  }

  return (
    <div className=" flex flex-col bg-black min-h-screen items-center">
      <h1 className=" text-white font-bold italic py-10 text-4xl">
        Art Gallery
      </h1>
      <div className=" mt-20 flex flex-wrap h-full gap-8 justify-center overflow-hidden">
        {printUserData}
      </div>
      <div className=" py-20 mt-20 flex flex-wrap gap-10">
        <button
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
            }
          }}
          className=" text-white font-bold bg-blue-800 w-40 py-5 rounded-4xl"
        >
          Prev
        </button>
        <h1 className=" font-bold text-white bg-gray-800 w-20 py-5 rounded-xl text-center">
          {index}
        </h1>
        <button
          onClick={() => {
            setIndex(index + 1);
          }}
          className=" text-white font-bold bg-blue-800 w-40 py-5 rounded-4xl"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
