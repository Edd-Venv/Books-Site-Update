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
    fetch("http://18.222.115.53:4000/bestSellers")
      .then(results => {
        return results.json();
      })
      .then(Data => {
        dispatch({
          type: "GET",
          isLoaded: true,
          data: Data.data.data.titles.slice(6, 9),
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
