import React, { useRef, useState, useEffect } from 'react';

const Hooks5useRef = () => {
  const [name, setName] = useState('');
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="main">
      <h1>useRef</h1>
      <input
        type="text"
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p className="leftAlign">
        useRef is used to target DOM nodes.
        <br />
        In this example, whenever we load the page the focus comes directly to
        the input.
        <br />
        It is implemented using useRef.
      </p>
    </div>
  );
};

export default Hooks5useRef;
