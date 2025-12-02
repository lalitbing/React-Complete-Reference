import React, { useReducer, useState } from 'react';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
  ADD_TODO: 'add_todo',
  TOGGLE_TODO: 'toggle_todo',
  DELETE_TODO: 'delete_todo',
};

function counterReducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTIONS.RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
}

function todoReducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, { id: Date.now(), name: action.payload.name, complete: false }];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((t) => (t.id === action.payload.id ? { ...t, complete: !t.complete } : t));
    case ACTIONS.DELETE_TODO:
      return todos.filter((t) => t.id !== action.payload.id);
    default:
      return todos;
  }
}

export default function UseReducerExample() {
  const [counterState, counterDispatch] = useReducer(counterReducer, { count: 0 });
  const [todos, todoDispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState('');

  function handleAdd(e) {
    e.preventDefault();
    if (!text.trim()) return;
    todoDispatch({ type: ACTIONS.ADD_TODO, payload: { name: text } });
    setText('');
  }

  return (
    <div className="main">
      <h2>useReducer Example</h2>

      <section style={{ marginBottom: 16 }}>
        <h3>Counter</h3>
        <div>Count: {counterState.count}</div>
        <div>
          <button onClick={() => counterDispatch({ type: ACTIONS.DECREMENT })}>-</button>
          <button onClick={() => counterDispatch({ type: ACTIONS.RESET })}>Reset</button>
          <button onClick={() => counterDispatch({ type: ACTIONS.INCREMENT })}>+</button>
        </div>
      </section>

      <section>
        <h3>ToDo</h3>
        <form onSubmit={handleAdd} className="leftAlign">
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder="New todo" />
          <button type="submit">Add</button>
        </form>
        <ul>
          {todos.map((t) => (
            <li key={t.id} style={{ textDecoration: t.complete ? 'line-through' : 'none' }}>
              {t.name}{' '}
              <button onClick={() => todoDispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: t.id } })}>Toggle</button>
              <button onClick={() => todoDispatch({ type: ACTIONS.DELETE_TODO, payload: { id: t.id } })}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
