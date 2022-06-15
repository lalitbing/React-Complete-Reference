import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosExample = () => {
  const url = 'https://icanhazdadjoke.com';

  const [joke, setData] = useState('random joke');

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

  return (
    <div>
      <button onClick={fetchData}>Fetch Dad Joke</button>
      <p id={Date.now()}>{joke}</p>
    </div>
  );
};

export default AxiosExample;
