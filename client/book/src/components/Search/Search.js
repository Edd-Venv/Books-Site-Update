import React, { useReducer } from "react";
import SearchForm from "./SearchForm.js";
import { SearchReducer } from "../../contexts/Reducer.js";
import SearchError from "./SearchError.js";
import SearchResult from "./SearchResult.js";

const Search = () => {
  const [state, dispatch] = useReducer(SearchReducer, {
    isLoaded: false,
    summary: "Dummy DATA",
    data: [],
    display: "hide"
  });

  const handleClose = () => {
    dispatch({ type: "DISPLAY", display: "hide" });
  };

  const onAddSearch = text => {
    (async function fetchData() {
      await fetch("http://localhost:4000/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          search_text: text
        })
      })
        .then(response => {
          return response.json();
        })
        .then(Data => {
          dispatch({
            type: "SEARCH",
            isLoaded: true,
            data: Data.data.data.results[0],
            summary: Data.data.data.results[0].flapCopy
              .replace(/<p>/g, " ")
              .replace(/<b>/g, " ")
              .replace(/p>/g, " ")
              .replace(/</g, " ")
              .replace(/i>/g, " ")
              .replace(/b>/g, " ")
              .replace(/br> br>/g, " ")
              .replace(/--/g, " ")
              .replace(/&#160;&#160;/g, " ")
              .replace(/&#8212;/g, " ")
              .replace(/&rsquo;/g, " ")
              .replace(/&ldquo;/g, " ")
              .replace(/&rdquo;/g, " ")
              .replace(/&mdash;/g, " ")
              .replace(/&#160;/g, " ")
              .replace(/&bull;/g, " ")
              .replace(/,&#160; /g, " ")
              .replace(/;&#160;/g, " ")
              .replace(/&bull;&#160;/g, " ")
              .substring(0, 250),
            display: "show"
          });
        });
    })();
  };
  const { display, isLoaded, summary, data } = state;
  return (
    <React.Fragment>
      <SearchForm onAddSearch={onAddSearch} />
      <br />
      <div>
        <div className={display}>
          <span
            onClick={handleClose}
            className="close"
            style={{
              color: "red",
              fontWeight: "bold",
              fontSize: "3em",
              marginRight: "29%"
            }}
          >
            ×
          </span>
          {isLoaded === true && data === undefined ? (
            <SearchError />
          ) : (
            <SearchResult isLoaded={isLoaded} summary={summary} data={data} />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Search;
