import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className=" flex flex-col items-center mt-20 overflow-auto">
      <div className=" bg-red-400 flex justify-between w-[80%] mb-10 py-2 px-4">
        <h2 className=" w-1/5 ">Employee Name</h2>
        <h3 className=" w-1/5 ">New Task</h3>
        <h5 className=" w-1/5 ">Active Task</h5>
        <h5 className=" w-1/5 ">Completed</h5>
        <h5 className=" w-1/5 ">Failed</h5>
      </div>

      {authData.userData.Employees.map((element, idx) => {
        return (
          <div
            key={idx}
            className=" flex justify-between mb-10 bg-emerald-500 py-2 px-4 rounded-xl w-[80%] "
          >
            <h2 className=" text-xl w-1/5 ">{element.firstName}</h2>

            <h3 className=" text-xl w-1/5 text-blue-700 font-bold ">
              {element.taskCounts.newTask}
            </h3>

            <h5 className=" text-xl w-1/5 text-yellow-400 font-bold ">
              {element.taskCounts.active}
            </h5>

            <h5 className=" text-xl w-1/5 text-white font-bold ">
              {element.taskCounts.completed}
            </h5>

            <h5 className=" text-xl w-1/5 text-red-700 font-bold">
              {element.taskCounts.failed}
            </h5>
          </div>
        );
      })}
    </div>
  );
};

export default AllTask;
