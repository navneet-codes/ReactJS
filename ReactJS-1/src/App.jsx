import React from "react";
import Card from "./component/card1";

const App = () => {
  return (
    <div>
      <div className="card">
        <h1>Navneet</h1>
        <p>this is just a random text inside the card of Navneet</p>
        {Card()}
      </div>
    </div>
  );
};

export default App;
