import React from "react";
import Header from "../../others/Header";
import CreateTask from "../../others/CreateTask";
import AllTask from "../../others/AllTask";

const AdminDashboard = ({ data, handleLogout }) => {
  return (
    <div>
      <Header data={data} handleLogout={handleLogout} />
      <main>
        <h1 className="sr-only">Admin dashboard</h1>
        <CreateTask />
        <AllTask />
      </main>
    </div>
  );
};

export default AdminDashboard;
