import React from "react";
import {connect} from "react-redux";
import {toggleTodo} from "./todos";
import {VisibilityFilters} from "./visibilityFilters";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapState = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})


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