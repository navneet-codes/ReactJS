import React from "react";
import "remixicon/fonts/remixicon.css";
import ArrowText from "./ArrowText";
import HeroText from "./HeroText";

const LeftContent = () => {
  return (
    <div className=" h-full w-1/3 flex flex-col justify-between text-black">
      <HeroText />
      <ArrowText />
    </div>
  );
};

export default LeftContent;
