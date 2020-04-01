import React, { useContext } from "react";
import { sundayReadsContext } from "../../contexts/SundayContext/SundayContext.js";
import "./sundayReads.css";

const SundayReads = () => {
  const { isLoaded, data } = useContext(sundayReadsContext);
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
        <div className="flex-container-top-six">
          {data.map(info => {
            return (
              <div key={info.isbn} style={{ width: "30%", margin: "0 0.2em" }}>
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
export default SundayReads;
