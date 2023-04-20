import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";

const initialState = { Favorites: [], Bookmark: [], Watched: [] };
const showAlert = () => {
  Alert.alert(
    "Ooops!",
    "The movie already exists in the list.",
    [
      {
        text: "Okay",

        style: "cancel",
      },
    ],
    {
      cancelable: true,
    }
  );
};

const listSlice = createSlice({
  name: "list",
  initialState: initialState,
  reducers: {
    create: (state, action) => {
      const key = action.payload.title;
      state[key] = [];
    },

    remove: (state, action) => {
      const currentList = action.payload.currentList;
      const id = action.payload.id;

      for (let index = 0; index < state[currentList].length; index++) {
        const element = state[currentList][index];
        if (element.id == id) {
          state[currentList].splice(index, 1);
        }
      }
    },

    empty: (state) => {
      for (const key in state) {
        delete state[key];
      }

      for (const key in initialState) {
        state[key] = [];
      }
    },

    add: (state, action) => {
      const checkedList = action.payload.checkedTitle;

      const pushItem = () => {
        state[checkedList].push({
          id: action.payload.id,
          title: action.payload.title,
          poster_path: action.payload.poster_path,
        });
      };

      let existingIds = {};
      state[checkedList].forEach((element) => {
        existingIds[element.id] = 1;
      });
      existingIds.hasOwnProperty(action.payload.id) ? showAlert() : pushItem();
    },
  },
});

export const { create, remove, empty, add } = listSlice.actions;
export default listSlice.reducer;
