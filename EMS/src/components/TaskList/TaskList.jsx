import React from "react";
import AcceptTask from "./AcceptTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";

const TaskList = ({ data }) => {
  return (
    <div className=" flex flex-wrap no-scrollbar overflow-y-auto">
      {data.tasks.map((elem) => {
        if (elem.active) {
          return <AcceptTask key={elem.id} data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={elem.id} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={elem.id} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={elem.id} data={elem} />;
        }
      })}
    </div>
  );
};

export default TaskList;
