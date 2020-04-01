import React, { createContext, useReducer, useEffect } from "react";
import { historyReducer } from "../Reducer.js";

const initialState = {
  isLoaded: false,
  data: []
};

// Create Context
export const HistoryContext = createContext(initialState);

//Provider Component
export const HistoryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(historyReducer, initialState);

  //Get Data From API

  useEffect(() => {
    fetch("http://18.222.115.53:4000/history")
      .then(results => {
        return results.json();
      })
      .then(Data => {
        dispatch({
          type: "GET",
          isLoaded: true,
          data: Data.data.data.titles
        });
      });
  }, []);

  return (
    <HistoryContext.Provider
      value={{ isLoaded: state.isLoaded, data: state.data.slice(0, 4) }}
    >
      {children}
    </HistoryContext.Provider>
  );
};
