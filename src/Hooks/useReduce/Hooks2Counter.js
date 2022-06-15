import React, { useReducer } from 'react';

const Hooks2Counter = () => {
  document.title = `Counter`;
  const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset',
  };
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return { count: state.count + 1 };
      case ACTIONS.DECREMENT:
        return { count: state.count - 1 };
      case ACTIONS.RESET:
        return { count: 0 };
      default:
        throw new Error('Invalid');
    }
  }

  return (
    <div className="main">
      <h1>useReducer</h1>
      <h3>Count: {state.count}</h3>
      <div>
        <button
          onClick={() => {
            dispatch({ type: ACTIONS.DECREMENT });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch({ type: ACTIONS.RESET });
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            dispatch({ type: ACTIONS.INCREMENT });
          }}
        >
          +
        </button>
      </div>
      <p>
        {' '}
        Counter Functionlity using one of the most complex hook useReducer.
      </p>
    </div>
  );
};

export default Hooks2Counter;
