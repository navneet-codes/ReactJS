import React from "react";

const RightCardContent = (props) => {
  return (
    <div>
      <div className=" p-6 absolute top-0 left-0 h-full w-full flex flex-col justify-between">
        <h2 className=" bg-white rounded-full h-10 w-10 flex justify-center items-center">
          {props.index + 1}
        </h2>
        <div>
          <p className=" text-lg text-white leading-relaxed mb-16">
            {props.intro}
          </p>
          <div className=" flex justify-between">
            <button
              style={{ backgroundColor: props.color }}
              className=" text-white font-medium px-4 py-2 rounded-full"
            >
              {props.tag}
            </button>
            <button className=" text-white font-bold px-4 py-2 rounded-full">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
