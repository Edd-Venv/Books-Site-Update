import React, { createContext, useReducer, useEffect } from "react";
import { bestSellerReducer } from "../Reducer.js";

const initialState = {
  isLoaded: false,
  data: [],
  ContainerVisibilty: ""
};

export const BestSellerContext = createContext(initialState);

export const BestSellerContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bestSellerReducer, initialState);

  useEffect(() => {
    const apiKey = "2n9pws7675zn9bu39htq5gjz";

    fetch(
      `https://api.penguinrandomhouse.com/resources/v2/title/domains/SALESINTERNATIONAL/categories/1/titles?showBestsellers=true&showCovers=true&api_key=${apiKey}`
    )
      .then(results => {
        return results.json();
      })
      .then(Data => {
        dispatch({
          type: "GET",
          isLoaded: true,
          data: Data.data.titles.slice(6, 9),
          ContainerVisibilty: ""
        });
      });
  }, []);

  return (
    <BestSellerContext.Provider
      value={{
        isLoaded: state.isLoaded,
        data: state.data,
        ContainerVisibilty: state.ContainerVisibilty
      }}
    >
      {children}
    </BestSellerContext.Provider>
  );
};
