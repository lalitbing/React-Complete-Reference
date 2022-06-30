import React from 'react';

const JSBasics = () => {
  // function outer(x) {
  //   console.log('outer');
  //   function inner() {
  //     console.log(x);
  //   }
  //   return inner;
  // }

  // var x = 20;
  // outer(10)();

  // const obj1 = {
  //   num: 10,
  // };

  // function add(a) {
  //   return this.num + a;
  // }

  // console.log(add.call(obj1, 100));

  // const random = add.bind(obj1, 5);
  // console.log(random());

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
    const x = 'lalit';
    const y = 'lalit';
    if (x == y) {
      resolve();
    } else {
      reject();
    }
  });

  myPromise
    .then(() => console.log('x nd y are same'))
    .catch(() => console.log('x and y not same'));

  return (
    <div className="main">
      <h1>JS Basics</h1>
    </div>
  );
};

export default JSBasics;
