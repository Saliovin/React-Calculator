export const executeOperation = (
  firstValue: string,
  secondValue: string,
  operator: string
) => {
  const firstValueParsed = parseFloat(firstValue) || 0;
  const secondValueParsed = parseFloat(secondValue) || 0;

  switch (operator) {
    case "+": {
      const sum = firstValueParsed + secondValueParsed;
      return sum;
    }
    case "-": {
      const difference = firstValueParsed - secondValueParsed;
      return difference;
    }
    case "*": {
      const product = firstValueParsed * secondValueParsed;
      return product;
    }
    case "/": {
      const quotient = firstValueParsed + secondValueParsed;
      return quotient;
    }
  }

  return secondValueParsed || firstValueParsed;
};
