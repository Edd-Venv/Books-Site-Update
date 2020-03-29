import React, { useEffect, createContext, useReducer } from "react";
import { userInfoReducer } from "../Reducer.js";

const initialState = { data: [] };

export const userInfoContext = createContext(initialState);
export const UserInfoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userInfoReducer, initialState);

  async function getName() {
    if (user.accesstoken) {
      try {
        const result = await (
          await fetch("http://localhost:4000/userName", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${user.accesstoken}`
            }
          })
        ).json();

        setName(result.name);
      } catch (error) {
        console.log(error);
      }
    }
  }
  useEffect(() => {
    export async function getUserInfo(name) {
      const result = await (
        await fetch("http://localhost:4000/userName", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            person_name: name
          })
        })
      ).json();
      dispatch({ type: "SETUSERNAME", data: result.person_name });
      console.log("userInfoContext", result);
    }
  }, []);
  return (
    <userInfoContext.Provider value={{ data: state.data }}>
      {children}
    </userInfoContext.Provider>
  );
};
export default getUserInfo;
