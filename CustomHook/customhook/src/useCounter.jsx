import React from "react";
import { useState } from "react";

function useCounter() {
  const [num, setNum] = useState(0);
  const increment = () => {
    setNum((prevNum) => prevNum + 1);
  };
  const descrement = () => {
    setNum((prevNum) => prevNum - 1);
  };
  const reset = () => {
    setNum(0);
  };
  return [num, increment, descrement, reset];
}

export default useCounter;
