import React from "react";

const SearchResult = props => {
  const { summary, data } = props;
  const [user] = useContext(UserContext);

  async function saveBook(Args) {
    if (!user.accesstoken)
      return console.log("You need to login to Save Book.");
    else {
      const result = await (
        await fetch("http://localhost:4000/search/saveBook", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user.accesstoken}` //To Be Converted To User ID using Auth in Server
          },
          body: JSON.stringify({
            book_image: Args[0],
            book_key: Args[1],
            book_title: Args[2],
            book_author: Args[3],
            book_price: Args[4],
            book_currencyCode: Args[5],
            book_pages: Args[6]
          })
        })
      ).json();

      if (!result.error) {
        console.log(result.message);
      } else {
        console.log(result.error);
      }
    }
  }
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
              <button
                className="btn btn-primary"
                onClick={saveBook.bind(this, [
                  data.coverUrl,
                  data.isbn,
                  data.name,
                  data.authors[0].authorDisplay,
                  data.prices[0].amount,
                  data.prices[0].currencyCode,
                  data.pages
                ])}
              >
                save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(SearchResult);
