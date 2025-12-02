import axios from 'axios';
import React, { useState } from 'react';

const useFetch = (urll) => {
  const url = 'https://gitlab.example.com/api/v4/projects';
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(url);
    console.log(data);
  };
  fetchData();
  return [data];
};

export default useFetch;
