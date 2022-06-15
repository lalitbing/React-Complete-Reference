import React, { useState } from 'react';
import axios from 'axios';

const AxiosCocktails = () => {
  const url = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=a';
  const [cocktails, setCocktails] = useState([]);

  return (
    <div className="main">
      <h1>Axios Cocktails</h1>
    </div>
  );
};

export default AxiosCocktails;
