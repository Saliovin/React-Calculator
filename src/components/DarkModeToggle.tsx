import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const DarkModeToggle = () => {
  const { toggle } = useContext(ThemeContext);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = (e: React.MouseEvent) => toggle();

  return <button className="darkModeToggle" onClick={handleClick}></button>;
};

export default DarkModeToggle;
