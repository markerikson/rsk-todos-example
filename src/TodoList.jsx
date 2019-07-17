import React from "react";
import {connect} from "react-redux";
import {toggleTodo} from "./todos";

const mapState = (state) => {
  return {
    todos : state.todos,
  };
}

const mapDispatch = {toggleTodo};

const Todo = ({ completed, text, id, toggleTodo }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
    onClick={() => toggleTodo({id})}
  >
    {text}
  </li>
)

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        toggleTodo={toggleTodo}
        {...todo}
      />
    )}
  </ul>
)

export default connect(mapState, mapDispatch)(TodoList);