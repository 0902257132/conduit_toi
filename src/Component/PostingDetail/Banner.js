import React from "react";

function Banner(props) {
  const { title, date, username } = props;
  return (
    <div className="article-meta banner-detail-posting">
      <div className="container">
        <h1>{title}</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-2">
                <a href="/">
                  <img
                    src="https://static.productionready.io/images/smiley-cyrus.jpg"
                    className="avatar"
                    alt="ava"
                  />
                </a>
              </div>
              <div className="col-md-10">
                <a href="/" className="font-color-green">
                  {username}
                </a>
                <p className="date"> {date} </p>
                <button className="btn btn-dark">Edit Article</button>
                <button className="btn btn-warning">Delete Article</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
