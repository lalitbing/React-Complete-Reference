import React, { useReducer, useState } from "react";
import TODO_useReduce from "./TODO_useReduce";

export const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  COMPLETE_TODO: "COMPLETE_TODO",
  RESET_TODO: "RESET_TODO",
};

const Hooks2ToDo = () => {
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload.name)];
      case ACTIONS.COMPLETE_TODO:
        return todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, complete: !todo.complete };
          }
          return todo;
        });
      case ACTIONS.DELETE_TODO:
        return todos.filter((todo) => todo.id !== action.payload.id);

      case ACTIONS.RESET_TODO:
        return [];
      default:
        return todos;
    }
  }

  function newTodo(name) {
    return { id: Date.now(), name: name, complete: false };
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }
  return (
    <div className="main">
      <h1>useReducer ToDo App</h1>
      <div>
        <form onSubmit={handleSubmit} className="leftAlign">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>

        {todos.map((todo) => {
          return (
            // eslint-disable-next-line react/jsx-pascal-case
            <TODO_useReduce key={todo.id} todo={todo} dispatch={dispatch} />
          );
        })}
        {/* {console.log(todos)} */}
      </div>
      <div className="leftAlign">
        {todos.length === 0 ? (
          ""
        ) : (
          <button
            onClick={() => {
              dispatch({ type: ACTIONS.RESET_TODO });
            }}
          >
            Reset Todo ☠
          </button>
        )}
      </div>
      <p>Todo App made using one of the most complex hook useReducer</p>
    </div>
  );
};

export default Hooks2ToDo;
