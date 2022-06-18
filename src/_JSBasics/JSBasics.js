import React from 'react';

const JSBasics = () => {
  const arr1 = [50, 60, 70, 80, 90];
  const arr2 = [10, 20, 30, 40, 50];

  const arr3 = [...arr1, ...arr2];
  console.log('initial array:', arr3);

  function sorted(array) {
    var done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
          done = false;
          var temp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = temp;
        }
      }
    }
    return array;
  }

  const displayArray = sorted(arr3);
  console.log('sorted array:', displayArray);

  const arr4 = arr3.sort((a, b) => a - b);

  console.log('Sort method() :', arr4);

  return (
    <div className="main">
      <h1>JS Basics</h1>
      {/* <p>{`Result = [${array}]`} </p> */}
    </div>
  );
};

export default JSBasics;
