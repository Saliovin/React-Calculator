import React, { ReactNode, useEffect, useState } from "react";
import ThemeContext from "../contexts/ThemeContext";

type propsType = {
  children: ReactNode;
};
const ThemeWrapper = (props: propsType) => {
  const [theme, setTheme] = useState(false);
  const toggle = () => {
    setTheme(theme ? false : true);
  };

  useEffect(() => {
    if (theme) document.body.classList.add("dark-theme");
    else document.body.classList.remove("dark-theme");
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeWrapper;
