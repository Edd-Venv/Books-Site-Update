import React from "react";
import "./App.css";
import Search from "./components/Search";
import Header from "./components/Header/Header.js";
import TopSix from "./components/TopSix/TopSix";
import BestSellers from "./components/BestSellers/BestSellers";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            maxWidth: "1200px",
            minWidth: "50%",
            margin: "0 auto"
          }}
        >
          <Search />
          <br />
          <br />
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.5rem",
              fontWeight: "bolder",
              color: "whitesmoke"
            }}
          >
            BEST SELLER TITLES
            <hr style={{ width: "22.5%", margin: "0 auto" }} />
          </h2>

          <br />
          <BestSellers />
          <br />
          <br />
          <h2
            style={{
              textAlign: "center",
              margin: "0 auto",
              fontSize: "2.5rem",
              fontWeight: "bolder",
              color: "whitesmoke"
            }}
          >
            HISTORY TITLES
            <hr style={{ width: "19%", margin: "0 auto" }} />
          </h2>
          <br />
          <Header />
          <br />
          <br />
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.5rem",
              fontWeight: "bolder",
              color: "whitesmoke"
            }}
          >
            SUNDAY READS
            <hr style={{ width: "18.7%", margin: "0 auto" }} />
          </h2>
          <br />
          <TopSix />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
