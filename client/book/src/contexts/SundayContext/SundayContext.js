import React, { useEffect, createContext, useReducer } from "react";
import { sundayReadsReducer } from "../Reducer.js";

const initialState = { isLoaded: false, data: [] };

export const sundayReadsContext = createContext(initialState);

export const SundayReadsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sundayReadsReducer, initialState);

  useEffect(() => {
    fetch("http://localhost:4000/sundayReads")
      .then(result => {
        return result.json();
      })
      .then(Data => {
        dispatch({
          type: "GET",
          isLoaded: true,
          data: Data.data.data.titles.slice(0, 5)
        });
      });
  }, []);

  return (
    <sundayReadsContext.Provider
      value={{ isLoaded: state.isLoaded, data: state.data }}
    >
      {children}
    </sundayReadsContext.Provider>
  );
};
