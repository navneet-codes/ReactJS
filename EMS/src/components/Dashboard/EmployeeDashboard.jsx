import React from "react";
import Header from "../../others/Header";
import TaskListNumbers from "../../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data, handleLogout }) => {
  console.log(data);
  return (
    <div className=" flex-1 flex flex-col">
      <Header data={data} handleLogout={handleLogout} />
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
