import { createSlice } from "redux-starter-kit";

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

const filterSlice = createSlice({
  slice: "visibilityFilter",
  initialState: VisibilityFilters.SHOW_ALL,
  reducers: {
    setVisibilityFilter(state, action) {
      return action.payload.filter;
    }
  }
});

export const { setVisibilityFilter } = filterSlice.actions;

export default filterSlice.reducer;
