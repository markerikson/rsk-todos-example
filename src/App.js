import React from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
