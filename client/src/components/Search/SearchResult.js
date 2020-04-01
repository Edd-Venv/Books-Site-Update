import React from "react";

const SearchResult = props => {
  const { summary, data } = props;
  return (
    <div
      style={{
        width: "60%",
        marginLeft: "30%",
        height: "auto"
      }}
    >
      <div
        className="card mb-3"
        style={{
          paddingLeft: "1.5%",
          maxWidth: "100%",
          height: "auto"
        }}
      >
        <div className="row no-gutters">
          <div style={{ width: "30%", margin: "0 0.4rem" }}>
            <img
              src={data.coverUrl}
              className="img-thumbnail"
              alt="...loading"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title" style={{ marginLeft: "2%" }}>
                {data.name}
              </h2>
              <p
                className="card-text"
                style={{ fontSize: "1.3rem", width: "100%" }}
              >
                <strong>Description : </strong>
                {summary}.
              </p>
              <p
                className="card-text"
                style={{ fontSize: "1.3rem", width: "100%" }}
              >
                <strong>Release Date : </strong>
                {data.onsale}
              </p>
              <p
                className="card-text"
                style={{ fontSize: "1.3rem", width: "100%" }}
              >
                <strong>ISBN : </strong>
                {data.isbnDisplay}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(SearchResult);
