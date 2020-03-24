import React from "react";

const SearchError = React.memo(() => {
  return (
    <React.Fragment>
      <p
        style={{
          color: "white",
          marginLeft: "30%",
          width: "5%",
          height: "auto",
          font: "1.3rem"
        }}
      >
        Sorry, Book Not In DataBase
      </p>
    </React.Fragment>
  );
});
export default SearchError;
