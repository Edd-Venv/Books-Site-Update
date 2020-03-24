import React, { useState } from "react";

const SearchForm = React.memo(props => {
  const [currentText, setText] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    props.onAddSearch(currentText);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} style={{ marginLeft: "38%" }}>
      <span className="form-inline">
        <input
          className="form-control"
          type="text/number"
          onChange={event => {
            setText(event.target.value);
          }}
          value={currentText}
          placeholder="Book Title"
          style={{ width: "35%", fontSize: "1.2rem" }}
          id="input"
          required
        />
        <button className="btn btn-dark" type="submit">
          <i className="fas fa-search" />
        </button>
      </span>
    </form>
  );
});
export default SearchForm;
