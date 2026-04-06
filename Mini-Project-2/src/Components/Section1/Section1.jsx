import React from "react";
import Navbar from "./Navbar";
import Page1Content from "./Page1Content";

const Section1 = (props) => {
  return (
    <div>
      <div className="h-screen w-full overflow-hidden ">
        <Navbar />
        <Page1Content users={props.users} />
      </div>
    </div>
  );
};

export default Section1;
