import React, { createContext } from "react";

const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const favorites = [{ title: "hr1" }, { title: "hr2" }];
  return (
    <ListContext.Provider value={favorites}>{children}</ListContext.Provider>
  );
};

export default ListContext;
