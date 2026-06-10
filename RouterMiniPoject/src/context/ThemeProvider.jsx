import React, { useState } from "react";
import { createContext } from "react";

export const ThemeDataContext = createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeDataContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeDataContext.Provider>
  );
};

export default ThemeProvider;
