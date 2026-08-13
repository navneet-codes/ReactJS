import React, { useContext, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [session, setSession] = useState(() => {
    const raw = localStorage.getItem("loggedInUser");
    // console.log("raw : ", raw);
    return raw ? JSON.parse(raw) : null;
  });
  const authData = useContext(AuthContext);
  // console.log("authData :> ", authData);
  const handleLogin = (email, password) => {
    if (!authData.userData) return;

    const admin = authData.userData.Admin.find(
      (a) => a.email === email && a.password === password,
    );

    const employee = authData.userData.Employees.find(
      (a) => a.email === email && a.password === password,
    );

    const found = admin
      ? { role: "admin", data: admin }
      : employee
        ? { role: "employee", data: employee }
        : null;

    if (!found) return alert("Invalid Credentials");

    setSession(found);
    localStorage.setItem("loggedInUser", JSON.stringify(found));
  };

  const handleLogout = () => {
    setSession(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <div className=" min-h-screen w-full flex flex-col bg-linear-to-tl from-[#BBD2C5] from-10% to-[#536976] text-white  ">
      {!session ? (
        <Login handleLogin={handleLogin} />
      ) : session.role == "admin" ? (
        <AdminDashboard data={session.data} handleLogout={handleLogout} />
      ) : session.role == "employee" ? (
        <EmployeeDashboard data={session.data} handleLogout={handleLogout} />
      ) : null}
    </div>
  );
};

export default App;
