import { useState } from "react";

const useToggle = (defaultValue: boolean) => {
  const [value, setValue] = useState(defaultValue);

  const toggle = () => {
    setValue(value ? false : true);
  };

  return [value, toggle];
};

export default useToggle;
