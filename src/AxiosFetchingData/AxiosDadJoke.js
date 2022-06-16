import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosDadJoke = () => {
  const url = 'https://icanhazdadjoke.com';

  const [joke, setData] = useState(' ');

  const fetchData = async () => {
    try {
      const resp = await axios(url, {
        headers: {
          Accept: 'application/json',
        },
      });
      const data = resp.data;
      setData(data.joke);
      return data;
    } catch (error) {
      console.log('some error fetching data');
    }
  };

  console.log(joke);

  return (
    <div className="main">
      <button onClick={fetchData}>Fetch Dad Joke</button>
      {joke === ' ' ? (
        <p id={Date.now()}>"Click to get random joke"</p>
      ) : (
        <p id={Date.now()}>{joke}</p>
      )}
    </div>
  );
};

export default AxiosDadJoke;
