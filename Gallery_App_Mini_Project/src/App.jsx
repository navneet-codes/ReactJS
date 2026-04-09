import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    setData([]);
    let response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
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
    <h3 className=" absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 text-gray-400 text-3xl">
      {" "}
      Loading...
    </h3>
  );

  if (data.length > 0) {
    {
      printUserData = data.map((elem, idx) => {
        return (
          <div key={idx}>
            <a href={elem.url} target="_blank">
              <img
                className=" w-50 h-60 object-cover rounded-4xl"
                src={elem.download_url}
                alt="img not found"
              />
            </a>
            <h3 className=" text-center text-white">{elem.author}</h3>
          </div>
        );
      });
    }
  }

  return (
    <div className=" flex flex-col bg-black h-screen items-center">
      <div className=" mt-20 flex flex-wrap h-[80%] gap-8 justify-center">
        {printUserData}
      </div>
      <div className="">
        <button
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
            }
          }}
          className=" text-white bg-blue-800 w-40 py-5 rounded-4xl"
        >
          Prev
        </button>

        <button
          onClick={() => {
            setIndex(index + 1);
          }}
          className=" text-white bg-blue-800 w-40 py-5 rounded-4xl"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
