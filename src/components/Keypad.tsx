import React from "react";
import Key from "./Key";

type keypadProps = {
  handleOperation: (operator: string) => void;
  handleKey: (value: string) => void;
  handleFunction: (func: string) => void;
};

const Keypad = ({
  handleOperation,
  handleKey,
  handleFunction,
}: keypadProps) => {
  return (
    <div className="keypad">
      <div>
        <Key
          className="functionKey keyAC"
          character="AC"
          handleClick={handleFunction}
        />
        <Key
          className="functionKey keyC"
          character="C"
          handleClick={handleFunction}
        />
        <Key
          className="functionKey key+/-"
          character="+/-"
          handleClick={handleFunction}
        />
        <Key
          className="operatorKey key/"
          character="/"
          handleClick={handleOperation}
        />
      </div>
      <div>
        <Key className="numberKey key7" character="7" handleClick={handleKey} />
        <Key className="numberKey key8" character="8" handleClick={handleKey} />
        <Key className="numberKey key9" character="9" handleClick={handleKey} />
        <Key
          className="operatorKey key*"
          character="*"
          handleClick={handleOperation}
        />
      </div>
      <div>
        <Key className="numberKey key4" character="4" handleClick={handleKey} />
        <Key className="numberKey key5" character="5" handleClick={handleKey} />
        <Key className="numberKey key6" character="6" handleClick={handleKey} />
        <Key
          className="operatorKey key-"
          character="-"
          handleClick={handleOperation}
        />
      </div>
      <div>
        <Key className="numberKey key1" character="1" handleClick={handleKey} />
        <Key className="numberKey key2" character="2" handleClick={handleKey} />
        <Key className="numberKey key3" character="3" handleClick={handleKey} />
        <Key
          className="operatorKey key+"
          character="+"
          handleClick={handleOperation}
        />
      </div>
      <div>
        <Key className="numberKey key0" character="0" handleClick={handleKey} />
        <Key className="numberKey key." character="." handleClick={handleKey} />
        <Key
          className="operatorKey key="
          character="="
          handleClick={handleOperation}
        />
      </div>
    </div>
  );
};
export default Keypad;
