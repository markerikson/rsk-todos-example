import { configureStore } from "redux-starter-kit";

import todosReducer from "./todos";

export const store = configureStore({
  reducer: {
    todos: todosReducer
  }
});
