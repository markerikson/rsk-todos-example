import { createSlice } from "redux-starter-kit";

let nextTodoId = 2;

const initialState = [
  { id: 0, text: "Buy milk", completed: false },
  { id: 1, text: "Do laundry", completed: true }
];

const todosSlice = createSlice({
  slice: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      const { id, text } = action.payload;
      state.push({ id, text, completed: false });
    },
    toggleTodo(state, action) {
      const { id } = action.payload;
      const todo = state.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export function addTodoWithId(text) {
  return addTodo({
    id: nextTodoId++,
    text
  });
}

export default todosSlice.reducer;
