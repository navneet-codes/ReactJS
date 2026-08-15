import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ data, onStatusChange }) => {
  return (
    <div className=" flex flex-wrap no-scrollbar overflow-y-auto">
      <h2 className="sr-only">Your tasks</h2>
      {data.tasks.length === 0 ? (
        <p>No Task assigned yet</p>
      ) : (
        data.tasks.map((task) => {
          return (
            <TaskCard
              key={task.id}
              task={task}
              onStatusChange={onStatusChange}
            />
          );
        })
      )}
    </div>
  );
};

export default TaskList;
