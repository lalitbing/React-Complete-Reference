import React, { useState } from 'react';
import axios from 'axios';

const AxiosRandomUsers = () => {
  const url = 'https://randomuser.me/api/';

  const [val, setVal] = useState({});

  const fetchData = async () => {
    const { data } = await axios.get(url);
    setVal(data.results[0]);
  };

  console.log(val);
  const { name, email, gender } = val;
  function getName() {
    try {
      if (name) return name.first;
    } catch (error) {}
  }
  const firstName = getName();

  return (
    <div className="main">
      <h1>Fetch Custom Hook</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {val == {} ? (
        ''
      ) : (
        <div>
          <span>{firstName}</span>
          <br />
          <span>{email}</span>
          <br />
          <span>{gender}</span>
        </div>
      )}
    </div>
  );
};

export default AxiosRandomUsers;
