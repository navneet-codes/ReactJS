import { useState } from "react";
import "./index.css";

const App = () => {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ Title, Description });
    setTask(copyTask);

    setTitle("");
    setDescription("");
  };

  const deleteBtnHandler = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);

    setTask(copyTask);
  };

  return (
    <div className=" lg:flex h-screen bg-black text-white overflow-hidden">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex lg:h-screen lg:w-1/2 gap-4 flex-col items-start p-10"
      >
        <h1 className=" text-3xl font-bold">Add Notes</h1>
        <input
          className=" px-4 text-white outline-none mb-5 font-medium py-2 w-full border-4 border-white h-15 rounded"
          type="text"
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Enter Title here"
        />
        <textarea
          className=" px-4 resize-none text-white outline-none py-2 w-full border-4 h-52 rounded"
          name="noteDetail"
          value={Description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          id="noteDescriptio"
          placeholder="Write Details"
        ></textarea>
        <button className=" active:scale-95 rounded-2xl mt-10 text-black font-bold bg-white w-full border-4 border-white h-15">
          Add Note
        </button>
      </form>
      <div className=" overflow-auto lg:border-l-4 bg-gray-800 lg:w-1/2 lg:h-screen p-10">
        <h1 className=" text-3xl font-bold">Recent Notes</h1>
        <div className=" flex flex-wrap gap-5 mt-5 h-full overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className=" flex justify-between flex-col p-5 h-62 w-52 rounded-2xl bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <div>
                  <h1 className=" leading-tight text-xl text-black font-bold text-center">
                    {elem.Title}
                  </h1>
                  <p className=" text-gray-800 text-center">
                    {elem.Description}
                  </p>
                </div>

                <button
                  onClick={() => {
                    deleteBtnHandler(idx);
                  }}
                  className=" rounded-3xl w-full cursor-pointer active:scale-95 bg-red-600 py-1 font-bold"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
