import "./App.css";
import "./App2.js";
import React, { useState, useEffect } from "react";
import { Router, navigate } from "@reach/router";
import Navigation from "./http/Navigation/Navigation.js";
import Register from "./http/Register/Register.js";
import Protected from "./http/Content/Protected.js";
import Content from "./http/Content/Content.js";
import App2 from "./App2.js";

export const UserContext = React.createContext([]);

function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const logOutCallback = async () => {
    await fetch("http://localhost:4000/logout", {
      method: "POST",
      credentials: "include" // Needed to include the cookie
    });
    // Clear user from context
    setUser({});
    // Navigate back to startpage
    navigate("/");
  };

  // First thing, check if a refreshtoken exist(If USer STill Has Access)
  useEffect(() => {
    async function checkRefreshToken() {
      const result = await (
        await fetch("http://localhost:4000/refresh_token", {
          method: "POST",
          credentials: "include", // Needed to include the cookie
          headers: {
            "Content-Type": "application/json"
          }
        })
      ).json();
      setUser({
        accesstoken: result.accesstoken
      });
      setLoading(false);
    }
    checkRefreshToken();
  }, []);
  /*const getUserName = name => {
    console.log(name);
  };*/
  if (loading) return <div>Loading ...</div>;
  return (
    <React.Fragment>
      <UserContext.Provider value={[user, setUser]}>
        <div className="app">
          <Router id="router">
            <Navigation path="/" logOutCallback={logOutCallback} />
            <Register path="register" />
            <Protected path="protected" />
            <Content path="/" />
          </Router>
        </div>
        <App2 />
      </UserContext.Provider>
    </React.Fragment>
  );
}

export default App;
