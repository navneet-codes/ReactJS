import React from "react";

const card1 = (props) => {
  return (
    <div className="Card1">
      <img src={props.image} alt="image not found" />
      <h1>
        {props.user} , {props.age}
      </h1>
      <p>this is just a random text inside the card of {props.user}</p>
      <button>view profile</button>
    </div>
  );
};

export default card1;
