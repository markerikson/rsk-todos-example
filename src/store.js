import { configureStore } from "redux-starter-kit";

import todosReducer from "./todos";
import filterReducer from "./visibilityFilters";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    visibilityFilter: filterReducer
  }
});
