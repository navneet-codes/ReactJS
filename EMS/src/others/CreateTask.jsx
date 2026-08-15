import React, { useContext, useState } from "react";

import { useAuth } from "../context/useAuth";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assign, setAssign] = useState("");
  const [category, setCategory] = useState("");

  const { setUserData } = useAuth();

  const submitHandler = (e) => {
    e.preventDefault();

    const task = {
      id: crypto.randomUUID(),
      taskTitle,
      taskDescription,
      taskDate,
      category,
      status: "new",
    };

    // const data = JSON.parse(localStorage.getItem("Employees"));

    // data.forEach((elem) => {
    //   if (assign === elem.firstName) {
    //     elem.tasks.push(task);
    //   }
    // });

    setUserData((prev) => ({
      ...prev,
      Employees: prev.Employees.map((emp) =>
        emp.firstName === assign
          ? { ...emp, tasks: [...emp.tasks, task] }
          : emp,
      ),
    }));

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssign("");
    setCategory("");
  };

  return (
    <div className=" flex justify-center items-center ">
      <form
        className=" flex flex-col w-[50%] p-10 mt-20 bg-black rounded-3xl "
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <h3>Task Title</h3>
        <input
          className=" bg-gray-700"
          type="text"
          placeholder=" Make a Request"
          value={taskTitle}
          onChange={(e) => {
            setTaskTitle(e.target.value);
          }}
        />
        <br />
        <h3>Description</h3>
        <textarea
          className=" bg-gray-700"
          name=""
          id=""
          cols={30}
          rows={10}
          value={taskDescription}
          onChange={(e) => {
            setTaskDescription(e.target.value);
          }}
        ></textarea>
        <br />
        <h3>Date</h3>
        <input
          className=" bg-gray-700"
          type="date"
          value={taskDate}
          onChange={(e) => {
            setTaskDate(e.target.value);
          }}
        />
        <br />
        <h3>Assign</h3>
        <input
          className=" bg-gray-700"
          type="text"
          value={assign}
          onChange={(e) => {
            setAssign(e.target.value);
          }}
        />
        <br />
        <h3>Category</h3>
        <input
          className=" bg-gray-700"
          type="text"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <br />

        <div className=" flex justify-center ">
          <button className="  bg-red-600 w-30 h-10 rounded-4xl active:scale-90 font-bold">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
