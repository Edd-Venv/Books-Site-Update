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
  const apiKey = "2n9pws7675zn9bu39htq5gjz";
  useEffect(() => {
    fetch(
      `https://api.penguinrandomhouse.com/resources/v2/title/domains/SALESINTERNATIONAL/categories/1/titles?showCovers=true&api_key=${apiKey}`
    )
      .then(results => {
        return results.json();
      })
      .then(Data => {
        dispatch({
          type: "GET",
          isLoaded: true,
          data: Data.data.titles
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
