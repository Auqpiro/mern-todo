import { configureStore } from "@reduxjs/toolkit"
import todoApi from "./todosApi.js";
import selectSlice from "./selectSlice.js";

const store = configureStore({
  reducer: {
    selected: selectSlice,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(todoApi.middleware),
});

export default store;
