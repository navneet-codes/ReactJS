import React from "react";

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target="_blank">
        <img
          className=" w-50 h-60 object-cover rounded-4xl"
          src={props.elem.download_url}
          alt="img not found"
        />
      </a>
      <h3 className=" text-center font-bold text-xl text-white">
        {props.elem.author}
      </h3>
    </div>
  );
};

export default Card;
