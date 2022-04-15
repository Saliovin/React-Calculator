import React from "react";

type KeyProps = {
  character: string;
  handleClick: (character: string) => void;
  className?: string;
};

const Key = ({ character, handleClick, className }: KeyProps) => {
  return (
    <button
      className={`key ${className}`}
      onClick={() => handleClick(character)}
    >
      {character}
    </button>
  );
};

export default Key;
