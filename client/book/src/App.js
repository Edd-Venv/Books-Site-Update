import React from "react";
import "./App.css";
import Search from "./components/Search/Search";
import BestSellers from "./components/BestSellers/bestSeller.js";
import { BestSellerContextProvider } from "./contexts/BestSellerContext/BestSellerContext.js";
import HistoryTitles from "./components/History Titles/historyTitles.js";
import { HistoryContextProvider } from "./contexts/HistoryContext/HistoryContext.js";
import SundayReads from "./components/Sunday Reads/sundayReads.js";
import { SundayReadsContextProvider } from "./contexts/SundayContext/SundayContext.js";

function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        minWidth: "50%",
        margin: "0 auto"
      }}
    >
      <Search />
      <br />
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.1rem",
          fontWeight: "bolder",
          color: "whitesmoke"
        }}
      >
        BEST SELLER TITLES
        <hr style={{ width: "22.5%", margin: "0 auto" }} />
      </h2>
      <br />
      <BestSellerContextProvider>
        <BestSellers />
      </BestSellerContextProvider>
      <br />
      <br />
      <h2
        style={{
          textAlign: "center",
          margin: "0 auto",
          fontSize: "2.1rem",
          fontWeight: "bolder",
          color: "whitesmoke"
        }}
      >
        HISTORY TITLES
        <hr style={{ width: "19%", margin: "0 auto" }} />
      </h2>
      <br />
      <HistoryContextProvider>
        <HistoryTitles />
      </HistoryContextProvider>
      <br />
      <br />
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.1rem",
          fontWeight: "bolder",
          color: "whitesmoke"
        }}
      >
        SUNDAY READS
        <hr style={{ width: "18.7%", margin: "0 auto" }} />
      </h2>
      <br />
      <SundayReadsContextProvider>
        <SundayReads />
      </SundayReadsContextProvider>
    </div>
  );
}

export default App;
/*


import React, { useState, useEffect } from "react";
import { Router, navigate } from "@reach/router";

import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Register from "./components/Register";
import Protected from "./components/Protected";
import Content from "./components/Content";

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
    <UserContext.Provider value={[user, setUser]}>
      <div className="app">
        <Navigation logOutCallback={logOutCallback} />
        <Router id="router">
          <Login path="login" />
          <Register path="register" />
          <Protected path="protected" />
          <Content path="/" />
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;



*/
