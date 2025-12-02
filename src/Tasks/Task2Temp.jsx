import React, { useState } from 'react';

const Task2Temperature = () => {
  const [celcius, setCelcius] = useState(0);

  function toFahrenheit(c) {
    return (c * 9) / 5 + 32;
  }

  return (
    <div className="main">
      <h1>Celcius to Fahrenheit converter</h1>
      <div>
        <h3>Celcius</h3>
        <input
          type="number"
          value={celcius}
          onChange={(e) => setCelcius(e.target.value)}
        />
        <h3>Fahrenheit</h3>
        <input type="number" value={toFahrenheit(celcius)} readOnly />
      </div>
    </div>
  );
};

export default Task2Temperature;
