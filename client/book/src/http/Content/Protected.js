import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App.js";
import Navigation from "../Navigation/Navigation.js";

const Protected = () => {
  // Could have something here to check for the time when the accesstoken expires
  // and then call the refresh_token endpoint to get a new accesstoken automatically
  const [user] = useContext(UserContext);
  const [content, setContent] = useState([]);

  async function fetchProtected() {
    const result = await (
      await fetch("http://localhost:4000/protected", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.accesstoken}`
        }
      })
    ).json();

    if (result.data) setContent([result.data]);
  }

  useEffect(() => {
    //fetch Data at Initialization
    fetchProtected();
  }, [user]);

  async function deleteBook(Args) {
    try {
      if (user.accesstoken)
        await fetch("http://localhost:4000/protected", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user.accesstoken}`
          },
          body: JSON.stringify({
            book_title: Args[0],
            book_key: Args[1]
          })
        });
      fetchProtected();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <React.Fragment>
      <Navigation displayLogin={"dontDisplayLoginForm"} />
      <br />
      {!user.accesstoken ? (
        <div>You need to login</div>
      ) : user.accesstoken && content[0] === undefined ? (
        <div>loading...</div>
      ) : user.accesstoken && content[0].length === 0 ? (
        <div>You Don't Have Books Saved</div>
      ) : (
        <div className="flex-container-header">
          {content[0].map(info => {
            return (
              <div key={info.book_key} style={{ width: "20%" }}>
                <img
                  alt="loading"
                  src={info.book_image}
                  className="img-thumbnail"
                  style={{ width: "100%" }}
                  id="box"
                />
                <button
                  onClick={deleteBook.bind(this, [
                    info.book_title,
                    info.book_key
                  ])}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default Protected;
/*

if (!user.accesstoken) return <div>You need to login</div>;

  if (user.accesstoken && content[0] === undefined)
    return (
      <React.Fragment>
        <Navigation displayLogin={"dontDisplayLoginForm"} />
        <br />
        <div>loading...</div>
      </React.Fragment>
    );

  if (user.accesstoken && content[0].length === 0)
    return (
      <React.Fragment>
        <Navigation displayLogin={"dontDisplayLoginForm"} />
        <br />
        <div>You Don't Have Books Saved</div>
      </React.Fragment>
    );

*/
