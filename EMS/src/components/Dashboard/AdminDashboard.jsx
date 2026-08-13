import React from "react";
import Header from "../../others/Header";
import CreateTask from "../../others/CreateTask";
import AllTask from "../../others/AllTask";

const AdminDashboard = ({ data, handleLogout }) => {
  return (
    <div>
      <Header data={data} handleLogout={handleLogout} />
      <CreateTask data={data} />
      <AllTask data={data} />
    </div>
  );
};

export default AdminDashboard;
