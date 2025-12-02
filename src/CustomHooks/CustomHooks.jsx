import React from 'react';
import CounterCustomHook from './CounterCustomHook/CounterCustomHook';
import FetchCustomHook from './FetchCustomHook/FetchCustomHook';

const CustomHooks = () => {
  return (
    <div className="main">
      <h1>Custom Hooks</h1>
      {/* <CounterCustomHook /> */}
      <FetchCustomHook />
    </div>
  );
};

export default CustomHooks;
