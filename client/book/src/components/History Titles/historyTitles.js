import React, { useContext } from "react";
import { HistoryContext } from "../../contexts/HistoryContext/HistoryContext.js";
import "./historyTitles.css";

const HistoryTitles = () => {
  const { isLoaded, data } = useContext(HistoryContext);

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

export default HistoryTitles;
