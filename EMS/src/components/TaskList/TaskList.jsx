import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ data, onStatusChange }) => {
  return (
    <div className=" flex flex-wrap no-scrollbar overflow-y-auto">
      {data.tasks.map((task) => {
        return (
          <TaskCard key={task.id} task={task} onStatusChange={onStatusChange} />
        );
      })}
    </div>
  );
};

export default TaskList;
