import React from "react";

type displayProps = {
  value?: string;
};

const Display = ({ value = "" }: displayProps) => {
  return (
    <div className="display">
      <div className="displayText">{value}</div>
    </div>
  );
};

export default Display;
