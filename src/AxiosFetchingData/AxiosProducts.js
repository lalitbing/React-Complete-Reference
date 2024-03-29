import React, { useRef, useState } from 'react';
import axios from 'axios';

const AxiosProducts = () => {
  const url = 'https://course-api.com/react-store-products';
  const [products, setProducts] = useState([]);
  // const [product, setProduct] = useState([]);
  const [isActive, setActive] = useState(false);

  const fetchData = async () => {
    const { data } = await axios.get(url);
    setProducts(data);
  };

  const clearProducts = () => {
    setProducts([]);
  };

  const clearSingleProduct = (productID) => {
    const filteredArray = products.filter((item) => item.id != productID);
    setProducts(filteredArray);
  };

  function capitalize(input) {
    var words = input.split(' ');
    var CapitalizedWords = [];
    words.forEach((element) => {
      CapitalizedWords.push(
        element[0].toUpperCase() + element.slice(1, element.length)
      );
    });
    return CapitalizedWords.join(' ');
  }

  function capitalizeHandler() {
    setActive(!isActive);
  }

  return (
    <div className="main">
      <button onClick={fetchData}>Fetch Products</button>
      <button onClick={clearProducts}>Clear Products</button>
      <div>
        {products.map((product) => {
          return (
            <div className="smallFlex" id={product.id} key={product.id}>
              <h3 className={isActive ? 'capitalizeText' : ''}>
                {product.name}
              </h3>
              <div>
                <button
                  className="smallBtn"
                  onClick={() => clearSingleProduct(product.id)}
                >
                  Clear
                </button>
                <button className="smallBtn" onClick={capitalizeHandler}>
                  Capitalize
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AxiosProducts;
