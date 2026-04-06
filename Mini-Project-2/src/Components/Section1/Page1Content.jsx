import React from "react";
import RightContent from "./RightContent";
import LeftContent from "./LeftContent";

const Page1Content = (props) => {
  return (
    <div className=" h-[92vh] overflow-auto w-full py-10 flex justify-between items-center px-18">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default Page1Content;
