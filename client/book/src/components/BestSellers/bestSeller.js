import React, { useContext } from "react";
import { BestSellerContext } from "../../contexts/BestSellerContext/BestSellerContext.js";
import "./bestSeller.css";

const BestSellers = () => {
  const { isLoaded, data } = useContext(BestSellerContext);

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
        <div className="flex-container-best-sellers">
          {data.map(info => {
            return (
              <div className="container" key={info.isbn}>
                <img
                  alt="loading"
                  src={info._links[1].href}
                  className="img-thumbnail"
                  style={{ width: "100%" }}
                  id="box"
                />
                <div className="overlay-container">
                  <div className="overlay">
                    <div className="text">
                      <br />
                      <br />
                      <br />
                      <br />
                      {info.author}
                      <hr style={{ margin: "0 auto" }} />
                      Pages: {info.pages}
                      <br />
                      Price: {info.price[1].amount} {info.price[1].currencyCode}
                      <br />
                      {info.consumerFormat}
                      <br />
                      {info.version}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default BestSellers;
