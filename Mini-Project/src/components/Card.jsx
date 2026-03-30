import React from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img className="imageIcon" src={props.image} alt="" />
        <button className="saveBtn">
          Save
          <Bookmark size={20} strokeWidth={0.75} color="#e1e0e0" />
        </button>
      </div>
      <div className="center">
        <h3>
          {props.name} <span> {props.datePosted}</span>
        </h3>
        <h2>{props.post}</h2>
        <div className="tag">
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </div>
      </div>
      <div className="bottom">
        <div className="rate">
          <h3>${props.pay}/hr</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
