import React from "react";
import Axios from "axios";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: []
    };
  }
  async componentDidMount() {
    const apiKey = "2n9pws7675zn9bu39htq5gjz";
    const url = `https://api.penguinrandomhouse.com/resources/v2/title/domains/SALESINTERNATIONAL/categories/1/titles?showCovers=true&api_key=${apiKey}`;
    Axios.get(url).then(response => {
      //console.log(response.data.data.titles.slice(0, 2));
      this.setState({
        data: response.data.data.titles.slice(0, 4),
        isLoaded: true
      });
    });
  }
  render() {
    const { data, isLoaded } = this.state;
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
  }
}

export default Header;
