import React, { useState } from 'react';

function Task2Temperature() {
  // const [name, setName] = useState('');
  const [temp, setTemp] = useState({
    f: 0,
    c: 0,
  });

  const updateC = (e) =>
    setTemp({
      c: e.target.value,
      f: ((+e.target.value * 9) / 5 + 32).toFixed(3),
    });
  const updateF = (e) =>
    setTemp({
      c: (((+e.target.value - 32) * 5) / 9).toFixed(2),
      f: e.target.value,
    });

  return (
    <div className="main">
      <h1>Celcius to Fahrenheit converter</h1>
      <div>
        <h3>Celcius</h3>
        <input
          type="number"
          placeholder="Celcius"
          value={temp.c}
          onChange={updateC}
        />
      </div>

      <div>
        <h3>Fahrenheit</h3>
        <input
          type="number"
          placeholder="Fahrenheit"
          value={temp.f}
          onChange={updateF}
        />
      </div>
    </div>
  );
}

export default Task2Temperature;
