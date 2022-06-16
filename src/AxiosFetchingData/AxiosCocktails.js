import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosCocktails = () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('a');

  const fetchDrinks = async () => {
    try {
      const { data } = await axios.get(url);
      const { drinks } = data;
      //   console.log(drinks);
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink } = item;
          return {
            id: idDrink,
            name: strDrink,
          };
        });
        setCocktails(drinks);
      } else {
        setCocktails([]);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  console.log(cocktails);

  useEffect(() => {
    fetchDrinks();
  }, []);

  return (
    <div className="main">
      <h1>Axios Cocktails</h1>
      {/* <div>{cocktails}</div> */}
    </div>
  );
};

export default AxiosCocktails;
