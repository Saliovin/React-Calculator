import { createContext } from "react";

const ThemeContext = createContext({
  theme: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle: () => {},
});

export default ThemeContext;
