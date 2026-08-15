import React, { useContext } from "react";
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
      <TaskListNumbers data={data} />
      <TaskList data={data} onStatusChange={handleStatusChange} />
    </div>
  );
};

export default EmployeeDashboard;
