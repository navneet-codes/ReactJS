import React, { useMemo, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

import { useAuth } from "./context/useAuth";

const App = () => {
  const [session, setSession] = useState(() => {
    const raw = sessionStorage.getItem("loggedInUser");
    return raw ? JSON.parse(raw) : null;
  });
  const { userData } = useAuth();

  //hadling Log out feature
  const handleLogout = () => {
    setSession(null);
    sessionStorage.removeItem("loggedInUser");
  };

  const currentUser = useMemo(() => {
    if (!session) return null;
    const pool = session.role === "admin" ? userData.Admin : userData.Employees;
    return pool?.find((u) => u.id === session.id) ?? null;
  }, [session, userData]);

  const handleLogin = (email, password) => {
    if (!userData) return;

    const admin = userData.Admin.find(
      (a) => a.email === email && a.password === password,
    );

    const employee = userData.Employees.find(
      (a) => a.email === email && a.password === password,
    );

    const found = admin
      ? { role: "admin", id: admin.id }
      : employee
        ? { role: "employee", id: employee.id }
        : null;

    if (!found) return alert("Invalid Credentials");

    setSession(found);
    sessionStorage.setItem("loggedInUser", JSON.stringify(found));
  };

  return (
    <div className=" min-h-screen w-full flex flex-col bg-linear-to-tl from-[#BBD2C5] from-10% to-[#536976] text-white  ">
      {!currentUser ? (
        <Login handleLogin={handleLogin} />
      ) : session.role === "admin" ? (
        <AdminDashboard data={currentUser} handleLogout={handleLogout} />
      ) : session.role === "employee" ? (
        <EmployeeDashboard data={currentUser} handleLogout={handleLogout} />
      ) : null}
    </div>
  );
};

export default App;
