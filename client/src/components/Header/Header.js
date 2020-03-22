import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Header.css";

const Header = async () => {
  const [currentState, setState] = useState([{ isLoaded: false, data: [] }]);
  console.log();
  const apiKey = "2n9pws7675zn9bu39htq5gjz";
  const url = `https://api.penguinrandomhouse.com/resources/v2/title/domains/SALESINTERNATIONAL/categories/1/titles?showCovers=true&api_key=${apiKey}`;

  useEffect(
    Axios.get(url).then(response => {
      setState(prevState => [
        ...prevState,
        { isLoaded: true, data: response.data.data.titles.slice(0, 4) }
      ]);
      console.log(response.data.data.titles.slice(0, 2));
    }),
    []
  );

  const { isLoaded, data } = currentState;
  return (
    <React.Fragment>
      {isLoaded === false ? (
        <div
          className="spinner-grow text-dark"
          role="status"
          style={{ margin: "0 auto" }}
        >
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="flex-container-header">
          {data.map(info => {
            return (
              <div key={info.isbn} style={{ width: "20%" }}>
                <img
                  alt="loading"
                  src={info._links[1].href}
                  className="img-thumbnail"
                  style={{ width: "100%" }}
                  id="box"
                />
              </div>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default Header;
