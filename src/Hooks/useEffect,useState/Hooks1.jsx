import React, { useEffect, useState } from 'react';

const Hooks1 = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const reset = () => {
    setCount(0);
  };

  useEffect(() => {
    document.title = `Counter(${count})`;
  }, [count]);

  return (
    <div className="main">
      {console.log('Render')}
      <h1>useState and useEffect</h1>
      <h3>{count}</h3>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+</button>
      </div>
      <p>
        Counter functionality using useState. <br />
        Document.title is changed using useEffect with its dependency as the
        count itself.
      </p>
    </div>
  );
};

export default Hooks1;
