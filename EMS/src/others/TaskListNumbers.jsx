import React from "react";

const TaskListNumbers = ({ data }) => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-10 px-5 w-full">
      <div className=" bg-green-500 min-w-90 max-w-full rounded-4xl p-10 flex flex-col justify-between">
        <h2 className=" text-6xl font-semibold">{data.taskCounts.active}</h2>
        <h3 className=" text-6xl font-medium">Active Task</h3>
      </div>

      <div className=" bg-blue-500 min-w-90 rounded-4xl p-10 flex flex-col justify-between">
        <h2 className=" text-6xl font-semibold">{data.taskCounts.newTask}</h2>
        <h3 className=" text-6xl font-medium">New Task</h3>
      </div>

      <div className=" bg-red-500 min-w-90 rounded-4xl p-10 flex flex-col justify-between">
        <h2 className=" text-6xl font-semibold">{data.taskCounts.completed}</h2>
        <h3 className=" text-6xl font-medium">Completed Task</h3>
      </div>

      <div className=" bg-yellow-500 min-w-90 rounded-4xl p-10 flex flex-col justify-between">
        <h2 className=" text-6xl font-semibold">{data.taskCounts.failed}</h2>
        <h3 className=" text-6xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
