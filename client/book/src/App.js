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
