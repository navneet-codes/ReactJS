import React from "react";
import Section1 from "./Components/Section1/Section1";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1555421689-43cad7100750?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "blue",
      intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vero repudiandae maxime!",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1585554414787-09b821c321c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "green",
      intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vero repudiandae maxime!",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1752170080622-18196de87763?q=80&w=898&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "orange",
      intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vero repudiandae maxime!",
      tag: "underbend",
    },
  ];

  return (
    <div>
      <Section1 users={users} />
    </div>
  );
};

export default App;
