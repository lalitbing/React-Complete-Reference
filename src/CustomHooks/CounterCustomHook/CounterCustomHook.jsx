import React from 'react';
import useDocumentTitle from '../useDocumentTitle';
import useCounter from './useCounter';

const CounterCustomHook = () => {
  const [count, increment, decrement, reset] = useCounter(0, 5);

  const [num] = useDocumentTitle(count);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>+</button>
      <p className="leftAlign">
        -useCounter Custom Hook.
        <br />
        -Accepts two parameters:(initialVal, amount)
        <br />
        -returns an array consisting of: [count, increment, decrement,reset]
      </p>
      <h1>useDocumentTitleHook</h1>
      <p className="leftAlign">
        -useDocumentTitle Hook changes the title of the document.
      </p>
    </div>
  );
};

export default CounterCustomHook;
