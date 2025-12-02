import React, { useState, useMemo } from 'react';

const Hooks4Memo = () => {
  const [num, setNum] = useState(1);
  const [inc, setInc] = useState(0);

  const factorialFun = (n) => {
    return n <= 0 ? 1 : n * factorialFun(n - 1);
  };
  const factorial = useMemo(() => factorialFun(num), [num]);

  function incHandler() {
    console.log('Re-rendered');
    setInc((i) => i + 1);
  }

  return (
    <div className="main">
      <h1>useMemo - Factorial Example</h1>
      <div>
        <input
          type="number"
          value={num}
          onChange={(e) => {
            setNum(e.target.value);
          }}
        />
        <h2>
          Factorial of {num} is: ' {factorial} '
        </h2>
        <button onClick={incHandler}>Increase</button>
      </div>
      <p className="leftAlign">
        useMemo and useCallback hooks are similar in the sense that,
        <br />
        useMemo memoizes the Value.
        <br />
        useCallback memoizes the function
        <br /> useMemo is used to Memoize the value. Memoize means caching.
        <br />
        It is implemented on slow functions which take time to give results.
        <br />
        Memoizing is done so that the funciton is only rendered again when the
        value changes.
      </p>
    </div>
  );
};

export default Hooks4Memo;
