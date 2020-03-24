import React, { useEffect, createContext, useReducer } from "react";
import { sundayReadsReducer } from "../Reducer.js";

const initialState = { isLoaded: false, data: [] };

export const sundayReadsContext = createContext(initialState);

export const SundayReadsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sundayReadsReducer, initialState);

  const apiKey = "2n9pws7675zn9bu39htq5gjz";
  useEffect(() => {
    fetch(
      `https://api.penguinrandomhouse.com/resources/v2/title/domains/SALESINTERNATIONAL/categories/20/titles?showCovers=true&api_key=${apiKey}`
    )
      .then(result => {
        return result.json();
      })
      .then(Data => {
        dispatch({
          type: "GET",
          isLoaded: true,
          data: Data.data.titles.slice(0, 5)
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
