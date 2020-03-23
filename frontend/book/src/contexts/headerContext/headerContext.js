import React, { createContext, useReducer } from "react";
import { Reducer } from "../Reducer.js";
const initialState = {
  isLoaded: false,
  data: []
};
// Create Context
export const HeaderContext = createContext(initialState);

//Provider Component
export const HeaderContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <HeaderContext.Provider
      value={{ isLoaded: state.isLoaded, data: state.data }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
