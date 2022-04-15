import React, { useState } from "react";
import Display from "./Display";
import Keypad from "./Keypad";
import { executeOperation } from "../utils";

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [currentOperator, setCurrentOperator] = useState("+");

  const handleKey = (key: string) => {
    if (currentValue.length < 8) {
      setCurrentValue(currentValue + key);
    }
  };

  const handleOperation = (operator: string) => {
    const result = executeOperation(prevValue, currentValue, currentOperator);
    setPrevValue(result.toString());
    setCurrentValue("");
    setCurrentOperator(operator);
  };

  const handleFunction = (func: string) => {
    switch (func) {
      case "AC": {
        setCurrentValue("");
        setPrevValue("");
        setCurrentOperator("+");
        break;
      }
      case "C": {
        const valueClear = currentValue || prevValue;
        setCurrentValue(valueClear.slice(0, -1));
        setPrevValue("");
        break;
      }
      case "+/-": {
        const valueParsed = parseFloat(currentValue || prevValue);
        const value = valueParsed.toString();
        const setValue = currentValue ? setCurrentValue : setPrevValue;
        if (valueParsed < 0) {
          setValue(value.slice(1));
        } else setValue("-" + value);
        break;
      }
    }
  };

  return (
    <div className="calculator">
      <Display value={currentValue || prevValue} />
      <Keypad
        handleOperation={handleOperation}
        handleKey={handleKey}
        handleFunction={handleFunction}
      />
    </div>
  );
};

export default Calculator;
