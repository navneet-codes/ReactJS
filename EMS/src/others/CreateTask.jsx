import React, { useState } from "react";

import { useAuth } from "../context/useAuth";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const [category, setCategory] = useState("");
  const [assignedId, setAssignedId] = useState("");
  const [feedback, setFeedback] = useState(null);

  const { userData, createTask } = useAuth();

  const submitHandler = (e) => {
    e.preventDefault();

    const employee = userData.Employees.find((emp) => emp.id === assignedId);

    if (!employee) {
      setFeedback({ ok: false, text: "Please select an employee. " });

      return;
    }

    const task = {
      id: crypto.randomUUID(),
      taskTitle,
      taskDescription,
      taskDate,
      category,
      status: "new",
    };

    createTask(assignedId, task);

    setFeedback({ ok: true, text: `Task assigned to ${employee.firstName}.` });

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setCategory("");
    setAssignedId("");
  };

  return (
    <div className=" flex justify-center items-center ">
      <form
        className=" flex gap-4 flex-col w-[50%] p-10 mt-20 bg-black rounded-3xl "
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <label htmlFor="taskTitle">Task Title</label>
        <input
          id="taskTitle"
          name="taskTitle"
          className=" bg-gray-700"
          type="text"
          placeholder=" Make a Request"
          value={taskTitle}
          required
          onChange={(e) => {
            setTaskTitle(e.target.value);
          }}
        />

        <label htmlFor="taskDescription">Description</label>
        <textarea
          className=" bg-gray-700"
          name="taskDescription"
          id="taskDescription"
          cols={30}
          rows={10}
          value={taskDescription}
          required
          onChange={(e) => {
            setTaskDescription(e.target.value);
          }}
        ></textarea>

        <label htmlFor="taskDate">Date</label>
        <input
          id="taskDate"
          name="taskDate"
          className=" bg-gray-700"
          type="date"
          value={taskDate}
          required
          onChange={(e) => {
            setTaskDate(e.target.value);
          }}
        />

        <label htmlFor="assign">Assign to</label>
        <select
          id="assign"
          name="assign"
          className="bg-gray-700"
          value={assignedId}
          onChange={(e) => setAssignedId(e.target.value)}
          required
        >
          <option value="">Select an employee</option>
          {userData.Employees.map((emp) => (
            <option key={emp.id} value={emp.id}>
              {emp.firstName}
            </option>
          ))}
        </select>

        <label htmlFor="category">Category</label>
        <input
          className=" bg-gray-700"
          id="category"
          name="category"
          type="text"
          value={category}
          required
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />

        {feedback && (
          <p
            role="status"
            className={feedback.ok ? "text-green-400" : "text-red-400"}
          >
            {feedback.text}
          </p>
        )}

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
