import React from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

const App = () => {
  return (
    <div className=" h-dvh w-full bg-linear-to-tl from-[#BBD2C5] from-10% to-[#536976] text-white  ">
      {/* <Login /> */}
      <EmployeeDashboard />
    </div>
  );
};

export default App;
