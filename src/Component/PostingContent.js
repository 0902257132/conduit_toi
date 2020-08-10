import React from "react";

function PostingContent(props) {
  const { title, description, tagList, slug } = props;
  const url = "/PostingDetail/" + slug;
  return (
    <div>
      <a href={url}>
        <h3 className="color-title-posting">{title}</h3>
        <p>{description}</p>
        <div className="row">
          <div className="col-md-6">
            <p>Read more ...</p>
          </div>
          <div className="col-md-6">
            <ul className="tag-list">
              {tagList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </a>
    </div>
  );
}
export default PostingContent;
