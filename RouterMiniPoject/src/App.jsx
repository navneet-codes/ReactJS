import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/contact";
import NavBar from "./Components/NavBar";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import NavBar2 from "./Components/NavBar2";

const App = () => {
  return (
    <div className=" bg-black flex flex-col h-dvh text-4xl text-amber-300 ">
      <NavBar />
      <NavBar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />}>
          <Route path="/About/men" element={<Men />} />
          <Route path="/About/women" element={<Women />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
