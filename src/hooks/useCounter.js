import { useState } from "react";

export const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    // Evitar que baje de 1
    setCounter((counter) => Math.max(counter - 1, 1));
  };

  return { counter, increment, decrement };
};
