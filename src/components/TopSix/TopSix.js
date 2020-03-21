import React from "react";
import Axios from "axios";
import "./TopSix.css";

class TopSix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: []
    };
  }
  async componentDidMount() {
    const apiKey = "2n9pws7675zn9bu39htq5gjz";
    const url = `https://api.penguinrandomhouse.com/resources/v2/title/domains/SALESINTERNATIONAL/categories/20/titles?showCovers=true&api_key=${apiKey}`;
    Axios.get(url).then(response => {
      //console.log(response.data.data.titles.slice(0, 1));
      this.setState({
        data: response.data.data.titles.slice(0, 5),
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
          <div className="flex-container-top-six">
            {data.map(info => {
              return (
                <div
                  key={info.isbn}
                  style={{ width: "30%", margin: "0 0.2em" }}
                >
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

export default TopSix;
