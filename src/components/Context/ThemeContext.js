import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
// const ThemeContext = createContext(["green", () => {}]);

export const ThemeProvider = props => {
  const [color, setColor] = useState("green");

  const themeSetting = {
    color,
    setColor
  };

  return (
    <ThemeContext.Provider value={themeSetting}>
      {props.children}
    </ThemeContext.Provider>
  );
};
