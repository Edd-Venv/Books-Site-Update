import React from "react";
import Axios from "axios";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: [],
      value: "",
      display: "hide"
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const apiKey = "2n9pws7675zn9bu39htq5gjz";
    const url = `https://api.penguinrandomhouse.com/resources/v2/title/domains/PRH.US/search/views/search-display?q=${this.state.value}&api_key=${apiKey}`;
    Axios.get(url).then(response => {
      this.setState({
        isLoaded: true,
        data: response.data.data.results[0],
        summary: response.data.data.results[0].flapCopy
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
        display: "show",
        value: ""
      });
    });
  };
  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };
  handleClick = event => {
    this.setState({
      display: "hide"
    });
  };
  render() {
    const { data, display, summary, isLoaded } = this.state;
    return (
      <React.Fragment>
        //FORM
        <form onSubmit={this.handleSubmit} style={{ marginLeft: "38%" }}>
          <span className="form-inline">
            <input
              className="form-control"
              type="text/number"
              onChange={this.handleChange}
              value={this.state.value}
              placeholder="Book Title"
              style={{ width: "35%", fontSize: "1.2em" }}
              id="input"
            />
            <button className="btn btn-dark" type="submit">
              <i className="fas fa-search" />
            </button>
          </span>
        </form>
        <br />
        //ERROR
        <div>
          <div className={display}>
            <span
              onClick={this.handleClick}
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
            {(isLoaded === true && summary === undefined) ||
            (isLoaded === true && data === undefined) ? (
              <p
                style={{
                  color: "white",
                  marginLeft: "30%",
                  width: "5%",
                  height: "auto"
                }}
              >
                Sorry, Book Not In DataBase
              </p>
            ) : (
              //RESult
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
                    <div className="col-md-4">
                      <img
                        src={data.coverUrl}
                        className="card-img"
                        alt="..."
                        style={{ height: "auto", width: "100%" }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h2 className="card-title" style={{ marginLeft: "2%" }}>
                          {data.name}
                        </h2>
                        <p
                          className="card-text"
                          style={{ fontSize: "1.3em", width: "100%" }}
                        >
                          <strong>Description : </strong>
                          {summary}.
                        </p>
                        <p
                          className="card-text"
                          style={{ fontSize: "1.3em", width: "100%" }}
                        >
                          <strong>Release Date : </strong>
                          {data.onsale}
                        </p>
                        <p
                          className="card-text"
                          style={{ fontSize: "1.3em", width: "100%" }}
                        >
                          <strong>ISBN : </strong>
                          {data.isbnDisplay}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}{" "}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
