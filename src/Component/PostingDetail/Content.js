import React from "react";

function Title(props) {
  const { content, taglist } = props;
  return (
    <div className="row mt-5 mb-5 border-bottom">
      <p className="content-detail-posting mb-5"> {content} </p>
      <div className="col-md-12 clear-fix">
        <ul className="tag-list float-left">
          {taglist.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Title;
