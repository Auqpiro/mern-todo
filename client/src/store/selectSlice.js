import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: null,
};

const selectorsSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    selectTodo: (state, { payload }) => {
      state.todo = payload;
    }
  },
});

export const {
  selectTodo,
} = selectorsSlice.actions;

export default selectorsSlice.reducer;
