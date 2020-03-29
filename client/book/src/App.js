import "./App.css";
import React, { useState, useEffect } from "react";
import { Router, navigate } from "@reach/router";
import Register from "./http/Register/Register.js";
import Protected from "./http/Content/Protected.js";
import Content from "./http/Content/Content.js";
import Settings from "./http/Settings/Settings.js";
import Login from "./http/Login/Login.js";

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

  if (loading) return <div>Loading ...</div>;
  return (
    <React.Fragment>
      <UserContext.Provider value={[user, setUser]}>
        <div className="app">
          <Router id="router">
            <Login path="login" />
            <Register path="register" />
            <Protected path="protected" />
            <Settings path="settings" logOutCallback={logOutCallback} />
            <Content
              path="/"
              loading={loading}
              logOutCallback={logOutCallback}
            />
          </Router>
        </div>
      </UserContext.Provider>
    </React.Fragment>
  );
}

export default App;
