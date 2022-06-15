import React, { createContext, useContext, useState } from 'react';

document.title = `useContext`;

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState({ name: 'Ross', age: 42 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <h2>Component1</h2>
      <h2>{`Hello ${user.name}`}</h2>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h2>Component2</h2>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h2>Component3</h2>
      <Component4 />
    </>
  );
}

function Component4() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h2>Component4</h2>
      <h4>Value Fetched using useContext: </h4>
      <h4> User.name: {user.name}</h4>
      <h4> User.age: {user.age}</h4>
    </>
  );
}

const Hooks3 = () => {
  return (
    <div className="main">
      <h1>useContext</h1>
      <div className="leftAlign">
        <Component1 />
      </div>
      <p className="leftAlign">
        <span style={{ color: 'black' }}>Prop Drilling </span> is a very major
        issue when working with large projects.
        <br />
        <span style={{ color: 'black' }}>useContext </span> Hook helps us to
        tackle prop drilling by creating a golbal context.
        <br />
        <span style={{ color: 'black' }}>Provider: </span>
        stores all values to pass down. <br />
        <span style={{ color: 'black' }}>Consumer: </span>
        To access the values from Provider wherever needed.
      </p>
    </div>
  );
};

export default Hooks3;
