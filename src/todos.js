import { createSlice } from "redux-starter-kit";

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
    }
  }
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
