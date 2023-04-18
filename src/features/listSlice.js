import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const listSlice = createSlice({
  name: "list",
  initialState: {},
  reducers: {
    create: (state, action) => {
      const key = action.payload.title;
      state[key] = [];
    },

    remove: (state, action) => {
      const key = action.payload.key;
      delete state.key;
    },
    empty: (state) => {
      for (const key in state) {
        console.log(key);
        delete state[key];
      }
      console.log(state);
    },
    add: (state, action) => {
      console.log(action.payload.id);
      state.watchLater.push({
        id: action.payload.id,
        title: action.payload.title,
        poster_path: action.payload.poster_path,
      });
    },
  },
});

export const { create, remove, empty, add } = listSlice.actions;
export default listSlice.reducer;
