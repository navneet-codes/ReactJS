import React from "react";
import Card from "./components/card1";

const App = () => {
  return (
    <div>
      <div className="card-container">
        <Card
          user="Navneet"
          age={22}
          image="https://images.unsplash.com/photo-1652992252915-f9b6592a61a3?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          user="Aman"
          age={23}
          image="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <Card
          user="Mukul"
          age={30}
          image="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default App;
