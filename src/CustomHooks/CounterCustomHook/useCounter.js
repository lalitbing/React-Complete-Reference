import React, { useState } from 'react';

function useCounter(initialVal, amount) {
  const [count, setCount] = useState(initialVal);

  function increment() {
    return setCount((prevVal) => prevVal + amount);
  }

  function decrement() {
    return setCount((prevVal) => prevVal - amount);
  }
  function reset() {
    return setCount(initialVal);
  }

  return [count, increment, decrement, reset];
}

export default useCounter;
