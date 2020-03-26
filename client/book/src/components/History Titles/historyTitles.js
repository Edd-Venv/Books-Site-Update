import React, { useContext } from "react";
import { UserContext } from "../../App.js";
import { HistoryContext } from "../../contexts/HistoryContext/HistoryContext.js";
import "./historyTitles.css";

const HistoryTitles = () => {
  const { isLoaded, data } = useContext(HistoryContext);
  const [user] = useContext(UserContext);

  async function saveBook(Link) {
    if (!user.accesstoken)
      return console.log("You need to login to Save Book.");
    else
      try {
        const result = await (
          await fetch("http://localhost:4000/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${user.accesstoken}` //To Be Converted To User ID using Auth in Server
            },
            body: JSON.stringify({
              book_image: Link
            })
          })
        ).json();
      } catch (error) {
        console.log(error);
      }
  }
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
                <button onClick={saveBook.bind(this, info._links[1].href)}>
                  save
                </button>
              </div>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default React.memo(HistoryTitles);
