import React from "react";
import Header from "../../others/Header";
import TaskListNumbers from "../../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

import { useAuth } from "../../context/useAuth";

const EmployeeDashboard = ({ data, handleLogout }) => {
  const { updateTaskStatus } = useAuth();

  const handleStatusChange = (taskId, status) => {
    updateTaskStatus(data.id, taskId, status);
  };

  return (
    <div className=" flex-1 flex flex-col">
      <Header data={data} handleLogout={handleLogout} />
      <main className=" flex-1 flex flex-col">
        <h1 className=" sr-only">Employee dashboard</h1>
        <TaskListNumbers data={data} />
        <TaskList data={data} onStatusChange={handleStatusChange} />
      </main>
    </div>
  );
};

export default EmployeeDashboard;
