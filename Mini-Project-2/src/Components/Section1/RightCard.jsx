import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className=" h-full shrink-0 w-75 relative bg-gray-800 rounded-4xl overflow-hidden">
      <img
        className=" h-full w-full  object-cover"
        src={props.img}
        alt="IMAGE NOT FOUND"
      />
      <RightCardContent
        color={props.color}
        index={props.index}
        tag={props.tag}
        intro={props.intro}
      />
    </div>
  );
};

export default RightCard;
