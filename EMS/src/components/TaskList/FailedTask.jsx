import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className=" flex-1 w-110 rounded-4xl pt-15 px-8 bg-purple-500 m-10 ">
      <div className=" flex justify-between">
        <h3 className=" bg-red-800 rounded-4xl h-10 w-30 flex justify-center items-center">
          {data.category}
        </h3>
        <h4 className=" flex justify-center items-center font-bold">
          {data.taskDate}
        </h4>
      </div>
      <h3 className=" text-gray-900 text-2xl font-bold italic w-full pt-4 flex justify-center">
        {data.taskTitle}
      </h3>
      <p className=" w-full  flex justify-center">{data.taskDescription}</p>
      <div className=" flex w-full justify-between mt-4">
        <button className=" bg-green-600 py-1 px-2 text-sm">
          Mark as Completed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
