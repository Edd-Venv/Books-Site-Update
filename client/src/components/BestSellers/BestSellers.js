import React from "react";
import Axios from "axios";
import "./BestSeller.css";

class BestSellers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: [],
      ContainerVisibilty: ""
    };
  }
  async componentDidMount() {
    const apiKey = "2n9pws7675zn9bu39htq5gjz";
    const url = `https://api.penguinrandomhouse.com/resources/v2/title/domains/SALESINTERNATIONAL/categories/1/titles?showBestsellers=true&showCovers=true&api_key=${apiKey}`;
    Axios.get(url).then(response => {
      this.setState({
        data: response.data.data.titles.slice(6, 9),
        isLoaded: true,
        ContainerVisibilty: ""
      });
    });
  }
  handleClick = event => {
    this.setState({
      ContainerVisibilty: "container"
    });
  };
  render() {
    const { isLoaded, data } = this.state;
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
                        Price: {info.price[1].amount}{" "}
                        {info.price[1].currencyCode}
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
  }
}
export default BestSellers;
