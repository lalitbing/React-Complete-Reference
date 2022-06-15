import React from 'react';
import { ACTIONS } from './Hooks2ToDo';

const TODO_useReduce = ({ todo, dispatch }) => {
  return (
    <>
      <div className="leftAlign">
        <span className={todo.complete ? 'completed' : ''}> - {todo.name}</span>
        <button
          className="todo-btn"
          onClick={() => {
            dispatch({ type: ACTIONS.COMPLETE_TODO, payload: { id: todo.id } });
          }}
        >
          ✔
        </button>
        <button
          className="todo-btn"
          onClick={() => {
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
          }}
        >
          ❌
        </button>
      </div>
    </>
  );
};

export default TODO_useReduce;
