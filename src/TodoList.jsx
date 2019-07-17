import React from "react";
import {connect} from "react-redux";

const mapState = (state) => {
  return {
    todos : state.todos,
  };
}

const Todo = ({ completed, text }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
      />
    )}
  </ul>
)

export default connect(mapState)(TodoList);