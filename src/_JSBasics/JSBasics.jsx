import React from "react";

const JSBasics = () => {
  function dupli(arr) {
    let cache = {};
    let results = [];
    for (let i = 0; i < arr.length; i++) {
      if (cache[arr[i]]) {
        results.push(arr[i]);
      } else {
        cache[arr[i]] = true;
      }
    }
    return results;
  }

  const arr1 = [10, 20, 20, 30, 40, 40, 50];
  console.log(dupli(arr1));

  const myPromise = new Promise((resolve, reject) => {
    const x = "lalit";
    const y = "lalit";
    if (x === y) {
      resolve();
    } else {
      reject();
    }
  });

  myPromise
    .then(() => console.log("x nd y are same"))
    .catch(() => console.log("x and y not same"));

  return (
    <div className="main">
      <h1>JS Basics</h1>
    </div>
  );
};

export default JSBasics;
